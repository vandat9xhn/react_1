import React from 'react';
import PropTypes from 'prop-types';
// 
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
// 
import StoryCreatePc from '../../../../../story_fb/pc/create/_main/StoryCreatePc';

//
export function openScreenCreateStoryPc({
    openScreenFloor = () => {},
    has_history = true,
    hidden_before = false,
}) {
    openScreenFloor({
        FloorComponent: ScreenStoryCreate,
        has_history: has_history,
        hidden_before: hidden_before,
    });
}

//
ScreenStoryCreate.propTypes = {};

//
function ScreenStoryCreate({ closeScreen }) {
    //
    useMakeBodyHidden({
        hidden_app: true,
        hidden_header: true,
        // blur_header: true,
    });

    //
    return <StoryCreatePc show_fav={true} closeScreen={closeScreen} />;
}

export default ScreenStoryCreate;
