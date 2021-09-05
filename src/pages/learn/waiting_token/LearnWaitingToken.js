import React from 'react';
import PropTypes from 'prop-types';
// 
import { testRefreshToken } from './waiting_token';

// 
LearnWaitingToken.propTypes = {};

// 
function LearnWaitingToken(props) {
    //
    function waitingRefreshToken() {
        handleRefreshToken()
        handleRefreshToken()
        handleRefreshToken()
        
    }

    // 
    async function handleRefreshToken() {
        const res = await testRefreshToken();
        console.log(res);
    }

    //
    return (
        <div>
            <div
                className="padding-8px font-500 cursor-pointer"
                onClick={waitingRefreshToken}
            >
                Waiting refresh token
            </div>
        </div>
    );
}

export default LearnWaitingToken;
