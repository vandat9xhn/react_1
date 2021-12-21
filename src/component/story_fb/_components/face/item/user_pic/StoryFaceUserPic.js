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
        <div className="StoryFaceUserPic brs-50">
            <div
                className={`StoryFaceUserPic_contain brs-50 ${
                    count_new > 0
                        ? 'StoryFaceUserPic_border-new'
                        : 'StoryFaceUserPic_border-old'
                }`}
            >
                <img
                    className="StoryFaceUserPic_item wh-100 brs-50 object-fit-cover"
                    src={picture}
                    alt=""
                />
            </div>
        </div>
    );
}

export default StoryFaceUserPic;
