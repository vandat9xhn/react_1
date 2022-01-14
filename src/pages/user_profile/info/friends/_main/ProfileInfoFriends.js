import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutOverlapFriends from '../../../../../component/profile_layout/overlap_friends/_main/ProfileLayoutOverlapFriends';
// 
import ProfileInfoFriendsTitle from '../title/ProfileInfoFriendsTitle';
//
import './ProfileInfoFriends.scss';

//
ProfileInfoFriends.propTypes = {};

//
function ProfileInfoFriends({
    is_user,
    friend_count,
    mutual_friend_count,

    friend_arr,
    has_more_friend,
}) {
    //
    return (
        <div className="ProfileInfoFriends">
            <div>
                <ProfileInfoFriendsTitle
                    friend_count={friend_count}
                    mutual_friend_count={mutual_friend_count}
                    is_user={is_user}
                />
            </div>

            <div className="padding-top-8px">
                <ProfileLayoutOverlapFriends
                    link_to={`?sk=friend${
                        mutual_friend_count && !is_user ? '&type=mutual' : ''
                    }`}
                    friend_arr={friend_arr}
                    has_more_friend={has_more_friend}
                />
            </div>
        </div>
    );
}

export default ProfileInfoFriends;
