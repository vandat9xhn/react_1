import React from 'react';
import PropTypes from 'prop-types';
// 
import './RadioFbItem.scss';

//
RadioFbItem.propTypes = {};

//
function RadioFbItem({ is_active }) {
    //
    return (
        <div className="RadioFbItem pos-rel wh-100 brs-50">
            <div
                className={`RadioFbItem_in pos-abs-center brs-50 ${
                    is_active ? 'bg-current' : 'bg-transparent'
                }`}
            ></div>
        </div>
    );
}

export default RadioFbItem;
