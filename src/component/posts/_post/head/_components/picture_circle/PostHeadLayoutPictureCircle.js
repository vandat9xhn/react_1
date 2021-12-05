import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// 
import './PostHeadLayoutPictureCircle.scss';

//
PostHeadLayoutPictureCircle.propTypes = {};

//
function PostHeadLayoutPictureCircle({ link_to, picture }) {
    //
    return (
        <Link
            className="PostHeadLayoutPictureCircle flex-shrink-0"
            to={link_to}
        >
            <div className="brs-50 hv-after-shadow-05">
                <img
                    className="PostHeadLayoutPictureCircle_img brs-50 object-fit-cover"
                    src={picture}
                    alt=""
                    width="40"
                    height="40"
                />
            </div>
        </Link>
    );
}

export default PostHeadLayoutPictureCircle;
