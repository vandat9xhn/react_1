import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import OverlapPics from '../../../../../component/overlap_pics/_main/OverlapPics';
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
                <Link
                    to={`?sk=friend${
                        mutual_friend_count && !is_user ? '&type=mutual' : ''
                    }`}
                >
                    <OverlapPics
                        pic_arr={friend_arr}
                        has_more={has_more_friend}
                    />
                </Link>
            </div>
        </div>
    );
}

export default ProfileInfoFriends;
