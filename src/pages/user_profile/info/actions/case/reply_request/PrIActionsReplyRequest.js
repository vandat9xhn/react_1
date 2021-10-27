import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_ProfileActions_L } from '../../../../../../_handle_api/profile/action';
//
import BtnProfileReplyRequest from '../../../../../../component/button/profile_actions/reply_request/BtnProfileReplyRequest';

// 
PrIActionsReplyRequest.propTypes = {};

// 
function PrIActionsReplyRequest({user_id, handleAction }) {
    //
    async function getData_ActionReplyRequest() {
        const data = await handle_API_ProfileActions_L({
            user_id: user_id,
            type: 'reply_request',
        });

        return data;
    }
    //
    return (
        <BtnProfileReplyRequest
            handle_API_L={getData_ActionReplyRequest}
            handleAction={handleAction}
        />
    );
}

export default PrIActionsReplyRequest;
