import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutNavItem from '../../../../../component/profile_layout/nav/item/ProfileLayoutNavItem';
//
import './FbPageNavItem.scss';

//
FbPageNavItem.propTypes = {};

//
function FbPageNavItem({ link_to, title }) {
    //
    return <ProfileLayoutNavItem title={title} link_to={link_to} />;
}

export default FbPageNavItem;
