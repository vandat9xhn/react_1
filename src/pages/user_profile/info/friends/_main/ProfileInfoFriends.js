import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import OverlapPics from '../../../../../component/overlap_pics/_main/OverlapPics';
import ProfileInfoFriendsTitle from '../title/ProfileInfoFriendsTitle';
//
import './ProfileInfoFriends.scss';
import ProfileInfoFriendsItem from '../item/ProfileInfoFriendsItem';

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
    const ref_link = useRef(null);

    // ----

    //
    function handleClickLink(e) {
        if (!ref_link.current.contains(e.target)) {
            e.preventDefault();
        }
    }

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
                    ref={ref_link}
                    className="display-block"
                    to={`?sk=friend${
                        mutual_friend_count && !is_user ? '&type=mutual' : ''
                    }`}
                    onClick={handleClickLink}
                >
                    <OverlapPics
                        pic_arr={friend_arr}
                        has_more={has_more_friend}
                        ItemComponent={ProfileInfoFriendsItem}
                    />
                </Link>
            </div>
        </div>
    );
}

export default ProfileInfoFriends;
