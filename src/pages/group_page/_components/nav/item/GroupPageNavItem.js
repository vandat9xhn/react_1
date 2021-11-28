import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './GroupPageNavItem.scss';

//
GroupPageNavItem.propTypes = {};

//
function GroupPageNavItem({
    title,
    link_to,
    
    color_active,
    border_active,
}) {
    //
    return (
        <NavLink
            className="GroupPageNavItem pos-rel display-flex-center h-100per padding-x-12px padding-bottom-3px brs-6px color-inherit hv-bg-fb"
            activeClassName="GroupPageNavItem-active"
            to={link_to}
            activeStyle={{ color: color_active }}
        >
            <div>{title}</div>

            <div
                className="GroupPageNavItem_bottom display-none pos-abs bottom-0 left-0 w-100per brs-20px"
                style={{ backgroundColor: border_active }}
            ></div>
        </NavLink>
    );
}

export default GroupPageNavItem;
