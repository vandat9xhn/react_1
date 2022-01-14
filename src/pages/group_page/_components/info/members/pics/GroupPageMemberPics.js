import React from 'react';
import PropTypes from 'prop-types';
//
import ProfileLayoutOverlapFriends from '../../../../../../component/profile_layout/overlap_friends/_main/ProfileLayoutOverlapFriends';
//
import './GroupPageMemberPics.scss';

//
GroupPageMemberPics.propTypes = {};

//
function GroupPageMemberPics({ group_id, member_arr, member_count }) {
    //
    return (
        <div className="GroupPageMemberPics">
            <ProfileLayoutOverlapFriends
                link_to={`/group/${group_id}/members`}
                friend_arr={member_arr}
                has_more_friend={member_arr < member_count}
            />
        </div>
    );
}

export default GroupPageMemberPics;
