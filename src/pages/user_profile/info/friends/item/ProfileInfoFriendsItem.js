import React from 'react';
import PropTypes from 'prop-types';
//
import ActionPreviewProfile from '../../../../../component/action_preview_profile/_main/ActionPreviewProfile';
import OverlapPicsItem from '../../../../../component/overlap_pics/item/OverlapPicsItem';
// 
import './ProfileInfoFriendsItem.scss';

//
ProfileInfoFriendsItem.propTypes = {};

//
function ProfileInfoFriendsItem({ item }) {
    //
    return (
        <div className="ProfileInfoFriendsItem wh-100">
            <ActionPreviewProfile
                user_id={item.id}
                title_action={<OverlapPicsItem item={item} />}
            />
        </div>
    );
}

export default ProfileInfoFriendsItem;
