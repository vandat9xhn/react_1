import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutNavItem from '../../../../component/profile_layout/nav/item/ProfileLayoutNavItem';
//
import './ProfileNavItem.scss';

//
ProfileNavItem.propTypes = {};

//
function ProfileNavItem({ sk, title }) {
    //
    return (
        <ProfileLayoutNavItem
            title={title}
            link_to={location.pathname + `${sk ? '?sk=' : ''}${sk}`}
            IsActive={(match, location) => {
                return (
                    (location.search.startsWith(`?sk=${sk.split('_')[0]}`) &&
                        sk != '') ||
                    (location.search == '' && sk == '') ||
                    (sk == 'photos_all' &&
                        location.search.startsWith('?sk=album_photo'))
                );
            }}
        />
    );
}

export default ProfileNavItem;
