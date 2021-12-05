import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// 
import ProfileLayoutUserSticky from '../../../../../component/profile_layout/user_sticky/ProfileLayoutUserSticky';

//
GPNavGroup.propTypes = {};

//
function GPNavGroup({ link_to, picture, name }) {
    //
    return (
        <ProfileLayoutUserSticky
            link_to={link_to}
            picture={picture}
            name={name}
        />
    );
}

export default GPNavGroup;
