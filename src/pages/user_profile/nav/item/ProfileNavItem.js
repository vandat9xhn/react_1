import React from 'react';
import PropTypes from 'prop-types';
//
import { NavLink } from 'react-router-dom';
//
import './ProfileNavItem.scss';
import ProfileLayoutNavItem from '../../../../component/profile_layout/nav/item/ProfileLayoutNavItem';

//
ProfileNavItem.propTypes = {};

//
function ProfileNavItem({ sk, title }) {
    //
    return (
        // <NavLink
        //     to={location.pathname + `${sk ? '?sk=' : ''}${sk}`}
        //     className={`ProfileNavItem display-flex-center pos-rel h-100per padding-x-15px brs-6px font-600 hv-bg-s-through ${
        //         (location.search.startsWith(`?sk=${sk.split('_')[0]}`) &&
        //             sk != '') ||
        //         (location.search == '' && sk == '')
        //             ? 'ProfileNavItem-active nav-active'
        //             : 'normal-text'
        //     }`}
        //     replace
        // >
        //     <div className="nav-text">{title}</div>

        //     <div className="ProfileNavItem_bottom pos-abs top-100per left-0 w-100per h-3px bg-blue display-none"></div>
        // </NavLink>
        <ProfileLayoutNavItem
            title={title}
            link_to={location.pathname + `${sk ? '?sk=' : ''}${sk}`}
            IsActive={(match, location) => {
                return (
                    (location.search.startsWith(`?sk=${sk.split('_')[0]}`) &&
                        sk != '') ||
                    (location.search == '' && sk == '')
                );
            }}
        />
    );
}

export default ProfileNavItem;
