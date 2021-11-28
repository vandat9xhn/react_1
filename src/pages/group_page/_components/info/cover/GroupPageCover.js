import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutCover from '../../../../../component/profile_layout/cover/_main/ProfileLayoutCover';

//
GroupPageCover.propTypes = {};

//
function GroupPageCover({ picture, openCoverPicture }) {
    //
    return (
        <ProfileLayoutCover
            cover={picture}
            link_to={`/post/1`}
            openCoverPicture={openCoverPicture}
        />
    );
}

export default GroupPageCover;
