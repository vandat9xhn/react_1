import React from 'react';
import PropTypes from 'prop-types';
//
import IconFriends from '../../../../../_icons_svg/icon_friends/IconFriends';
// 
import OverlapPics from '../../../../../component/overlap_pics/_main/OverlapPics';

//
GroupCardFriends.propTypes = {};

//
function GroupCardFriends({ friend_arr, friend_count, has_more_friend }) {
    //
    return (
        <div className="GroupCardFriends text-secondary">
            <div className="display-flex align-items-center">
                {friend_arr.length ? (
                    <OverlapPics
                        pic_arr={friend_arr}
                        has_more={has_more_friend}
                    />
                ) : (
                    <IconFriends size_icon="24px" fill="currentColor" />
                )}

                <div className="margin-left-5px">
                    {friend_arr.length
                        ? `${friend_arr[0].last_name}${
                              friend_count >= 2
                                  ? ` and ${friend_count - 1} friend${
                                        friend_count > 3 ? 's' : ''
                                    }`
                                  : ''
                          }`
                        : `${friend_count}`}
                    {' are member'}
                    {friend_count >= 2 ? 's' : ''}
                </div>
            </div>
        </div>
    );
}

export default GroupCardFriends;
