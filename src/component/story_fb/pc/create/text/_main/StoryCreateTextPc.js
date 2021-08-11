import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { STORY_WIDTH_HEIGHT_RATIO } from '../../../../../../_constant/Constant';
//
import {
    data_story_bg_arr,
    data_story_font_arr,
} from '../../../../../../_data/story/text';
//
import { useWaitingResize } from '../../../../../../_hooks/useWaitingResize';
//
import StoryCreatePcCommon from '../../../../_components/create/pc/_main/StoryCommonPcC';
import StoryCreateTextLeftPc from '../left/_main/StoryCreateTextLeftPc';
import StoryCreateTextRightPc from '../right/_main/StoryCreateTextRightPc';

//
StoryCreateTextPc.propTypes = {};

//
function StoryCreateTextPc({
    show_fav,
    permission,
    handleChoosePermission,
    handleCreate,
    handleDiscard,
    handleClose,
}) {
    //
    const [state_obj, setStateObj] = useState({
        text: '',
        bg_ix: 0,
        font_ix: 0,
        story_width: 0,
    });

    const { text, bg_ix, font_ix, story_width } = state_obj;

    const bg = data_story_bg_arr[bg_ix];
    const font_family = data_story_font_arr[font_ix];

    //
    const ref_body_elm = useRef(null);

    //
    useWaitingResize({
        handleResize: calculateWidthStory,
    });

    //
    useEffect(() => {
        calculateWidthStory()
    }, []);

    //
    function getWidthStory() {
        return ref_body_elm.current.scrollHeight * STORY_WIDTH_HEIGHT_RATIO;
    }

    //
    function calculateWidthStory() {
        setStateObj((state_obj) => ({
            ...state_obj,
            story_width: getWidthStory(),
        }));
    }

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
            permission={permission}
            handleChoosePermission={handleChoosePermission}
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
                    ref_body_elm={ref_body_elm}
                    bg={bg}
                    text={text}
                    font_family={font_family}
                    story_width={story_width}
                />
            }
        />
    );
}

export default StoryCreateTextPc;
