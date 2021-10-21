import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import { usePositionXY } from '../../../_hooks/usePositionXY';
//
import IconThreeDot from '../../../_icons_svg/icon_three_dot/IconThreeDot';
//
import CloseDiv from '../../some_div/close_div/CloseDiv';
import ActionBack from '../common_actions/back/ActionBack';
//
import './ActionsCommon.scss';
import './Actions.scss';
//

//
ActionsNormal.propTypes = {
    title_action: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    symbol_post: PropTypes.bool,
    use_back: PropTypes.bool,
    children: PropTypes.element,

    callbackOpen: PropTypes.func,
};

ActionsNormal.defaultProps = {
    symbol_post: true,
    title_action: (
        <IconThreeDot size_icon="1.25rem" color="var(--md-color-third)" />
    ),
    use_back: true,
    callbackOpen: () => {},
};

//
function ActionsNormal({
    title_action,
    symbol_post,
    use_back,
    children,

    callbackOpen,
}) {
    //
    const ref_child_elm = useRef(null);
    const ref_btn_elm = useRef(null);

    //
    const {
        position_state,
        // setPositionState,
        handleOpen,
        handleClose,
    } = usePositionXY({
        ref_child_elm: ref_child_elm,
        ref_btn_elm: ref_btn_elm,
        other_state: {},
    });

    const {
        is_open,
        // position_x,
        // transform_x,
        position_y,
        max_height,
    } = position_state;

    //
    useEffect(() => {
        callbackOpen(is_open);
    }, [is_open]);

    // ------

    //
    function toggleActions(e) {
        if (!is_open) {
            handleOpen({});
        } else {
            handleClose();
        }
    }

    //
    function closeActions() {
        handleClose();
    }

    //
    return (
        <div
            className={`Actions pos-rel ${
                is_open ? 'Actions-show' : 'Actions-hidden'
            }`}
        >
            <div
                ref={ref_btn_elm}
                className={`Actions_symbol ${
                    symbol_post ? 'Actions_symbol-post' : ''
                }`}
                onClick={toggleActions}
            >
                <div className="Actions_symbol_contain display-flex-center brs-50 hv-opacity hv-bg-s-through">
                    {title_action}
                </div>
            </div>

            <div
                className={`Actions_choices ${
                    is_open ? 'visibility-visible' : 'visibility-hidden'
                } ${
                    position_y == 'top'
                        ? 'Actions_choices-top'
                        : 'Actions_choices-bottom'
                }`}
                // style={{
                //     transform: `translateX(${transform_x}px)`,
                // }}
            >
                <div ref={ref_child_elm}></div>

                {is_open && (
                    <CloseDiv
                        makeDivHidden={closeActions}
                        refs_target={[ref_btn_elm]}
                    >
                        <div
                            className="Actions_choices_actions scroll-thin padding-y-8px bg-primary box-shadow-fb brs-8px text-primary"
                            style={{
                                maxHeight: IS_MOBILE
                                    ? undefined
                                    : `${max_height}px`,
                            }}
                        >
                            {use_back ? (
                                <div className="ActionsChoices_back display-none">
                                    <ActionBack />
                                </div>
                            ) : null}

                            {children}
                        </div>
                    </CloseDiv>
                )}
            </div>
        </div>
    );
}

export default ActionsNormal;
