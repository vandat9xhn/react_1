import React from 'react';
import PropTypes from 'prop-types';
// 
import './PLFilterPosition.scss';

//
PLFilterPosition.propTypes = {};

//
function PLFilterPosition({ pos_left, children }) {
    //
    return (
        <div
            className={`PLFilterPosition pos-abs top-100per z-index-lv1 padding-top-10px ${
                pos_left ? 'left-0' : 'right-0'
            }`}
        >
            <div
                className={`PLFilterPosition_contain pos-rel ${
                    pos_left
                        ? 'PLFilterPosition_contain-left'
                        : 'PLFilterPosition_contain-right'
                }`}
            >
                {children}
            </div>
        </div>
    );
}

export default PLFilterPosition;
