import React from 'react';
import PropTypes from 'prop-types';
//
import SelectFont from '../../../../../../../../input/font/_main/SelectFont';
//
import StoryAddTextColorPcC from '../color/_main/StoryAddTextColorPcC';
// 
import './StoryAddTextFontColorPcC.scss'

//
StoryAddTextFontColorPcC.propTypes = {};

//
function StoryAddTextFontColorPcC({
    font_arr,
    color_arr,
    active_font_ix,
    active_color_ix,
    
    handleChangeFont,
    handleChangeColor,
}) {
    //
    return (
        <div className="StoryAddTextFontColorPcC display-flex flex-col padding-8px bg-primary brs-8px">
            <div className="padding-4px">
                <SelectFont
                    active_ix={active_font_ix}
                    font_arr={font_arr}
                    handleChangeFont={handleChangeFont}
                />
            </div>

            <div className="flex-grow-1 padding-4px">
                <StoryAddTextColorPcC
                    color_arr={color_arr}
                    active_ix={active_color_ix}
                    handleChange={handleChangeColor}
                />
            </div>
        </div>
    );
}

export default StoryAddTextFontColorPcC;
