import React from 'react';
import PropTypes from 'prop-types';
//
import PLDConditionsItem from '../item/PLDConditionsItem';

//
PLDetailConditions.propTypes = {};

//
function PLDetailConditions({ condition_arr }) {
    //
    return (
        <div className="PLDetailConditions padding-10px brs-4px bg-fashion-heart">
            <div>Điều kiện áp dụng:</div>

            <ul className="padding-left-20px margin-0 text-third">
                {condition_arr.map((item, ix) => (
                    <li key={item.id}>
                        <PLDConditionsItem condition={item.condition_str} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PLDetailConditions;
