import React from 'react';
import PropTypes from 'prop-types';
//
import { type_video_or_img } from '../../../../_some_function/VideoOrImage';
//
import './StoryFace.scss';

//
StoryFace.propTypes = {};

//
function StoryFace({ id, vid_pic, user }) {
    //
    const { first_name, last_name, picture } = user;

    //
    return (
        <div className="StoryFace position-rel h-100per story-active">
            <div className="StoryFace_img h-100per story-transition">
                {type_video_or_img(vid_pic) == 'img' ? (
                    <img
                        src={vid_pic}
                        alt=""
                        className="wh-100 object-fit-cover"
                    />
                ) : (
                    <video
                        src={vid_pic}
                        alt=""
                        className="wh-100 object-fit-cover"
                    />
                )}
            </div>

            <div className="StoryFace_pic">
                <div className="StoryFace_pic-contain brs-50">
                    <div className="StoryFace_pic-border">
                        <img
                            src={picture}
                            alt=""
                            className="StoryFace_pic-item brs-50"
                            width="35"
                            height="35"
                        />
                    </div>
                </div>
            </div>

            <div className="StoryFace_name">
                <div className="StoryFace_name-contain">
                    <span className="StoryFace_name-item label-field text-white">
                        {first_name} {last_name}
                    </span>
                </div>
            </div>

            <div className="story-bg"></div>

            <div className="story-bg-hv"></div>
        </div>
    );
}

export default StoryFace;
