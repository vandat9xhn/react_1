import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import ScreenStoryItem from '../../_components/item/_main/ScreenStoryItem';
//
import './ScreenStoryItemPc.scss';

//
ScreenStoryItemPc.propTypes = {};

//
function ScreenStoryItemPc({
    story_arr,
    count_story,
    active_ix,
    story_type,
    handleNextStoryUser,
    handlePrevStoryUser,
    // closeScreen,
}) {
    //
    return (
        <div className="ScreenStoryItemPc h-100per bg-loader position-rel">
            <ScreenStoryItem
                story_arr={story_arr}
                count_story={count_story}
                active_ix={active_ix}
                story_type={story_type}
                handleNextStoryUser={handleNextStoryUser}
                handlePrevStoryUser={handlePrevStoryUser}
                closeScreen={undefined}
            />
        </div>
    );
}

export default ScreenStoryItemPc;
