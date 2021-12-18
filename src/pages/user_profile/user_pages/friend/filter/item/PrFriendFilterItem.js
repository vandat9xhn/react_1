import React from 'react';
import PropTypes from 'prop-types';
// 
import ProfileLayoutNavItem from '../../../../../../component/profile_layout/nav/item/ProfileLayoutNavItem';

//
PrFriendFilterItem.propTypes = {};

//
function PrFriendFilterItem({ user_id, title, type, is_active }) {
    //
    return (
        <div className="PrFriendFilterItem h-52px text-nowrap font-600 text-secondary">
            <ProfileLayoutNavItem
                title={title}
                link_to={`/profile/${user_id}?sk=friend${
                    type ? `&type=${type}` : ''
                }`}
                IsActive={() => is_active}
            />
        </div>
    );
}

export default PrFriendFilterItem;
