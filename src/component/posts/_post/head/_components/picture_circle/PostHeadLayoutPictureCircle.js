import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './PostHeadLayoutPictureCircle.scss';
import PicNameImg from '../../../../../picture_name/_components/img/_main/PicNameImg';

//
PostHeadLayoutPictureCircle.propTypes = {};

//
function PostHeadLayoutPictureCircle({
    link_to,
    picture,
    has_new_story,
    has_seen_story,
}) {
    //
    return (
        <Link
            className="PostHeadLayoutPictureCircle flex-shrink-0"
            to={link_to}
        >
            <PicNameImg
                picture={picture}
                use_time_online={false}
                // time_online={time_online}
                use_new_story={true}
                has_new_story={has_new_story}
                has_seen_story={has_seen_story}
            />
        </Link>
    );
}

export default PostHeadLayoutPictureCircle;
