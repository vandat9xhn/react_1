import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { initial_profile } from '../../../../../_initial/profile/InitialProfile';
//
import { handle_API_ProfileInfo_L } from '../../../../../_handle_api/profile/info';
//
import AddFriendRequest from '../../../../../component/add_friend_add/request/AddFriendRequest';
//
import FriendHomeFriendList from '../list/_main/FriendHomeFriendList';
import { useFriendsRequest } from '../../../../../_hooks/friends/useFriendsRequest';

//
FriendsHomeRequest.propTypes = {};

//
function FriendsHomeRequest(props) {
    //
    const {
        data_state,

        confirmFriendRequest,
        deleteFriendRequest,
    } = useFriendsRequest({ rootMargin: '0px 0px 500px', margin: 500 });

    const { data_arr } = data_state;

    //
    return data_arr.length ? (
        <div className="FriendsHomeRequest">
            <FriendHomeFriendList
                title="Friend requests"
                link_to_all="/friends/requests"
            >
                <div className="display-flex flex-wrap">
                    {data_arr.map((profile, ix) => (
                        <div
                            key={profile.id}
                            className="friend-home-right-item"
                        >
                            <AddFriendRequest
                                profile={profile}
                                accepted={profile.accepted}
                                link_to={{
                                    pathname: `/friends/requests`,
                                    state: { profile_id: profile.id },
                                }}
                                confirmFriend={() => confirmFriendRequest(ix)}
                                deleteFriend={() => deleteFriendRequest(ix)}
                            />
                        </div>
                    ))}
                </div>
            </FriendHomeFriendList>
        </div>
    ) : null;
}

export default FriendsHomeRequest;
