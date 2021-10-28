import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconFriends from '../../../_icons_svg/icon_friends/IconFriends';

//
ActionsPreviewFriend.propTypes = {};

//
function ActionsPreviewFriend({ mutual_friend_count, friend_arr }) {
    //
    return (
        <div className="ActionsPreviewFriend display-flex">
            <IconFriends
                // class_icon="flex-shrink-0 margin-y-2px margin-right-10px"
                // size_icon="20px"
                fill="var(--md-color-secondary)"
            />

            <div>
                <span>
                    {mutual_friend_count} mutual friend
                    {mutual_friend_count >= 2 ? 's' : ''}
                    {mutual_friend_count <= 2 ? `: ` : ', including '}
                </span>

                {friend_arr.slice(0, 2).map((item, ix) => (
                    <span key={ix}>
                        <Link
                            className="color-inherit font-500 hv-underline"
                            to={`/profile/${item.id}`}
                        >
                            {item.first_name} {item.last_name}
                        </Link>

                        {friend_arr.length >= 2 && ix == 0 ? ' and ' : ''}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ActionsPreviewFriend;
