import React from 'react';
import PropTypes from 'prop-types';
//
import TextareaNotSend from '../../../../../input/textarea/TextareaNotSend';
// 
import './StoryCPAddTextMb.scss';

//
StoryCPAddTextMb.propTypes = {};

//
function StoryCPAddTextMb({ text, handleChange }) {
    //
    return (
        <TextareaNotSend
            name="story_input"
            text={text}
            placeholder="START TYPING"
            textarea_class="StoryCPAddTextMb pos-abs-center overflow-y-auto scroll-thin text-align-center text-white font-500 font-18px"
            onChange={handleChange}
        />
    );
}

export default StoryCPAddTextMb;
