import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import StoryHomePc from '../../../../../story_fb/pc/home/_main/StoryHomePc';

//
export function openStoryHomePc({
    openScreenFloor = () => {},
    has_history = true,

    story_arr_followed = [],
    count_story_followed = 0,
    has_fetched_followed = false,

    story_arr_yours = [],
    count_story_yours = 0,
    has_fetched_yours = false,

    active_ix = 0,
    story_type = '',
}) {
    openScreenFloor({
        FloorComponent: ScreenStoryHomePc,
        has_history: has_history,

        story_arr_followed: story_arr_followed,
        count_story_followed: count_story_followed,
        has_fetched_followed: has_fetched_followed,

        story_arr_yours: story_arr_yours,
        count_story_yours: count_story_yours,
        has_fetched_yours: has_fetched_yours,

        old_active_ix: active_ix,
        old_story_type: story_type,
        has_close: true,
    });
}

//
ScreenStoryHomePc.propTypes = {};

//
function ScreenStoryHomePc(props) {
    //
    useMakeBodyHidden({
        // blur_header: true,
        hidden_scroll: true,
        hidden_app: true,
        hidden_header: true,
    });

    return <StoryHomePc {...props} />;
}

export default ScreenStoryHomePc;
