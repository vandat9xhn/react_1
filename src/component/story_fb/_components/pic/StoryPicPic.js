import React from 'react';
import PropTypes from 'prop-types';

//
StoryPicPic.propTypes = {};

//
function StoryPicPic({ trans_x, trans_y, rotate, vid_pic, scale }) {
    return (
        <div
            className="pos-abs h-100per left-50per top-50per"
            style={{
                transform: `translate(-50%, -50%) translate(${trans_x}px, ${trans_y}px) rotate(${rotate}deg) scale(${scale})`,
            }}
        >
            <img src={vid_pic} alt="" className="h-100per" />
        </div>
    );
}

export default StoryPicPic;
