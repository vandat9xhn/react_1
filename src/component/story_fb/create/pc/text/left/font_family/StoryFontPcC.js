import React from 'react';
import PropTypes from 'prop-types';
//
import SelectFont from '../../../../../../input/font/_main/SelectFont';

//
StoryFontPcC.propTypes = {};

//
function StoryFontPcC({ font_arr, active_ix, handleChangeFont }) {
    //
    return (
        <div>
            <SelectFont
                active_ix={active_ix}
                font_arr={font_arr}
                handleChangeFont={handleChangeFont}
            />
        </div>
    );
}

export default StoryFontPcC;
