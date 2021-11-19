import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
ProfileInfoFriendsTitle.propTypes = {};

//
function ProfileInfoFriendsTitle({
    friend_count,
    mutual_friend_count,
    is_user,
}) {
    //
    return (
        <div className="text-secondary font-500">
            {friend_count ? (
                <Link to={`?sk=friend`} className="color-inherit hv-underline">
                    {friend_count} Friend{friend_count >= 2 ? 's' : ''}
                </Link>
            ) : null}

            {friend_count && mutual_friend_count && !is_user ? ' · ' : ''}

            {!is_user && mutual_friend_count ? (
                <Link
                    to={`?sk=friend&type=mutual`}
                    className="color-inherit hv-underline"
                >
                    {mutual_friend_count} mutual friend
                    {mutual_friend_count >= 2 ? 's' : ''}
                </Link>
            ) : null}
        </div>
    );
}

export default ProfileInfoFriendsTitle;
