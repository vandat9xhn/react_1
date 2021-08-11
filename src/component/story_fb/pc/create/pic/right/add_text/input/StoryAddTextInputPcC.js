import React from 'react';
import PropTypes from 'prop-types';
//
import { makeAutoHeight } from '../../../../../../../../_some_function/makeAutoHeight';
//
import './StoryAddTextInputPcC.scss';

//
StoryAddTextInputPcC.propTypes = {};

//
function StoryAddTextInputPcC({ text, font, color, handleChange }) {
    //
    const onChange = (e) => {
        handleChange(e.target.value);
        makeAutoHeight(e);
    };

    //
    return (
        <textarea
            className="StoryAddTextInputPcC w-100per padding-8px overflow-hidden text-align-center font-20px font-700"
            name="add_text"
            value={text}
            rows={1}
            placeholder="Start typing"
            style={{ fontFamily: font, color: color }}
            onChange={onChange}
        />
    );
}

export default StoryAddTextInputPcC;
