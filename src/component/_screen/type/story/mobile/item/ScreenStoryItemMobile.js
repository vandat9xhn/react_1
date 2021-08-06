import React, { useState } from 'react';
import PropTypes from 'prop-types';
// 
import { handle_API_FeedStory_L } from '../../../../../../_handle_api/feed/HandleAPIStory';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import ScreenStoryItem from '../../_components/item/_main/ScreenStoryItem';
//
import './ScreenStoryItemMobile.scss';

//
export function openScreenStoryItemMobile({
    openScreenFloor,

    story_arr,
    count,
    active_ix,

    story_type,
}) {
    openScreenFloor({
        FloorComponent: ScreenStoryItemMobile,
        story_arr: story_arr,
        old_active_ix: active_ix,
        count: count || story_arr.length,
        story_type: story_type,
    });
}

//
ScreenStoryItemMobile.propTypes = {};

//
function ScreenStoryItemMobile({
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

    //
    useMakeBodyHidden();

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
        <div className="ScreenStoryItemMobile wh-100v bg-loader">
            <ScreenStoryItem
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

export default ScreenStoryItemMobile;
