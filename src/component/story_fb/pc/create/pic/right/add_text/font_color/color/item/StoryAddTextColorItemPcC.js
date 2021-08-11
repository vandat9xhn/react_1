import React from 'react';
import PropTypes from 'prop-types';
//
import './StoryAddTextColorItemPcC.scss';

//
StoryAddTextColorItemPcC.propTypes = {};

//
function StoryAddTextColorItemPcC({ ix, is_active, color, handleChange }) {
    //
    function onClick() {
        handleChange(ix);
    }

    //
    return (
        <div
            className={`StoryAddTextColorItemPcC brs-50 ${
                is_active
                    ? 'StoryAddTextColorItemPcC_active pointer-events-none'
                    : 'StoryAddTextColorItemPcC_inactive cursor-pointer'
            }`}
            style={{backgroundColor: color}}
            onClick={onClick}
        ></div>
    );
}

export default StoryAddTextColorItemPcC;
