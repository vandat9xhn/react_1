import React from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../_some_function/ParseLocationSearch';
// 
import ProfileLayoutNavMoreItem from '../../../../../component/profile_layout/nav/more/item/ProfileLayoutNavMoreItem';

//
ProfileNavMoreItem.propTypes = {};

//
function ProfileNavMoreItem({ user_id, title, sk }) {
    //
    function isActive() {
        return ParseLocationSearch()['sk'] == sk;
    }

    //
    return (
        <ProfileLayoutNavMoreItem
            title={title}
            link_to={`/profile/${user_id}?sk=${sk}`}
            isActive={isActive}
        />
    );
}

export default ProfileNavMoreItem;
