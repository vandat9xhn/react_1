import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import IconThreeDot from '../../../../../_icons_svg/icon_three_dot/IconThreeDot';
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
            <div className="text-secondary font-500">
                {friend_count ? (
                    <Link
                        to={`?sk=friend`}
                        className="color-inherit hv-underline"
                    >
                        {friend_count} Friend{friend_count >= 2 ? 's' : ''}
                    </Link>
                ) : null}

                {friend_count && mutual_friend_count && !is_user ? ' • ' : ''}

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

            <div className="padding-top-8px">
                <Link
                    to={`?sk=friend${
                        mutual_friend_count ? '&type=mutual' : ''
                    }`}
                    className="flex-end row-reverse"
                >
                    {has_more_friend && (
                        <div className="ProfileInfoFriends_item pos-rel">
                            <img
                                className="ProfileInfoFriends_item_img brs-50 object-fit-cover"
                                src={friend_arr[0].picture}
                                alt=""
                            />

                            <div className="pos-abs-0 display-flex-center wh-100 brs-50 bg-shadow-2">
                                <IconThreeDot
                                    size_icon="15px"
                                    color="var(--md-bg-blur)"
                                />
                            </div>
                        </div>
                    )}

                    {friend_arr
                        .slice(has_more_friend ? 1 : 0)
                        .map((item, ix) => (
                            <div key={ix} className="ProfileInfoFriends_item">
                                <img
                                    className="ProfileInfoFriends_item_img brs-50 object-fit-cover"
                                    src={item.picture}
                                    alt=""
                                />
                            </div>
                        ))}
                </Link>
            </div>
        </div>
    );
}

export default ProfileInfoFriends;
