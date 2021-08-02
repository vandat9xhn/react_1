import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { openScreenStoryMenuMobile } from '../../../component/_screen/type/story/mobile/menu/ScreenStoryMenuMobile';
//
import './LearnStoryItem.scss';

//
LearnStoryItem.propTypes = {};

//
function LearnStoryItem(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function handlePrevUserStory() {
        console.log('prev');
    }

    //
    function handleOpenScreenStoryMenu() {
        openScreenStoryMenuMobile({ openScreenFloor: openScreenFloor });
        history.pushState('', '', '/stories');
    }

    //
    return (
        <div>
            <div
                className="label-field cursor-pointer"
                onClick={handleOpenScreenStoryMenu}
            >
                Open Screen Story Menu
            </div>
        </div>
    );
}

export default LearnStoryItem;
