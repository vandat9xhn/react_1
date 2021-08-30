import React from 'react';
import PropTypes from 'prop-types';
//
import { type_video_or_img } from '../../../../_some_function/VideoOrImage';
//
import CarouselImg from '../img/CarouselImg';
import CarouselVideo from '../video/CarouselVideo';
//
import './CarouselItem.scss';

//
CarouselItem.propTypes = {
    vid_pic: PropTypes.string,
    width_vid_pic: PropTypes.string,
    stopInterval: PropTypes.func,
};

CarouselItem.defaultProps = {};

//
function CarouselItem({
    vid_pic_ix,
    vid_pic,
    width_vid_pic,
    link_to,
    stopInterval,
}) {
    //
    return (
        <div className="CarouselItem h-100per" style={{ width: width_vid_pic }}>
            {type_video_or_img(vid_pic) == 'img' ? (
                <CarouselImg vid_pic={vid_pic} link_to={link_to} />
            ) : (
                <CarouselVideo
                    vid_pic={vid_pic}
                    vid_pic_ix={vid_pic_ix}
                    stopInterval={stopInterval}
                />
            )}
        </div>
    );
}

export default CarouselItem;
