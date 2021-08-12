import React, { useRef } from 'react';
import PropTypes from 'prop-types';
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
    children: PropTypes.element,
};

ActionsNormal.defaultProps = {
    symbol_post: true,
    title_action: <IconThreeDot size_icon="1.25rem" />,
};

//
function ActionsNormal({ title_action, symbol_post, children }) {
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

    /* ---------------------------------- */

    //
    function toggleActions() {
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
        <CloseDiv makeDivHidden={closeActions}>
            <div
                className="Actions_contain pos-rel"
                onClick={toggleActions}
            >
                <div
                    ref={ref_btn_elm}
                    className={`Actions_symbol ${
                        symbol_post ? 'Actions_symbol-post' : ''
                    }`}
                >
                    <div className="Actions_symbol-contain display-flex-center brs-50 hv-opacity hv-bg-s-through">
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
                        <div
                            className="Actions_choices_actions scroll-thin bg-primary box-shadow-fb brs-5px-md text-primary"
                            style={{
                                maxHeight:
                                    window.innerWidth <= 400
                                        ? undefined
                                        : `${max_height}px`,
                            }}
                        >
                            <div className="ActionsChoices_back display-none">
                                <ActionBack />
                            </div>

                            {children}
                        </div>
                    )}
                </div>
            </div>
        </CloseDiv>
    );
}

export default ActionsNormal;
