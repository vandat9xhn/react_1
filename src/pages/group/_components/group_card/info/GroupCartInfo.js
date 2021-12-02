import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../_some_function/UnitNumber';
// 
import './GroupCartInfo.scss';

//
GroupCartInfo.propTypes = {};

//
function GroupCartInfo({ name, member_count, post_count, post_unit }) {
    //
    return (
        <div className="GroupCartInfo padding-x-16px padding-top-16px">
            <div className="text-nowrap font-600 font-17px">
                {name}
            </div>

            <div className="text-secondary">
                {UnitNumber(member_count)} members · {UnitNumber(post_count)}{' '}
                post
                {post_count >= 2 ? 's' : ''} a {post_unit}
            </div>
        </div>
    );
}

export default GroupCartInfo;
