import React from 'react';
import PropTypes from 'prop-types';
//
import BtnProfileAddFriend from '../../../button/profile_actions/add_friend/BtnProfileAddFriend';
import BtnProfileAddStory from '../../../button/profile_actions/add_story/BtnProfileAddStory';
import BtnProfileCancelRequest from '../../../button/profile_actions/cancel_request/BtnProfileCancelRequest';
import BtnProfileEdit from '../../../button/profile_actions/edit/BtnProfileEdit';
import BtnProfileFollow from '../../../button/profile_actions/follow/BtnProfileFollow';
import BtnProfileChat from '../../../button/profile_actions/message/BtnProfileChat';
//
import ActionsProfileFriend from '../friend/ActionsProfileFriend';
import ActionsProfileReplyRequest from '../reply_request/ActionsProfileReplyRequest';
import ActionsProfileOther from '../../other/ActionsProfileOther';

//
ActionsProfileCase.propTypes = {};

//
function ActionsProfileCase({
    action_case,
    user_id,
    use_title,

    is_at_body,
    class_action_contain,

    handleAction,
}) {
    //
    if (action_case == 'chat') {
        return <BtnProfileChat user_id={user_id} use_title={use_title} />;
    }

    //
    if (action_case == 'friend') {
        return (
            <ActionsProfileFriend
                user_id={user_id}
                use_title={use_title}
                is_at_body={is_at_body}
                handleAction={handleAction}
            />
        );
    }

    //
    if (action_case == 'edit_profile') {
        return <BtnProfileEdit user_id={user_id} use_title={use_title} />;
    }

    //
    if (action_case == 'add_friend') {
        return (
            <BtnProfileAddFriend
                handleAction={handleAction}
                use_title={use_title}
            />
        );
    }

    //
    if (action_case == 'add_story') {
        return <BtnProfileAddStory use_title={use_title} />;
    }

    //
    if (action_case == 'follow') {
        return (
            <BtnProfileFollow
                use_title={use_title}
                handleAction={handleAction}
            />
        );
    }

    //
    if (action_case == 'reply_request') {
        return (
            <ActionsProfileReplyRequest
                user_id={user_id}
                use_title={use_title}
                is_at_body={is_at_body}
                handleAction={handleAction}
            />
        );
    }

    //
    if (action_case == 'cancel_request') {
        return (
            <BtnProfileCancelRequest
                use_title={use_title}
                handleAction={handleAction}
            />
        );
    }

    //
    if (action_case == 'other') {
        return (
            <ActionsProfileOther
                user_id={user_id}
                class_action_contain={class_action_contain}
                is_at_body={is_at_body}
                handleAction={handleAction}
            />
        );
    }

    //
    return null;
}

export default ActionsProfileCase;
