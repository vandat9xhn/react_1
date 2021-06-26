import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './HeaderHItem.scss';

//
HeaderHItem.propTypes = {};

//
function HeaderHItem({ item }) {
    const { title, link_to, Icon, x, y } = item;

    //
    return (
        <NavLink
            className="normal-text"
            activeClassName="nav-active"
            to={link_to}
        >
            <div className="HeaderHItem_title HeaderH_item header_item header_item_horizontal nav-bottom nav-text">
                {Icon ? <Icon x={x} y={y} size_icon="1.8rem" /> : title}
            </div>
        </NavLink>
    );
}

export default HeaderHItem;
