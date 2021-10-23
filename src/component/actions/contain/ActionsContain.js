import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { usePosFollowBodyOrElm } from '../../../_hooks/usePosFollowBodyOrElm';
//
import CloseDiv from '../../some_div/close_div/CloseDiv';

//
ActionsContain.propTypes = {};

//
function ActionsContain({
    ref_btn_elm,
    children,

    scroll_elm,
    is_at_body = true,
    header_head,

    callbackOpen,
    callbackClose,
}) {
    //
    const ref_child = useRef(null);

    //
    const {
        ref_is_open,
        ref_starting,
        ref_pos,

        handleOpen,
        handleClose,
        // calculatePos,
    } = usePosFollowBodyOrElm({
        getScrollElm: getScrollElm,
        ref_base_elm: ref_btn_elm,
        is_at_body: is_at_body,

        getChildWidth: getChildWidth,
        header_head: header_head,
    });

    const {
        top_or_bottom,
        position_y,
        transform_y,
        max_height,

        left_or_right,
        position_x,
        transform_x,
    } = ref_pos.current;

    //
    useEffect(() => {
        handleOpen({ callbackOpen: callbackOpen });
    }, []);

    // ------

    //
    function getScrollElm() {
        return ref_btn_elm.current.closest('[class~=div_fix_scroll]');
    }

    //
    function getChildWidth() {
        return ref_child.current.getBoundingClientRect().width;
    }

    //
    function makeDivHidden() {
        handleClose({ callbackClose: callbackClose });
    }

    //
    return (
        ref_is_open.current && (
            <CloseDiv makeDivHidden={makeDivHidden} refs_target={[ref_btn_elm]}>
                <div
                    ref={ref_child}
                    className={`Actions_choices pos-abs z-index-1 scroll-thin overflow-y-auto brs-8px bg-primary box-shadow-fb ${
                        ref_starting.current ? 'opacity-0' : ''
                    }`}
                    style={{
                        [left_or_right]: position_x,
                        [top_or_bottom]: position_y,
                        transform: `translate(${transform_x}, ${transform_y})`,
                        maxHeight: `${max_height}px`,
                    }}
                >
                    {children}
                </div>
            </CloseDiv>
        )
    );
}

export default ActionsContain;
