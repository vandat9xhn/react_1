import React from 'react';
import PropTypes from 'prop-types';
//
import PLFilterCheckItem from '../item/PLFilterCheckItem';
// 
import './PLFilterCheck.scss';

//
PLFilterCheck.propTypes = {};

//
function PLFilterCheck({ filter_check_arr, checkFilter }) {
    //
    return (
        <div className="PLFilterCheck display-flex align-items-center">
            {filter_check_arr.map((item, ix) => (
                <div key={ix} className="PLFilterCheck_item">
                    <PLFilterCheckItem
                        title={item.title}
                        checked={item.checked}
                        ix={ix}
                        checkFilter={checkFilter}
                    />
                </div>
            ))}
        </div>
    );
}

export default PLFilterCheck;
