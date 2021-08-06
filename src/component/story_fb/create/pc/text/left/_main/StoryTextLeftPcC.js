import React from 'react';
import PropTypes from 'prop-types';
//
import StoryTextPcC from '../textarea/StoryTextPcC';
import StoryFontPcC from '../font_family/StoryFontPcC';
import StoryBgList from '../../../../../_components/create/bg/_main/StoryBgList';

//
StoryCreateTextLeftPc.propTypes = {};

//
function StoryCreateTextLeftPc({
    font_arr,
    bg_arr,

    text,
    active_font_ix,

    handleChange,
    handleChangeFont,
    handleChooseBg,
}) {
    //
    return (
        <div>
            <div>
                <StoryTextPcC text={text} handleChange={handleChange} />
            </div>

            <div>
                <StoryFontPcC
                    font_arr={font_arr}
                    active_ix={active_font_ix}
                    handleChangeFont={handleChangeFont}
                />
            </div>

            <div>
                <StoryBgList bg_arr={bg_arr} handleChooseBg={handleChooseBg} />
            </div>
        </div>
    );
}

export default StoryCreateTextLeftPc;
