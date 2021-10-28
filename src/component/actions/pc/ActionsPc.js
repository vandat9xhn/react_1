import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import PortalAtBody from '../../portal/at_body/PortalAtBody';
//
import ActionsBtnToggle from '../_components/btn_toggle/ActionsBtnToggle';
import ActionsContain from '../_components/contain/ActionsContain';
//
import './ActionsPc.scss';
//

//
ActionsPc.propTypes = {
    title_action: ActionsBtnToggle.propTypes.title_action,
    children: PropTypes.element,
    callbackOpen: PropTypes.func,
};

ActionsPc.defaultProps = {};

//
function ActionsPc({
    use_own_title = false,
    title_action,
    is_show,
    class_action_contain,
    children,

    scroll_elm,
    changeStyleAction,
    is_at_body = true,
    header_head,

    toggleShow,
    callbackOpen,
    callbackClose,
}) {
    //
    const ref_btn_elm = useRef(null);

    //
    function onCallbackClose() {
        is_show && toggleShow && toggleShow();
        callbackClose && callbackClose();
    }

    // ------

    const Contain = (
        <ActionsContain
            ref_btn_elm={ref_btn_elm}
            class_action_contain={class_action_contain}
            children={children}
            // 
            scroll_elm={scroll_elm}
            changeStyleAction={changeStyleAction}
            is_at_body={is_at_body}
            header_head={header_head}
            //
            callbackOpen={callbackOpen}
            callbackClose={onCallbackClose}
        />
    );

    //
    return (
        <div
            ref={ref_btn_elm}
            className={`ActionsPc display-inherit ${is_at_body ? '' : 'pos-rel'} ${
                is_show ? 'ActionsPc-show' : 'ActionsPc-hidden'
            }`}
        >
            {use_own_title ? (
                title_action
            ) : (
                <ActionsBtnToggle
                    title_action={title_action}
                    toggleShow={toggleShow}
                />
            )}

            {is_show &&
                (is_at_body ? <PortalAtBody>{Contain}</PortalAtBody> : Contain)}
        </div>
    );
}

export default ActionsPc;
