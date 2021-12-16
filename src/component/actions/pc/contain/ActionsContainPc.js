import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { usePosFollowBodyOrElm } from '../../../../_hooks/usePosFollowBodyOrElm';
//
import CloseDiv from '../../../some_div/close_div/CloseDiv';
//
import './ActionsContainPc.scss';
import { useForceUpdate } from '../../../../_hooks/UseForceUpdate';

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
    const ref_caret_pos = useRef({});

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
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        handleOpen({ callbackOpen: callbackOpen });
    }, []);

    //
    useEffect(() => {
        ref_caret_pos.current = getCaretPos();
        forceUpdate();
    }, [ref_pos.current]);

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
        if (!ref_child.current) {
            return {};
        }

        const { top, bottom, left, right } =
            ref_btn_elm.current.getBoundingClientRect();
        const {
            top: top_child,
            bottom: bottom_child,
            left: left_child,
            right: right_child,
        } = ref_child.current.getBoundingClientRect();

        const x_center = (left + right) / 2;
        const y_center = (top + bottom) / 2;

        if (caret_pos == 'top') {
            return {
                bottom: '100%',
                right: right_child - x_center,
            };
        }

        if (caret_pos == 'bottom') {
            return {
                top: `100%`,
                right: right_child - x_center,
                transform: `rotate(180deg)`,
            };
        }

        if (caret_pos == 'left') {
            return {
                right: '100%',
                top: y_center - top_child,
                transform: `rotate(-90deg)`,
            };
        }

        if (caret_pos == 'right') {
            return {
                left: '100%',
                top: y_center - top_child,
                transform: `rotate(90deg)`,
            };
        }
    }

    // -----

    //
    function makeDivHidden() {
        handleClose({ callbackClose: callbackClose });
    }

    //
    return (
        ref_is_open.current && (
            <CloseDiv makeDivHidden={makeDivHidden} refs_target={[ref_btn_elm]}>
                <div
                    className={`${
                        is_at_body ? 'pos-fixed' : 'pos-abs'
                    } z-index-lv5 ${ref_starting.current ? 'opacity-0' : ''}`}
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
                                use_caret ? `${CARET_HEIGHT - 1}px` : undefined,
                        }}
                    >
                        <div className="pos-rel">
                            <div
                                ref={ref_child}
                                className={`scroll-thin overflow-y-auto brs-8px bg-primary box-shadow-fb ${class_action_contain}`}
                                style={{
                                    maxHeight: `${
                                        max_height -
                                        (use_caret &&
                                        ['top', 'bottom'].includes(caret_pos)
                                            ? CARET_HEIGHT - 1
                                            : 0)
                                    }px`,
                                }}
                            >
                                {children}
                            </div>

                            {use_caret ? (
                                <div
                                    className="ActionsContainPc_caret pos-abs z-index-1 pointer-events-none"
                                    style={{
                                        ...ref_caret_pos.current,
                                    }}
                                ></div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </CloseDiv>
        )
    );
}

export default ActionsContainPc;
