import React from 'react';
import PropTypes from 'prop-types';
//
import TextareaNotSend from '../../../../../input/textarea/TextareaNotSend';
//
import './StoryCTInputMb.scss';

//
StoryCTInputMb.propTypes = {};

//
function StoryCTInputMb({ text, handleChange }) {
    //
    return (
        // <div className=" h-100per">
            <TextareaNotSend
                name="story_input"
                text={text}
                placeholder="START TYPING"
                textarea_class="StoryCTInputMb_textarea pos-abs-center overflow-y-auto scroll-thin text-align-center text-white label-field font-18px"
                onChange={handleChange}
            />
        // </div>
    );
}

export default StoryCTInputMb;
