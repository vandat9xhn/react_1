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
            className="normal-text"
            activeClassName={
                (location.search.startsWith(`?sk=${sk.split('_')[0]}`) &&
                    sk != '') ||
                (location.search == '' && sk == '')
                    ? 'nav-active'
                    : ''
            }
            replace
        >
            <div className="ProfileMoreItem nav-text nav-bottom">{title}</div>
        </NavLink>
    );
}

export default ProfileMoreItem;
