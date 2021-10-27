import React from 'react';
import PropTypes from 'prop-types';
//
import BtnProfileAddFriend from '../../../../../../component/button/profile_actions/add_friend/BtnProfileAddFriend';
import BtnProfileAddStory from '../../../../../../component/button/profile_actions/add_story/BtnProfileAddStory';
import BtnProfileCancelRequest from '../../../../../../component/button/profile_actions/cancel_request/BtnProfileCancelRequest';
import BtnProfileEdit from '../../../../../../component/button/profile_actions/edit/BtnProfileEdit';
import BtnProfileFollow from '../../../../../../component/button/profile_actions/follow/BtnProfileFollow';
import BtnProfileChat from '../../../../../../component/button/profile_actions/message/BtnProfileChat';
//
import PrIActionsFriend from '../friend/PrIActionsFriend';
import PrIActionsReplyRequest from '../reply_request/PrIActionsReplyRequest';

//
PrIActionsCase.propTypes = {};

//
function PrIActionsCase({ action_case, user_id, handleAction }) {
    //
    if (action_case == 'chat') {
        return <BtnProfileChat user_id={user_id} />;
    }

    //
    if (action_case == 'friend') {
        return (
            <PrIActionsFriend user_id={user_id} handleAction={handleAction} />
        );
    }

    //
    if (action_case == 'edit_profile') {
        return <BtnProfileEdit />;
    }

    //
    if (action_case == 'add_friend') {
        return <BtnProfileAddFriend handleAction={handleAction} />;
    }

    //
    if (action_case == 'add_story') {
        return <BtnProfileAddStory />;
    }

    //
    if (action_case == 'follow') {
        return <BtnProfileFollow handleAction={handleAction} />;
    }

    //
    if (action_case == 'reply_request') {
        return (
            <PrIActionsReplyRequest
                user_id={user_id}
                handleAction={handleAction}
            />
        );
    }

    //
    if (action_case == 'cancel_request') {
        return <BtnProfileCancelRequest handleAction={handleAction} />;
    }

    //
    return null;
}

export default PrIActionsCase;
