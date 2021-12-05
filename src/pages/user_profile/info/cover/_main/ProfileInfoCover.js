import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutCover from '../../../../../component/profile_layout/cover/_main/ProfileLayoutCover';
//
import './ProfileInfoCover.scss';

//
ProfileInfoCover.propTypes = {};

//
function ProfileInfoCover({ cover, openCoverPicture }) {
    //
    return (
        <ProfileLayoutCover
            cover={cover}
            link_to={'/posts/1'}
            openCoverPicture={openCoverPicture}
        />
    );
}

export default ProfileInfoCover;
