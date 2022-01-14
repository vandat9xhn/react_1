import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import OverlapPics from '../../../overlap_pics/_main/OverlapPics';
import ProfileLayoutOverlapFriendsItem from '../item/ProfileLayoutOverlapFriendsItem';
//
import './ProfileLayoutOverlapFriends.scss';

//
ProfileLayoutOverlapFriends.propTypes = {};

//
function ProfileLayoutOverlapFriends({ link_to, friend_arr, has_more_friend }) {
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
        <Link
            ref={ref_link}
            className="display-block"
            to={link_to}
            onClick={handleClickLink}
        >
            <OverlapPics
                pic_arr={friend_arr}
                has_more={has_more_friend}
                ItemComponent={ProfileLayoutOverlapFriendsItem}
            />
        </Link>
    );
}

export default ProfileLayoutOverlapFriends;
