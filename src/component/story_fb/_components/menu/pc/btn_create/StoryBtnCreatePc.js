import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { openScreenCreateStoryPc } from '../../../../../_screen/type/story/pc/create/ScreenStoryCreatePc';
// 
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './StoryBtnCreatePc.scss';

//
StoryBtnCreatePc.propTypes = {};

//
function StoryBtnCreatePc(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    // 
    function openScreenCreateStory() {
        openScreenCreateStoryPc({
            openScreenFloor: openScreenFloor,
            show_fav: true,
            hidden_before: true,
        });

        history.pushState('', '', `/story/create`);
    }

    //
    return (
        <div
            className="StoryBtnCreatePc padding-8px cursor-pointer"
            onClick={openScreenCreateStory}
        >
            <div className="display-flex align-items-center">
                <div className="StoryBtnCreatePc_left">
                    <div className="StoryBtnCreatePc_left-contain display-flex-center bg-ccc brs-50">
                        <IconsArrow y={400} size_icon="1.25rem" />
                    </div>
                </div>

                <div className="StoryBtnCreatePc_right">
                    <div>
                        <span className="label-field">
                            Create a story
                        </span>
                    </div>

                    <div>
                        <span className="font-12px">Share a photo or write something.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryBtnCreatePc;
