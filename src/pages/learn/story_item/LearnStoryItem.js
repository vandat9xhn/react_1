import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { openScreenStoryMenuMobile } from '../../../component/_screen/type/story/mobile/menu/ScreenStoryMenuMobile';
//
import './LearnStoryItem.scss';
import { openScreenStoryPc } from '../../../component/_screen/type/story/pc/_main/ScreenStoryPc';
import StoryCreateTextChoice from '../../../component/story_fb/_components/create/choose/text/StoryCreateTextChoice';

//
LearnStoryItem.propTypes = {};

//
function LearnStoryItem(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function handleOpenScreenStoryMenu() {
        openScreenStoryMenuMobile({ openScreenFloor: openScreenFloor });
        history.pushState('', '', '/stories');
    }

    //
    function handleOpenScreenStoryPc() {
        const old_active_ix = 0;

        openScreenStoryPc({
            openScreenFloor: openScreenFloor,
            old_active_ix: old_active_ix,
            has_close: true,
        });
        history.pushState('', '', `/stories?i=${old_active_ix}`);
    }

    //
    return (
        <div className="padding-8px">
            <div
                className="label-field cursor-pointer"
                onClick={handleOpenScreenStoryMenu}
            >
                Open Screen Story Menu Mobile
            </div>
            <br />

            <div
                className="label-field cursor-pointer"
                onClick={handleOpenScreenStoryPc}
            >
                Open Screen Story Pc
            </div>

            <div className="Learn_StoryCreateTextChoice">
                <StoryCreateTextChoice />
            </div>
        </div>
    );
}

export default LearnStoryItem;
