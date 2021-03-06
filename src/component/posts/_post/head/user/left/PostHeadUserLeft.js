import React from 'react';
import PropTypes from 'prop-types';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';
import PostHeadLayoutPictureCircle from '../../_components/picture_circle/PostHeadLayoutPictureCircle';

//
PostHeadUserLeft.propTypes = {};

//
function PostHeadUserLeft({ user }) {
    //
    return (
        <ActionPreviewProfile
            user_id={user.id}
            title_action={
                <PostHeadLayoutPictureCircle
                    link_to={`/profile/${user.id}`}
                    picture={user.picture}
                    has_new_story={user.has_new_story}
                    has_seen_story={user.has_seen_story}
                />
            }
        />
    );
}

export default PostHeadUserLeft;
