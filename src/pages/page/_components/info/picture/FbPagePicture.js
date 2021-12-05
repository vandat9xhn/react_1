import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutPicture from '../../../../../component/profile_layout/picture/ProfileLayoutPicture';

//
FbPagePicture.propTypes = {};

//
function FbPagePicture({ picture, has_new_story, openPicture }) {
    //
    return (
        <ProfileLayoutPicture
            link_to={'/posts/1'}
            picture={picture}
            has_new_story={has_new_story}
            openPicture={openPicture}
        />
    );
}

export default FbPagePicture;
