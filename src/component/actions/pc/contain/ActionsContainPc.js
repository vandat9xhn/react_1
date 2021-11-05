import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { usePosFollowBodyOrElm } from '../../../../_hooks/usePosFollowBodyOrElm';
//
import CloseDiv from '../../../some_div/close_div/CloseDiv';

//
ActionsContainPc.propTypes = {};

//
function ActionsContainPc({
    ref_btn_elm,
    class_action_contain = '',
    children,

    scroll_elm,
    header_head,
    pos_orientation,
    is_at_body = true,

    getActionsScrollElms,
    changeStyleAction,

    x_always,
    transform_x_more,
    y_always,
    transform_y_more,

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
        ref_base_elm: ref_btn_elm,
        getScrollElms: getScrollElms,
        getChildWidth: getChildWidth,
        getChildHeight: getChildHeight,

        header_head: header_head,
        pos_orientation: pos_orientation,
        is_at_body: is_at_body,

        x_always: x_always,
        y_always: y_always,
        transform_x_more: transform_x_more,
        transform_y_more: transform_y_more,

        callbackClose: callbackClose,
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
    function getScrollElms() {
        if (getActionsScrollElms) {
            return getActionsScrollElms();
        }

        return [
            window,
            scroll_elm ||
                ref_btn_elm.current.closest('[class~=div_fix_scroll]'),
        ];
    }

    //
    function getChildWidth() {
        return ref_child.current
            ? ref_child.current.getBoundingClientRect().width
            : 0;
    }

    //
    function getChildHeight() {
        return ref_child.current ? ref_child.current.scrollHeight : 0;
    }

    //
    function onChangeStyleAction() {
        if (changeStyleAction) {
            changeStyleAction(ref_pos.current);
        } else {
            return {};
        }
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
                    className={`${
                        is_at_body ? 'pos-fixed' : 'pos-abs'
                    } z-index-lv5 scroll-thin overflow-y-auto brs-8px bg-primary box-shadow-fb ${class_action_contain} ${
                        ref_starting.current ? 'opacity-0' : ''
                    }`}
                    style={{
                        [left_or_right]: position_x,
                        [top_or_bottom]: position_y,
                        transform: `translate(${transform_x}, ${transform_y})`,
                        maxHeight: `${max_height}px`,
                        ...onChangeStyleAction(),
                    }}
                >
                    {children}
                </div>
            </CloseDiv>
        )
    );
}

export default ActionsContainPc;
