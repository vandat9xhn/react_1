import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutName from '../../../../component/profile_layout/name/ProfileLayoutName';
//
import './ProfileInfoName.scss';

//
ProfileInfoName.propTypes = {};

//
function ProfileInfoName({ name, nick_name }) {
    //
    return <ProfileLayoutName name={name} nick_name={nick_name} />;
}

export default ProfileInfoName;
