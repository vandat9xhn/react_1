import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    data_story_bg_arr,
    data_story_font_arr,
} from '../../../../../../_data/story/text';
//
import StoryCreatePcCommon from '../../../../_components/create/pc/_common/StoryCommonPcC';
import StoryCreateTextLeftPc from '../left/_main/StoryTextLeftPcC';
import StoryTextRightPcC from '../right/_main/StoryTextRightPcC';

//
StoryCreateTextPc.propTypes = {};

//
function StoryCreateTextPc({ show_fav, handleClose }) {
    //
    const [state_obj, setStateObj] = useState({
        text: '',
        bg_ix: 0,
        font_ix: 0,
    });

    const { text, bg_ix, font_ix } = state_obj;

    const bg = data_story_bg_arr[bg_ix];
    const font_family = data_story_font_arr[font_ix];

    //
    function handleChangeText(e) {
        setStateObj((state_obj) => ({
            ...state_obj,
            text: e.target.value,
        }));
    }

    //
    function handleChangeFont(new_font_ix) {
        setStateObj((state_obj) => ({
            ...state_obj,
            font_ix: new_font_ix,
        }));
    }

    //
    function handleChooseBg(new_bg_ix) {
        setStateObj((state_obj) => ({
            ...state_obj,
            bg_ix: new_bg_ix,
        }));
    }

    //
    return (
        <StoryCreatePcCommon
            show_fav={show_fav}
            children_left={
                <StoryCreateTextLeftPc
                    font_arr={data_story_font_arr}
                    bg_arr={data_story_bg_arr}
                    text={text}
                    active_font_ix={font_ix}
                    // 
                    handleChange={handleChangeText}
                    handleChangeFont={handleChangeFont}
                    handleChooseBg={handleChooseBg}
                />
            }
            children_right={
                <StoryTextRightPcC
                    bg={bg}
                    text={text}
                    font_family={font_family}
                />
            }
            handleClose={handleClose}
        />
    );
}

export default StoryCreateTextPc;
