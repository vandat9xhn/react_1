import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';
import PostHeadLayoutPictureCircle from '../../_components/picture_circle/PostHeadLayoutPictureCircle';

//
PostHeadPageLeft.propTypes = {};

//
function PostHeadPageLeft({ page_obj }) {
    //
    return (
        <ActionPreviewProfile
            user_id={page_obj.id}
            title_action={
                <PostHeadLayoutPictureCircle
                    link_to={`/page/${page_obj.id}`}
                    picture={page_obj.picture}
                />
            }
        />
    );
}

export default PostHeadPageLeft;
