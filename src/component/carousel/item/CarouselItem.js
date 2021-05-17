import React from 'react';
import PropTypes from 'prop-types';
// 
import { VideoOrImage } from '../../../_some_function/VideoOrImage';
// 
import './CarouselItem.scss';

// 
CarouselItem.propTypes = {
    vid_pic: PropTypes.string,
    width_vid_pic: PropTypes.string,
};

// 
function CarouselItem(props) {
    const {vid_pic, width_vid_pic} = props;

    // 
    return (
        <div
            className="CarouselItem"
            style={{ width: width_vid_pic }}
        >
            {VideoOrImage(vid_pic)}
        </div>
    );
}

export default CarouselItem;
