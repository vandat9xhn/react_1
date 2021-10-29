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

//
FriendsHomeRequest.propTypes = {};

//
function FriendsHomeRequest(props) {
    //
    const [request_arr, setRequestArr] = useState([
        { ...initial_profile(), accepted: false },
    ]);

    //
    useEffect(() => {
        getData_FriendRequests();
    }, []);

    // ------- API

    //
    async function getData_FriendRequests() {
        const { data } = await handle_API_ProfileInfo_L({ type: 'request' });

        setRequestArr(
            data.map((item) => {
                return {
                    ...item,
                    accepted: false,
                };
            })
        );
    }

    // -----

    //
    function confirmFriendRequest(request_ix = -1) {
        setRequestArr((request_arr) => {
            const new_request_arr = [...request_arr];
            new_request_arr[request_ix].accepted = true;

            return new_request_arr;
        });
    }

    //
    function deleteFriendRequest(request_ix = -1) {
        setRequestArr((request_arr) => {
            const new_request_arr = [...request_arr];
            new_request_arr.splice(request_ix, 1);

            return new_request_arr;
        });
    }

    //
    return request_arr.length ? (
        <div className="FriendsHomeRequest">
            <FriendHomeFriendList
                title="Friend requests"
                link_to_all="/friends/requests"
                profile_arr={request_arr}
            >
                <div className="display-flex flex-wrap">
                    {request_arr.map((profile, ix) => (
                        <div
                            key={profile.id}
                            className="friend-home-right-item"
                        >
                            <AddFriendRequest
                                profile={profile}
                                accepted={profile.accepted}
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
