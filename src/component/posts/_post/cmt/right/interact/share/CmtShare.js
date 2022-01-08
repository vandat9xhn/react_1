import React from 'react';
import PropTypes from 'prop-types';
//
import { useBool } from '../../../../../../../_hooks/useBool';
//
import Actions from '../../../../../../actions/_main/Actions';
//
import './CmtShare.scss';

//
CmtShare.propTypes = {};

//
function CmtShare({}) {
    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // -----

    //
    function handleClose() {
        setIsTrue(false);
    }

    //
    return (
        <Actions
            title_action={
                <div className="CmtInteract_share CmtInteract_item">Share</div>
            }
            is_show={is_true}
            toggleShow={toggleBool}
            handleClose={handleClose}
        >
            <div className="CmtShare cmt-interact-portal">
                <div className="CmtShare_contain">
                    <div className="CmtShare_item">Send in Messenger</div>

                    <div className="CmtShare_item">Send in WhatsApp</div>

                    <div className="CmtShare_item">Send in Twitter</div>

                    <div className="CmtShare_item">Copy link</div>
                </div>
            </div>
        </Actions>
    );
}

export default CmtShare;
