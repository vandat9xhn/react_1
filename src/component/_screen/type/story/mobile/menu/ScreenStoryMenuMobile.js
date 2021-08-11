import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import StoryMenuMobile from '../../../../../story_fb/mobile/menu/StoryMenuMobile';

//
export function openScreenStoryMenuMobile({
    openScreenFloor = () => {},
    has_history = true,

    story_arr_yours = [],
    story_arr_friends = [],
    story_arr_followed = [],
    story_arr_suggested = [],

    count_story_friends = 0,
    count_story_yours = 0,
    count_story_followed = 0,
    count_story_suggested = 0,
}) {
    openScreenFloor({
        FloorComponent: ScreenStoryMenuMobile,
        has_history: has_history,

        story_arr_yours: story_arr_yours,
        story_arr_friends: story_arr_friends,
        story_arr_followed: story_arr_followed,
        story_arr_suggested: story_arr_suggested,

        count_story_yours: count_story_yours,
        count_story_friends: count_story_friends,
        count_story_followed: count_story_followed,
        count_story_suggested: count_story_suggested,
    });
}

//
ScreenStoryMenuMobile.propTypes = {};

//
function ScreenStoryMenuMobile(props) {
    //
    useMakeBodyHidden({
        // hidden_scroll: true,
        hidden_app: true,
        hidden_header: true,
    });

    return <StoryMenuMobile {...props} />;
}

export default ScreenStoryMenuMobile;
