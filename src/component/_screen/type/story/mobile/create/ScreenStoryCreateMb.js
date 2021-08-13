import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
// 
// import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
// 
import StoryCreateMb from '../../../../../story_fb/mobile/create/_main/StoryCreateMb';

//
export function openScreenCreateStoryMb({
    openScreenFloor = () => {},
    has_history = true,
    hidden_before = true,
}) {
    openScreenFloor({
        FloorComponent: StoryCreateMb,
        has_history: has_history,
        hidden_before: hidden_before,
    });
}

//
ScreenStoryCreateMb.propTypes = {};

//
function ScreenStoryCreateMb({ closeScreen }) {
    // 
    const {openScreenFloor} = useContext(context_api)

    //
    // useMakeBodyHidden({
    //     hidden_app: true,
    //     hidden_header: true,
    //     blur_header: true,
    // });

    useEffect(() => {
        openScreenCreateStoryMb({
            openScreenFloor: openScreenFloor
        })
    }, [])

    //
    // return <StoryCreateMb closeScreen={closeScreen} />;
    return null
}

export default ScreenStoryCreateMb;
