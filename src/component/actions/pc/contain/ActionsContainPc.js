import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import { usePosFollowBodyOrElm } from '../../../../_hooks/usePosFollowBodyOrElm';
//
import IconCaret from '../../../../_icons_svg/_icon_caret/IconCaret';
//
import CloseDiv from '../../../some_div/close_div/CloseDiv';
//
import './ActionsContainPc.scss';

//
const CARET_HEIGHT = 10;

//
ActionsContainPc.propTypes = {};

//
function ActionsContainPc({
    ref_btn_elm,
    class_action_contain = '',
    children,
    use_caret = true,

    scroll_elm,
    header_head,
    pos_orientation,
    is_at_body = true,

    getActionsScrollElms,

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

        caret_pos,
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
    function getCaretPos() {
        const { top, bottom, left, right } =
            ref_btn_elm.current.getBoundingClientRect();
        const x_center = (left + right) / 2;
        const y_center = (top + bottom) / 2;

        if (caret_pos == 'top') {
            return {
                top: bottom + CARET_HEIGHT,
                left: x_center,
            };
        }

        if (caret_pos == 'bottom') {
            return {
                top: top - CARET_HEIGHT,
                left: x_center,
                transform: `rotate(180deg)`,
            };
        }
    }

    //
    function makeDivHidden() {
        handleClose({ callbackClose: callbackClose });
    }

    //
    return (
        ref_is_open.current && (
            <React.Fragment>
                <CloseDiv
                    makeDivHidden={makeDivHidden}
                    refs_target={[ref_btn_elm]}
                >
                    <div
                        ref={ref_child}
                        className={`${
                            is_at_body ? 'pos-fixed' : 'pos-abs'
                        } z-index-lv5`}
                        style={{
                            [left_or_right]: position_x,
                            [top_or_bottom]: position_y,
                            transform: `translate(${transform_x}, ${transform_y})`,
                        }}
                    >
                        <div
                            style={{
                                [`padding${caret_pos
                                    .slice(0, 1)
                                    .toUpperCase()}${caret_pos.slice(1)}`]:
                                    use_caret
                                        ? `${CARET_HEIGHT - 1}px`
                                        : undefined,
                            }}
                        >
                            <div
                                className={`scroll-thin overflow-y-auto brs-8px bg-primary box-shadow-fb ${class_action_contain} ${
                                    ref_starting.current ? 'opacity-0' : ''
                                }`}
                                style={{
                                    maxHeight: `${max_height}px`,
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    </div>
                </CloseDiv>

                {use_caret && !IS_MOBILE && ref_child.current ? (
                    <div
                        className="ActionsContainPc_caret pos-fixed z-index-lv5 pointer-events-none"
                        style={{
                            ...getCaretPos(),
                        }}
                    ></div>
                ) : null}
            </React.Fragment>
        )
    );
}

export default ActionsContainPc;
