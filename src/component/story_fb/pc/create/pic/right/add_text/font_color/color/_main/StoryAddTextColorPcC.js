import React from 'react';
import PropTypes from 'prop-types';
//
import StoryAddTextColorItemPcC from '../item/StoryAddTextColorItemPcC';
// 
import './StoryAddTextColorPcC.scss'

//
StoryAddTextColorPcC.propTypes = {};

//
function StoryAddTextColorPcC({ color_arr, active_ix, handleChange }) {
    //
    return (
        <div className="StoryAddTextColorPcC h-100per padding-4px brs-5px">
            <ul className="list-none display-flex justify-content-center flex-wrap">
                {color_arr.map((color, ix) => (
                    <li key={`${ix}`} className="StoryAddTextColorPcC_item">
                        <StoryAddTextColorItemPcC
                            ix={ix}
                            is_active={active_ix == ix}
                            color={color}
                            handleChange={handleChange}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StoryAddTextColorPcC;
