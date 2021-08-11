import React, { useState } from 'react';
import PropTypes from 'prop-types';
// 
import { handle_API_FeedStory_L } from '../../../../_handle_api/feed/HandleAPIStory';
//
import StoryItem from '../../_components/item/_main/StoryItem';
//
import './StoryItemMobile.scss';

//
StoryItemMobile.propTypes = {};

//
function StoryItemMobile({
    story_arr,
    count,
    old_active_ix,
    story_type,
    closeScreen,
}) {
    //
    const [state_obj, setStateObj] = useState({
        active_ix: old_active_ix,
        is_fetching: false,
    });

    //
    const { active_ix, is_fetching } = state_obj;

    /* ----------- */

    //
    async function getData_Story() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching: true,
        }));

        const { data } = await handle_API_FeedStory_L(
            story_arr.length,
            story_type
        );

        story_arr.push(...data);

        setStateObj((state_obj) => ({
            ...state_obj,
            active_ix: active_ix + 1,
            is_fetching: false,
        }));
    }

    /* ----------- */

    //
    function handleNextStoryUser() {
        if (active_ix < story_arr.length) {
            setStateObj({
                ...state_obj,
                active_ix: active_ix + 1,
            });

            return;
        }

        getData_Story();
    }

    //
    function handlePrevStoryUser() {
        setStateObj({
            ...state_obj,
            active_ix: active_ix - 1,
        });
    }

    //
    return (
        <div className="StoryItemMobile wh-100v bg-loader">
            <StoryItem
                story_arr={story_arr}
                count_story={count}
                active_ix={active_ix}
                story_type={story_type}
                is_fetching_story={is_fetching}
                handleNextStoryUser={handleNextStoryUser}
                handlePrevStoryUser={handlePrevStoryUser}
                closeScreen={closeScreen}
            />
        </div>
    );
}

export default StoryItemMobile;
