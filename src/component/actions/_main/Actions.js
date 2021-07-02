import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { definePositionFromParent } from '../../../_some_function/definePositionFromParent';
//
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
    const { openDivFixAction, closeDivFixAction } = useContext(context_api);

    //
    const ref_action_elm = useRef(null);

    /* ---------------------------------- */

    //
    function toggleActions(e) {
        e.preventDefault();
        openActions();
    }

    //
    function openActions() {
        const { x_0, y_0, w_left, w_right, h_top, h_bottom } =
            definePositionFromParent({
                btn_elm: ref_action_elm.current,
            });

        const position_open =
            window.innerWidth > 400
                ? {
                      left: x_0,
                      top: y_0,
                      transform_x: `calc(-100% + 10px)`,
                      transform_y: position_y == 'top' ? '-100%' : `25px`,
                  }
                : {
                      bottom: 0,
                      left: 0,
                      transform_x: 0,
                      transform_y: 0,
                  };

        openDivFixAction({
            ...position_open,
            ref_action_elm: ref_action_elm,
            FixComponent: (
                <div onClick={closeDivFixAction}>
                    <div className="ActionsChoices_back display-none">
                        <ActionBack />
                    </div>

                    {children}
                </div>
            ),
        });
    }

    //
    return (
        <div className="Actions_contain position-rel">
            <div
                ref={ref_action_elm}
                className={`Actions_symbol display-flex-center brs-50 hv-opacity ${
                    symbol_post ? 'Actions_symbol-post' : ''
                }`}
                title="More actions"
                onClick={toggleActions}
            >
                {title_action}
            </div>
        </div>
    );
}

export default Actions;
