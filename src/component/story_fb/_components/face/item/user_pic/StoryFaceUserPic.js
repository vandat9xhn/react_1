import React from 'react';
import PropTypes from 'prop-types';
//
import './StoryFaceUserPic.scss';

//
StoryFaceUserPic.propTypes = {};

//
function StoryFaceUserPic({ count_new, picture }) {
    //
    return (
        <div className="StoryFaceUserPic_contain brs-50">
            <div
                className={`brs-50 ${
                    count_new > 0
                        ? 'StoryFaceUserPic_border-new'
                        : 'StoryFaceUserPic_border-old'
                }`}
            >
                <img
                    src={picture}
                    alt=""
                    className="StoryFaceUserPic_item brs-50"
                    width="35"
                    height="35"
                />
            </div>
        </div>
    );
}

export default StoryFaceUserPic;
