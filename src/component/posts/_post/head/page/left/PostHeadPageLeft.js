import React from 'react';
import PropTypes from 'prop-types';
//
import PostHeadLayoutPictureCircle from '../../_components/picture_circle/PostHeadLayoutPictureCircle';
import ActionPreviewPage from '../../../../../action_preview_page/_main/ActionPreviewPage';

//
PostHeadPageLeft.propTypes = {};

//
function PostHeadPageLeft({ page_obj }) {
    //
    return (
        <ActionPreviewPage
            page_id={page_obj.id}
            title_action={
                <PostHeadLayoutPictureCircle
                    link_to={`/page/${page_obj.id}`}
                    picture={page_obj.picture}
                    has_new_story={page_obj.has_new_story}
                    has_seen_story={page_obj.has_seen_story}
                />
            }
        />
    );
}

export default PostHeadPageLeft;
