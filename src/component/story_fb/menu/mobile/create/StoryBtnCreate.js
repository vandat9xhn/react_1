import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
// 
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './StoryBtnCreate.scss';

//
StoryBtnCreate.propTypes = {};

//
function StoryBtnCreate(props) {
    //
    const { openScreenCreateStory } = useContext(context_api);

    //
    return (
        <button
            className="StoryBtnCreate btn btn-hv btn-active brs-8px cursor-pointer"
            onClick={openScreenCreateStory}
        >
            <div className="flex-between-center">
                <div className="StoryBtnCreate_left">
                    <span className="label-field font-18px text-white">
                        Create story
                    </span>
                </div>

                <div className="StoryBtnCreate_right">
                    <IconsArrow y={400} />
                </div>
            </div>
        </button>
    );
}

export default StoryBtnCreate;
