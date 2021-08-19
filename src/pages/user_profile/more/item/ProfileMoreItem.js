import React from 'react';
import PropTypes from 'prop-types';
//
import { NavLink } from 'react-router-dom';
//
import './ProfileMoreItem.scss';

//
ProfileMoreItem.propTypes = {};

//
function ProfileMoreItem({ sk, title }) {
    //
    return (
        <NavLink
            to={location.pathname + `${sk ? '?sk=' : ''}${sk}`}
            className={
                (location.search.startsWith(`?sk=${sk.split('_')[0]}`) &&
                    sk != '') ||
                (location.search == '' && sk == '')
                    ? 'nav-active'
                    : 'normal-text'
            }
            replace
        >
            <div className="ProfileMoreItem padding-8px hv-bg-blur cursor-pointer label-field text-secondary nav-text nav-bottom">
                {title}
            </div>
        </NavLink>
    );
}

export default ProfileMoreItem;
