import React from 'react';
import PropTypes from 'prop-types';
//
import StoryFollowedPc from '../followed/StoryFollowedPc';

//
StoryMenuPc.propTypes = {};

//
function StoryMenuPc({ story_user_arr, handleChangeUserStory }) {
    //
    return (
        <div>
            <div>
                <div>
                    <StoryFollowedPc
                        story_user_arr={story_user_arr}
                        handleChangeUserStory={handleChangeUserStory}
                    />
                </div>
            </div>
        </div>
    );
}

export default StoryMenuPc;
