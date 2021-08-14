import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import { openScreenCreateStoryMb } from '../../../../../_screen/type/story/mobile/create/ScreenStoryCreateMb';
//
import './StoryBtnCreateMb.scss';

//
StoryBtnCreateMb.propTypes = {};

//
function StoryBtnCreateMb(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function openCreateStory() {
        openScreenCreateStoryMb({
            openScreenFloor: openScreenFloor,
        });

        history.pushState('', '', '/story/create')
    }

    //
    return (
        <button
            className="StoryBtnCreateMb btn btn-hv btn-active brs-8px cursor-pointer"
            onClick={openCreateStory}
        >
            <div className="flex-between-center">
                <div className="StoryBtnCreateMb_left">
                    <span className="label-field font-18px text-white">
                        Create story
                    </span>
                </div>

                <div className="StoryBtnCreateMb_right">
                    <IconsArrow y={400} />
                </div>
            </div>
        </button>
    );
}

export default StoryBtnCreateMb;
