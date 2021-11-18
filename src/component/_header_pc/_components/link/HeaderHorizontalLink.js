import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//
import './HeaderHorizontalLink.scss';

//
HeaderHorizontalLink.propTypes = {};

//
function HeaderHorizontalLink({ Icon, title, link_to }) {
    //
    return (
        <NavLink
            className="HeaderHorizontalLink display-flex align-items-center padding-8px brs-6px color-inherit font-600 hv-bg-s-through"
            activeClassName="HeaderHorizontalLink-active bg-fb-active"
            to={link_to}
        >
            <div className="btn-icon-36px">{Icon}</div>

            <div className="margin-left-12px">{title}</div>
        </NavLink>
    );
}

export default HeaderHorizontalLink;
