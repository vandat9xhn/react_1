import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './StoryCreatePc.scss';

//
StoryCreatePc.propTypes = {};

//
function StoryCreatePc(props) {
    //
    const { openScreenCreateStory } = useContext(context_api);

    //
    return (
        <div
            className="StoryCreatePc padding-8px cursor-pointer"
            onClick={openScreenCreateStory}
        >
            <div className="display-flex align-items-center">
                <div className="StoryCreatePc_left">
                    <div className="StoryCreatePc_left-contain display-flex-center bg-ccc brs-50">
                        <IconsArrow y={400} size_icon="1.25rem" />
                    </div>
                </div>

                <div className="StoryCreatePc_right">
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

export default StoryCreatePc;
