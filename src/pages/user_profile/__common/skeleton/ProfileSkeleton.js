import React from 'react';
import PropTypes from 'prop-types';
//
import './ProfileSkeleton.scss';

//
ProfileSkeleton.propTypes = {};

//
function ProfileSkeleton(props) {
    return (
        <div className="ProfileSkeleton margin-auto h-100vh bg-primary"></div>
    );
}

export default ProfileSkeleton;
