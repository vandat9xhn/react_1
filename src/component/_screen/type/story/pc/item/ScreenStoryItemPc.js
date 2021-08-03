import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import ScreenStoryItem from '../../_components/item/ScreenStoryItem';
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
        <div className="h-100per padding-8px bg-loader display-flex-center">
            <div className="ScreenStoryItemPc_contain position-rel h-100per">
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
        </div>
    );
}

export default ScreenStoryItemPc;
