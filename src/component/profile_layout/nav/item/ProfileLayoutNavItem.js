import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './ProfileLayoutNavItem.scss';

//
ProfileLayoutNavItem.propTypes = {
    title: PropTypes.string,
    link_to: PropTypes.string,

    color_active: PropTypes.string,
    border_active: PropTypes.string,
};

ProfileLayoutNavItem.defaultProps = {
    color_active: 'var(--blue)',
    border_active: 'var(--blue)',
};

//
function ProfileLayoutNavItem({
    title,
    link_to,

    color_active,
    border_active,

    IsActive,
}) {
    //
    return (
        <NavLink
            className="ProfileLayoutNavItem pos-rel display-flex-center h-100per padding-x-12px padding-bottom-3px brs-6px color-inherit hv-bg-fb"
            activeClassName="ProfileLayoutNavItem-active"
            activeStyle={{ color: color_active }}
            isActive={IsActive}
            // 
            to={link_to}
            replace
        >
            <div>{title}</div>

            <div
                className="ProfileLayoutNavItem_bottom display-none pos-abs bottom-0 left-0 w-100per h-3px brs-20px"
                style={{ backgroundColor: border_active }}
            ></div>
        </NavLink>
    );
}

export default ProfileLayoutNavItem;
