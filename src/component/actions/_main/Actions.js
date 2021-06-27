import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useAppearancePosition } from '../../../_hooks/useAppearancePosition';
//
import CloseDiv from '../../some_div/close_div/CloseDiv';
import ActionBack from '../common_actions/back/ActionBack';
//
import './ActionsCommon.scss';
import './Actions.scss';
//

//
Actions.propTypes = {
    title_action: PropTypes.string,
    symbol_post: PropTypes.bool,
    children: PropTypes.element,
};

Actions.defaultProps = {
    symbol_post: true,
    title_action: '...',
};

//
function Actions({ title_action, symbol_post, children }) {
    //
    const ref_child_elm = useRef(null);
    const ref_parent_elm = useRef(null);

    //
    const {
        is_open,
        // transform_x,
        position_y,
        max_height,

        handleOpen,
        handleClose,

        // position_state,
        // setPositionState,
    } = useAppearancePosition({
        ref_child_elm: ref_child_elm,
        ref_parent_elm: ref_parent_elm,
        other_state: {},
    });

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
                ref={ref_parent_elm}
                className="Actions_contain position-rel"
                onClick={toggleActions}
            >
                <div
                    className={`Actions_symbol display-flex-center brs-50 hv-opacity ${
                        symbol_post ? 'Actions_symbol-post' : ''
                    }`}
                    title="More actions"
                >
                    {title_action}
                </div>

                <div
                    className={`Actions_choices ${
                        is_open ? 'visibility-visible' : 'visibility-hidden'
                    } ${position_y == 'top' ? 'bottom-100per' : 'top-100per'}`}
                    // style={{
                    //     transform: `translateX(-50%) translateX(${transform_x}px)`,
                    // }}
                >
                    <div ref={ref_child_elm}></div>

                    {is_open && (
                        <div
                            className="Actions_choices_actions scroll-thin bg-primary box-shadow-action brs-5px-md text-primary cursor-pointer"
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

export default Actions;
