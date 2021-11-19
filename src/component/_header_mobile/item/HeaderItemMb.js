import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//
import BadgeDiv from '../../some_div/badge_div/BadgeDiv';
// 
import './HeaderItemMb.scss';

//
HeaderItemMb.propTypes = {};

//
function HeaderItemMb({ Icon, link_to, count_new }) {
    //
    return (
        <NavLink
            className="HeaderItemMb pos-rel display-flex-center h-100per padding-bottom-2px color-inherit"
            activeClassName="HeaderItemMb-active nav-active"
            to={link_to}
        >
            {Icon}

            <div className="HeaderItemMb_new pos-abs left-50per top-50per">
                <BadgeDiv num={count_new} max_num={99} />
            </div>

            <div className="HeaderItemMb_bottom pos-abs bottom-0 left-0 w-100per bg-blue padding-1px display-none"></div>
        </NavLink>
    );
}

export default HeaderItemMb;
