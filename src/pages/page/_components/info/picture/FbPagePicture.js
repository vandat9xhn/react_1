import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutPicture from '../../../../../component/profile_layout/picture/ProfileLayoutPicture';

//
FbPagePicture.propTypes = {};

//
function FbPagePicture({
    picture,
    has_new_story,
    has_seen_story,

    handleActionPicture,
}) {
    //
    return (
        <ProfileLayoutPicture
            link_to={has_new_story ? '' : '/posts/1'}
            picture={picture}
            has_new_story={has_new_story}
            has_seen_story={has_seen_story}
            handleAction={handleActionPicture}
        />
    );
}

export default FbPagePicture;
