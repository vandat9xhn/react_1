import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// 
import './FriendsBirthMonth.scss';

//
FriendsBirthMonth.propTypes = {};

//
function FriendsBirthMonth({ month_name, friend_arr, friend_count }) {
    //
    return (
        <div className="FriendsBirthMonth padding-16px brs-8px bg-primary box-shadow-1">
            <div className="">
                <div className="FriendsBirthMonth_title margin-y-5px line-16px font-17px font-600">
                    {month_name}
                </div>

                <div className="margin-y-5px line-20px">
                    {friend_arr
                        .slice(0, friend_count == 3 ? 3 : 2)
                        .map((item, ix) => (
                            <span key={item.id}>
                                {ix >= 1 ? ', ' : ''}

                                <Link
                                    className="color-inherit font-500 hv-underline"
                                    to={`/profile/${item.id}`}
                                >
                                    {item.first_name} {item.last_name}
                                </Link>
                            </span>
                        ))}

                    <span>
                        {friend_count >= 4
                            ? ` and ${friend_count - 2} others`
                            : ''}
                    </span>
                </div>
            </div>

            <div className="FriendsBirthMonth_foot display-flex flex-wrap margin-top-15px">
                {friend_arr.map((item, ix) => (
                    <Link
                        key={item.id}
                        className="margin-5px"
                        to={`/profile/${item.id}`}
                    >
                        <img
                            className="FriendsBirthMonth_pic brs-50 object-fit-cover"
                            src={item.picture}
                            alt=""
                            width="60"
                            height="60"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FriendsBirthMonth;
