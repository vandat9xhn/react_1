import React from 'react';
import PropTypes from 'prop-types';
//
import { useFriendsSuggest } from '../../../../../_hooks/friends/useFriendsSuggest';
//
import AddFriendSuggest from '../../../../../component/add_friend_add/suggest/AddFriendSuggest';
//
import FriendHomeFriendList from '../list/_main/FriendHomeFriendList';

//
FriendsHomeSuggest.propTypes = {};

//
function FriendsHomeSuggest(props) {
    //
    const { ref_fake_elm, data_state, addFriendRequest, removeFriendRequest } =
        useFriendsSuggest({});

    const { data_arr } = data_state;

    //
    return (
        <div
            className={`FriendsHomeSuggest ${
                data_arr.length == 0 ? 'display-none' : ''
            }`}
        >
            <FriendHomeFriendList
                title="People you may know"
                link_to_all="/friends/suggestions"
            >
                <div>
                    <div className="display-flex flex-wrap">
                        {data_arr.map((profile, ix) => (
                            <div
                                key={profile.id}
                                className="friend-home-right-item"
                            >
                                <AddFriendSuggest
                                    profile={profile}
                                    sent={profile.sent}
                                    addFriend={() => addFriendRequest(ix)}
                                    removeFriend={() => removeFriendRequest(ix)}
                                />
                            </div>
                        ))}
                    </div>

                    <div ref={ref_fake_elm} className="padding-1px"></div>
                </div>
            </FriendHomeFriendList>
        </div>
    );
}

export default FriendsHomeSuggest;
