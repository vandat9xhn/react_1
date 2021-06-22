import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import CloseDiv from '../../../../../../component/some_div/close_div/CloseDiv';
//
import './CaseReceivedRequest.scss';

//
CaseReceivedRequest.propTypes = {};

//
function CaseReceivedRequest({ handleAcceptRequest, handleCancelRequest }) {
    //
    const [is_open, setIsOpen] = useState(false);

    //
    function handleToggleReply() {
        setIsOpen(!is_open);
    }

    //
    function makeDivHidden() {
        is_open && setIsOpen(false);
    }

    // 
    function onAcceptRequest() {
        setIsOpen(false)
        
        handleAcceptRequest()
    }

    // 
    function onCancelRequest() {
        setIsOpen(false)

        handleCancelRequest()
    }

    //
    return (
        <CloseDiv makeDivHidden={makeDivHidden}>
            <div className="position-rel">
                <div onClick={handleToggleReply}>Reply request</div>

                <div
                    className={`CaseReceivedRequest_response bg-primary box-shadow-1 ${
                        is_open ? '' : 'display-none'
                    }`}
                >
                    <div className="flex-between-center">
                        <div
                            className="CaseReceivedRequest_response-item"
                            onClick={onAcceptRequest}
                        >
                            Accept
                        </div>

                        <div
                            className="CaseReceivedRequest_response-item"
                            onClick={onCancelRequest}
                        >
                            Deny
                        </div>
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default CaseReceivedRequest;
