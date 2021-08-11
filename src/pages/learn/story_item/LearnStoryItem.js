import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { openScreenStoryMenuMobile } from '../../../component/_screen/type/story/mobile/menu/ScreenStoryMenuMobile';
import StoryCreateTextChoice from '../../../component/story_fb/_components/create/choose/text/StoryCreateTextChoice';
import { openScreenCreateStoryPc } from '../../../component/_screen/type/story/pc/create/ScreenStoryCreate';
import { openStoryHomePc } from '../../../component/_screen/type/story/pc/home/ScreenStoryHomePc';
//
import './LearnStoryItem.scss';
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

        openStoryHomePc({
            openScreenFloor: openScreenFloor,
            old_active_ix: old_active_ix,
            has_close: true,
        });
        history.pushState('', '', `/stories?i=${old_active_ix}`);
    }

    //
    function handleOpenCreateStoryPc() {
        openScreenCreateStoryPc({
            openScreenFloor: openScreenFloor,
            show_fav: true,
        });

        history.pushState('', '', `/story/create`);
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
            <br />

            <div
                className="Learn_StoryCreateTextChoice"
                onClick={handleOpenCreateStoryPc}
            >
                <StoryCreateTextChoice />
            </div>
            <br />

            <div
                className="Learn_StoryCreateTextChoice"
                onClick={handleOpenCreateStoryPc}
            >
                Open Screen Story Create Home Pc
            </div>
        </div>
    );
}

export default LearnStoryItem;
