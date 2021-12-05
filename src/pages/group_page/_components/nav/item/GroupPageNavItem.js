import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutNavItem from '../../../../../component/profile_layout/nav/item/ProfileLayoutNavItem';
//
import './GroupPageNavItem.scss';

//
GroupPageNavItem.propTypes = {};

//
function GroupPageNavItem({ title, link_to, color_active, border_active }) {
    //
    return (
        <ProfileLayoutNavItem
            title={title}
            link_to={link_to}
            color_active={color_active}
            border_active={border_active}
        />
    );
}

export default GroupPageNavItem;
