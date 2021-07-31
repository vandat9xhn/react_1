import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './StoryFaceCreate.scss';

//
StoryFaceCreate.propTypes = {};

//
function StoryFaceCreate(props) {
    //
    const { user } = useContext(context_api);

    const { picture } = user;

    //
    return (
        <div className="StoryFaceCreate position-rel h-100per story-active">
            <div className="StoryFaceCreate_row h-100per">
                <div className="StoryFaceCreate_head flex-grow-1">
                    <img
                        src={picture}
                        alt=""
                        className="StoryFaceCreate_head-img wh-100 object-fit-cover story-transition"
                    />
                </div>

                <div className="story-bg"></div>

                <div className="StoryFaceCreate_foot position-rel display-flex-center">
                    <div className="StoryFaceCreate_add">
                        <div className="StoryFaceCreate_add-contain display-flex-center bg-blue brs-50">
                            <IconsArrow y={400} size_icon="1rem" />
                        </div>
                    </div>

                    <div>
                        <span className="font-13px font-600">Create story</span>
                    </div>
                </div>
            </div>

            <div className="story-bg-hv"></div>
        </div>
    );
}

export default StoryFaceCreate;
