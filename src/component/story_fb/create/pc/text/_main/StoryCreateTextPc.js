import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
//
import {
    data_story_bg_arr,
    data_story_font_arr,
} from '../../../../../../_data/story/text';
//
import StoryCreatePcCommon from '../../../../_components/create/pc/_main/StoryCommonPcC';
import StoryCreateTextLeftPc from '../left/_main/StoryCreateTextLeftPc';
import StoryCreateTextRightPc from '../right/_main/StoryCreateTextRightPc';

//
StoryCreateTextPc.propTypes = {};

//
function StoryCreateTextPc({
    show_fav,
    handleCreate,
    handleDiscard,
    handleClose,
}) {
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
    function onCreate() {
        handleCreate({ ...state_obj });
    }

    //
    return (
        <StoryCreatePcCommon
            show_fav={show_fav}
            handleCreate={onCreate}
            handleDiscard={handleDiscard}
            handleClose={handleClose}
            //
            children_left={
                <StoryCreateTextLeftPc
                    font_arr={data_story_font_arr}
                    bg_arr={data_story_bg_arr}
                    text={text}
                    active_font_ix={font_ix}
                    active_bg_ix={bg_ix}
                    //
                    handleChange={handleChangeText}
                    handleChangeFont={handleChangeFont}
                    handleChooseBg={handleChooseBg}
                />
            }
            children_right={
                <StoryCreateTextRightPc
                    bg={bg}
                    text={text}
                    font_family={font_family}
                />
            }
        />
    );
}

export default StoryCreateTextPc;
