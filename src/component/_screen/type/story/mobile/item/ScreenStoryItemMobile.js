import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
// 
import StoryItemMobile from '../../../../../story_fb/mobile/item/StoryItemMobile';

//
export function openScreenStoryItemMobile({
    openScreenFloor = () => {},

    story_arr = [],
    count = 0,
    active_ix = 0,
    story_type = '',
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

function ScreenStoryItemMobile(props) {
    //
    useMakeBodyHidden();

    //
    return <StoryItemMobile {...props} />;
}

export default ScreenStoryItemMobile;
