import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    data_story_font_arr,
    data_story_text_color_arr,
} from '../../../../../../../../_data/story/text';
// 
import CloseDiv from '../../../../../../../some_div/close_div/CloseDiv';
// 
import StoryAddTextInputPcC from '../input/StoryAddTextInputPcC';
import StoryAddTextFontColorPcC from '../font_color/_main/StoryAddTextFontColorPcC';

//
StoryAddTextPcC.propTypes = {};

//
function StoryAddTextPcC({ add_text_obj, handleAddText }) {
    //
    const [state_obj, setStateObj] = useState({
        text: add_text_obj.text,
        active_font_ix: add_text_obj.active_font_ix,
        active_color_ix: add_text_obj.active_color_ix,
    });

    //
    const { text, active_color_ix, active_font_ix } = state_obj;

    //
    function handleChangeText(value) {
        setStateObj({
            ...state_obj,
            text: value,
        });
    }

    //
    function handleChangeFont(ix) {
        setStateObj({
            ...state_obj,
            active_font_ix: ix,
        });
    }

    //
    function handleChangeColor(ix) {
        setStateObj({
            ...state_obj,
            active_color_ix: ix,
        });
    }

    //
    function onAddText() {
        handleAddText({
            text: text,
            active_color_ix: active_color_ix,
            active_font_ix: active_font_ix,
        });
    }

    // console.log(text);
    //
    return (
        <CloseDiv makeDivHidden={onAddText}>
            <div className="StoryAddTextPcC pos-abs-100">
                <div className="pos-abs-center w-100per max-h-100per overflow-y-auto scroll-thin">
                    <StoryAddTextInputPcC
                        text={text}
                        font={data_story_font_arr[active_font_ix]}
                        color={data_story_text_color_arr[active_color_ix]}
                        handleChange={handleChangeText}
                    />
                </div>

                <div className="pos-abs left-100per y-center">
                    <StoryAddTextFontColorPcC
                        font_arr={data_story_font_arr}
                        color_arr={data_story_text_color_arr}
                        active_font_ix={active_font_ix}
                        active_color_ix={active_color_ix}
                        //
                        handleChangeFont={handleChangeFont}
                        handleChangeColor={handleChangeColor}
                    />
                </div>
            </div>
        </CloseDiv>
    );
}

export default StoryAddTextPcC;
