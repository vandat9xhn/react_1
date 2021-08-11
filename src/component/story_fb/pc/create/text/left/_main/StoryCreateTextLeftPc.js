import React from 'react';
import PropTypes from 'prop-types';
//
import StoryTextPcC from '../textarea/StoryTextPcC';
import StoryFontPcC from '../font_family/StoryFontPcC';
import StoryBgPcC from '../bg/StoryBgPcC';
//
import './StoryCreateTextLeftPc.scss';

//
StoryCreateTextLeftPc.propTypes = {};

//
function StoryCreateTextLeftPc({
    font_arr,
    bg_arr,

    text,
    active_font_ix,
    active_bg_ix,

    handleChange,
    handleChangeFont,
    handleChooseBg,
}) {
    //
    return (
        <div className="StoryCreateTextLeftPc">
            <div className="StoryCreateTextLeftPc_part padding-4px">
                <StoryTextPcC text={text} handleChange={handleChange} />
            </div>

            <div className="StoryCreateTextLeftPc_part">
                <StoryFontPcC
                    font_arr={font_arr}
                    active_ix={active_font_ix}
                    handleChangeFont={handleChangeFont}
                />
            </div>

            <div className="StoryCreateTextLeftPc_part">
                <StoryBgPcC
                    active_ix={active_bg_ix}
                    bg_arr={bg_arr}
                    handleChooseBg={handleChooseBg}
                />
            </div>
        </div>
    );
}

export default StoryCreateTextLeftPc;
