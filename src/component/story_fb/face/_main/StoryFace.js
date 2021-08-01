import React from 'react';
import PropTypes from 'prop-types';
//
import { type_video_or_img } from '../../../../_some_function/VideoOrImage';
//
import './StoryFace.scss';
import BadgeDiv from '../../../some_div/badge_div/BadgeDiv';

//
StoryFace.propTypes = {};

//
function StoryFace({ vid_pic, user, count_new }) {
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
                    <div
                        className={`brs-50 ${
                            count_new > 0
                                ? 'StoryFace_pic-border-new'
                                : 'StoryFace_pic-border-old'
                        }`}
                    >
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

            <div className="StoryFace_count_new">
                <BadgeDiv num={count_new} />
            </div>
        </div>
    );
}

export default StoryFace;
