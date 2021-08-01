import React from 'react';
import PropTypes from 'prop-types';
//
import { getRandomUser } from '../../../_default/_common/default_user';
import { getRandomVidPic } from '../../../_default/_common/default_image';
//
import StoryItem from '../../../component/story_fb/item/_main/StoryItem';
//
import './LearnStoryItem.scss';

//
LearnStoryItem.propTypes = {};

//
function LearnStoryItem(props) {
    //
    function handleNextUserStory() {
        console.log('next');
    }

    //
    function handlePrevUserStory() {
        console.log('prev');
    }

    //
    return (
        <div className="LearnStoryItem position-rel">
            <StoryItem
                ix={2}
                count_user={6}
                handleNextUserStory={handleNextUserStory}
                handlePrevUserStory={handlePrevUserStory}
                {...getRandomUser()}
                count={4}
                count_new={2}
                vid_pic={getRandomVidPic()}
                created_time={new Date().getTime() - 5 * 60 * 60 * 1000}
            />
        </div>
    );
}

export default LearnStoryItem;
