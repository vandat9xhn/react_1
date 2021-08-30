import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
CarouselImg.propTypes = {};

//
function CarouselImg({ vid_pic, link_to }) {
    //
    return link_to ? (
        <Link to={link_to}>
            <img className="wh-100 object-fit-cover" src={vid_pic} alt="" />
        </Link>
    ) : (
        <img className="wh-100 object-fit-cover" src={vid_pic} alt="" />
    );
}

export default CarouselImg;
