import React from 'react';
import PropTypes from 'prop-types';
//
import FriendsBirthMonth from '../month/_main/FriendsBirthMonth';
// 
import './FriendsBirthRight.scss';

//
import { getRandomNumber } from '../../../../../_default/_common/default_id';
import { getRandomBool } from '../../../../../_default/_common/default_bool';
import { getDefaultArr } from '../../../../../_default/_common/getDefaultArr';
import { getRandomUser } from '../../../../../_default/_common/default_user';

//
const month_name_arr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

//
const birth_arr = (() => {
    const result_arr = [];

    month_name_arr.forEach((item) => {
        const friend_count = getRandomBool() ? getRandomNumber(0, 8) : 0;

        friend_count > 0 &&
            result_arr.push({
                month_name: item,
                friend_count: friend_count,
                friend_arr:
                    friend_count == 0
                        ? []
                        : getDefaultArr(
                              () => getRandomUser().user,
                              friend_count,
                              friend_count
                          ),
            });
    });

    return result_arr;
})();

//
FriendsBirthRight.propTypes = {};

//
function FriendsBirthRight(props) {
    //
    return (
        <div className="FriendsBirthRight">
            {birth_arr.map((item, ix) => (
                <div
                    key={item.month_name}
                    className="FriendsBirthRight_item margin-bottom-15px margin-auto"
                >
                    <FriendsBirthMonth
                        month_name={item.month_name}
                        friend_arr={item.friend_arr}
                        friend_count={item.friend_count}
                    />
                </div>
            ))}
        </div>
    );
}

export default FriendsBirthRight;
