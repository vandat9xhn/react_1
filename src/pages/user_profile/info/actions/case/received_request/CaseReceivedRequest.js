import React from 'react';
import PropTypes from 'prop-types';

// 
CaseReceivedRequest.propTypes = {
    
};

// 
function CaseReceivedRequest(props) {
    const {handleAcceptRequest, handleCancelRequest} = props;
    // 
    return (
        <div>
            <div>
                Reply request
            </div>

            <div>
                <div onClick={handleAcceptRequest}>Accept</div>
                
                <div onClick={handleCancelRequest}>Deny</div>
            </div>
        </div>
    );
}

export default CaseReceivedRequest;