import React from 'react';
import PropTypes from 'prop-types';
//
import PortalAtBody from '../../../portal/at_body/PortalAtBody';
//
import ActionsBtnToggle from '../../btn_toggle/ActionsBtnToggle';
import ActionsContainMb from '../contain/ActionsContainMb';
//
import './ActionsMb.scss';

//
ActionsMb.propTypes = {};

//
function ActionsMb({
    class_actions = '',
    title_action,
    use_title = true,
    is_show,
    children,

    toggleShow,
    handleClose,
    callbackOpen,
}) {
    //
    return (
        <div>
            {use_title ? (
                <ActionsBtnToggle
                    title_action={title_action}
                    toggleShow={toggleShow}
                />
            ) : null}

            {is_show ? (
                <PortalAtBody>
                    <ActionsContainMb
                        class_actions={class_actions}
                        children={children}
                        handleClose={handleClose}
                        callbackOpen={callbackOpen}
                    />
                </PortalAtBody>
            ) : null}
        </div>
    );
}

export default ActionsMb;
