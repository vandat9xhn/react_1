import React from 'react';
import PropTypes from 'prop-types';
// 
import './PLCompareBtnShow.scss';

//
PLCompareBtnShow.propTypes = {};

//
function PLCompareBtnShow({ count, is_show, showCompare }) {
    //
    return (
        <div
            className={`PLCompareBtnShow pos-fixed ${
                is_show ? 'display-none' : ''
            }`}
        >
            <div
                className="padding-x-15px padding-y-5px brs-8px bg-primary box-shadow-fb text-blue cursor-pointer"
                onClick={showCompare}
            >
                So sánh ({count})
            </div>
        </div>
    );
}

export default PLCompareBtnShow;
