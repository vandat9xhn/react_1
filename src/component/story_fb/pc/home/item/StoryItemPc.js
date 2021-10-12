import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import StoryItem from '../../../_components/item/_main/StoryItem';
//
import './StoryItemPc.scss';

//
StoryItemPc.propTypes = {};

//
function StoryItemPc({
    story_arr,
    count_story,
    active_ix,
    story_type,

    handleNextStoryUser,
    handlePrevStoryUser,
}) {
    //
    return (
        <div className="StoryItemPc h-100per bg-shadow-9 pos-rel">
            <StoryItem
                story_arr={story_arr}
                count_story={count_story}
                active_ix={active_ix}
                story_type={story_type}
                // 
                handleNextStoryUser={handleNextStoryUser}
                handlePrevStoryUser={handlePrevStoryUser}
            />
        </div>
    );
}

export default StoryItemPc;
