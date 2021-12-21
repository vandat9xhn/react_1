import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutPicture from '../../../../../component/profile_layout/picture/ProfileLayoutPicture';
//
import './ProfileInfoPicture.scss';

//
ProfileInfoPicture.propTypes = {};

//
function ProfileInfoPicture({
    picture,
    has_new_story,
    has_seen_story,

    openPicture,
}) {
    //
    return (
        <ProfileLayoutPicture
            link_to={has_new_story ? '' : '/posts/1'}
            picture={picture}
            has_new_story={has_new_story}
            has_seen_story={has_seen_story}
            openPicture={openPicture}
        />
    );
}

export default ProfileInfoPicture;
