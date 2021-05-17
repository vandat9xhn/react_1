import React from 'react';
// 
import { user_related_obj } from '../../../../__some_obj/InfoObj';
//
import CaseFollow from '../follow/CaseFollow';
import CaseFriend from '../friend/CaseFriend';
import CaseNormal from '../normal/CaseNormal';
import CaseReceivedRequest from '../received_request/CaseReceivedRequest';
import CaseSendRequest from '../send_request/CaseSendRequest';
import CaseUser from '../user/CaseUser';

//
export function handleInfoActions(
    user_related,
    permission_add_friend,
    handleAddStory,
    handleAcceptRequest,
    handleCancelRequest,
    handleAddFriend,
    handleFollowFriend,
) {
    switch (user_related) {
        case user_related_obj.c_user:
            return <CaseUser handleAddStory={handleAddStory} />;

        case user_related_obj.friend:
            return <CaseFriend />;

        case user_related_obj.received_request:
            return (
                <CaseReceivedRequest
                    handleAcceptRequest={handleAcceptRequest}
                    handleCancelRequest={handleCancelRequest}
                />
            );

        case user_related_obj.send_request:
            return (
                <CaseSendRequest handleCancelRequest={handleCancelRequest} />
            );

        case user_related_obj.has_mutual_friend:
            if (permission_add_friend <= 1) {
                return <CaseNormal handleAddFriend={handleAddFriend} />;
            } else {
                return <CaseFollow handleFollowFriend={handleFollowFriend} />;
            }

        case user_related_obj.no_mutual_friend:
            if (permission_add_friend == 0) {
                return <CaseNormal handleAddFriend={handleAddFriend} />;
            } else {
                return <CaseFollow handleFollowFriend={handleFollowFriend} />;
            }

        default:
            return <div></div>;
    }
}
