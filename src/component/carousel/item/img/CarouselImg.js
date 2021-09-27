import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import VidPicObserve from '../../../vid_pic/observe/VidPicObserve';

//
CarouselImg.propTypes = {};

//
function CarouselImg({ vid_pic, link_to }) {
    //
    return link_to ? (
        <Link to={link_to}>
            <VidPicObserve
                vid_pic={vid_pic}
                type="img"
                img_props={{ className: 'wh-100 object-fit-cover' }}
            />
        </Link>
    ) : (
        <VidPicObserve
            vid_pic={vid_pic}
            type="img"
            img_props={{ className: 'wh-100 object-fit-cover' }}
        />
    );
}

export default CarouselImg;
