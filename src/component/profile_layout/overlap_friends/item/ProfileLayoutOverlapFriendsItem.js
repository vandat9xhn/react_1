import React from 'react';
import PropTypes from 'prop-types';
// 
import ActionPreviewProfile from '../../../action_preview_profile/_main/ActionPreviewProfile';
import OverlapPicsItem from '../../../overlap_pics/item/OverlapPicsItem';
// 
import './ProfileLayoutOverlapFriendsItem.scss';

//
ProfileLayoutOverlapFriendsItem.propTypes = {};

//
function ProfileLayoutOverlapFriendsItem({ item }) {
    //
    return (
        <div className="ProfileLayoutOverlapFriendsItem wh-100">
            <ActionPreviewProfile
                user_id={item.id}
                title_action={<OverlapPicsItem item={item} />}
            />
        </div>
    );
}

export default ProfileLayoutOverlapFriendsItem;
