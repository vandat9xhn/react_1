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
                    ? 'ProfileMoreItem-active nav-active'
                    : 'normal-text'
            }
            replace
        >
            <div className="ProfileMoreItem_contain display-flex-center padding-x-15px cursor-pointer font-600 text-secondary nav-text">
                {title}
            </div>
        </NavLink>
    );
}

export default ProfileMoreItem;
