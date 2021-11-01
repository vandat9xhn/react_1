import React from 'react';
import PropTypes from 'prop-types';
//
import { useFriendsRequest } from '../../../../../_hooks/friends/useFriendsRequest';
//
import AddFriendMiniRequest from '../../../../../component/add_friend_mini/request/_main/AddFriendMiniRequest';
//
import './FriendsRequestLeft.scss';

//
FriendsRequestLeft.propTypes = {};

//
function FriendsRequestLeft({ showProfile, openSentRequest }) {
    //
    const {
        ref_root,
        ref_fake_elm,
        data_state,

        confirmFriendRequest,
        deleteFriendRequest,
    } = useFriendsRequest({});

    const { data_arr, has_fetched } = data_state;

    //
    return (
        <div className="FriendsRequestLeft padding-left-8px">
            <div ref={ref_root} className="overflow-y-auto">
                <div className="padding-x-8px padding-y-5px font-17px font-600">
                    Friend requests
                </div>

                <div
                    className="padding-x-8px padding-bottom-5px text-blue font-13px font-400 cursor-pointer"
                    onClick={openSentRequest}
                >
                    View sent request
                </div>

                <div>
                    {data_arr.map((profile, ix) => (
                        <div key={profile.id}>
                            <AddFriendMiniRequest
                                profile={profile}
                                accepted={profile.accepted}
                                confirmFriend={() => confirmFriendRequest(ix)}
                                deleteFriend={() => deleteFriendRequest(ix)}
                                showProfile={() => showProfile(profile.id)}
                            />
                        </div>
                    ))}
                </div>

                <div ref={ref_fake_elm} className="padding-1px"></div>

                {has_fetched && data_arr.length == 0 ? (
                    <div className="padding-x-8px padding-y-5px font-13px text-third">
                        No fiend requests
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default FriendsRequestLeft;
