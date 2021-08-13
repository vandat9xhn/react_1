import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { data_story_bg_arr } from '../../../../../../_data/story/text';
//
import StoryIconCloseMb from '../../../../_components/create/mobile/icon_close/StoryIconCloseMb';
import StoryCTFootMb from '../foot/StoryCTFootMb';
import StoryCTInputMb from '../input/StoryCTInputMb';
//
import './StoryCreateTextMb.scss';

//
StoryCreateTextMb.propTypes = {};

//
function StoryCreateTextMb({ handleCreateStory, openPrivacy, handleDiscard }) {
    //
    const [state_obj, setStateObj] = useState({
        active_bg_ix: 0,
        text: '',
    });

    const { active_bg_ix, text } = state_obj;

    //
    function handleChange(value) {
        setStateObj((state_obj) => ({
            ...state_obj,
            text: value,
        }));
    }

    //
    function handleChooseBg(new_bg_ix) {
        setStateObj((state_obj) => ({
            ...state_obj,
            active_bg_ix: new_bg_ix,
        }));
    }

    //
    function onCreateStory() {
        handleCreateStory(state_obj);
    }

    //
    function onDiscard() {
        handleDiscard(!!text.trim());
    }

    //
    return (
        <div className="StoryCreateTextMb wh-100">
            <img
                src={data_story_bg_arr[active_bg_ix]}
                alt=""
                className="wh-100"
            />

            <div className="pos-abs left-0 top-0">
                <StoryIconCloseMb handleDiscard={onDiscard} />
            </div>

            <div className="StoryCreateTextMb_input pos-abs-center">
                <StoryCTInputMb text={text} handleChange={handleChange} />
            </div>

            <div className="pos-abs bottom-0 left-0 w-100per">
                <StoryCTFootMb
                    active_bg_ix={active_bg_ix}
                    bg_img_arr={data_story_bg_arr}
                    can_share={text.trim()}
                    //
                    handleChooseBg={handleChooseBg}
                    openPrivacy={openPrivacy}
                    handleCreateStory={onCreateStory}
                />
            </div>
        </div>
    );
}

export default StoryCreateTextMb;
