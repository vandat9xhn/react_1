import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
// 
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './StoryCreate.scss';

//
StoryCreate.propTypes = {};

//
function StoryCreate(props) {
    //
    const { openScreenCreateStory } = useContext(context_api);

    //
    return (
        <button
            className="StoryCreate btn btn-hv btn-active padding-8px brs-8px cursor-pointer"
            onClick={openScreenCreateStory}
        >
            <div className="flex-between-center">
                <div className="StoryCreate_left">
                    <span className="label-field font-18px text-white">
                        Create story
                    </span>
                </div>

                <div className="StoryCreate_right">
                    <IconsArrow y={400} />
                </div>
            </div>
        </button>
    );
}

export default StoryCreate;
