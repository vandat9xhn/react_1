import React from 'react';
import PropTypes from 'prop-types';
//
import ProfilePhotoList from '../../_component/list/_main/ProfilePhotoList';
//

//
ProfilePhotoAll.propTypes = {};

//
function ProfilePhotoAll(props) {
    return (
        <div className="ProfilePhotoAll">
            <ProfilePhotoList />
        </div>
    );
}

export default ProfilePhotoAll;
