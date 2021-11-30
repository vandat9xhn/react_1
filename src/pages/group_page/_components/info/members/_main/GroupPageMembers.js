import React from 'react';
import PropTypes from 'prop-types';
//
import GroupPageMemberCount from '../count/GroupPageMemberCount';
import GroupPageMemberPics from '../pics/GroupPageMemberPics';

//
GroupPageMembers.propTypes = {};

//
function GroupPageMembers({ group_id, privacy, member_arr, count_member }) {
    //
    return (
        <div className="GroupPageMembers">
            <div className="margin-top-8px margin-bottom-12px">
                <GroupPageMemberCount
                    privacy={privacy}
                    count_member={count_member}
                />
            </div>

            <div>
                <GroupPageMemberPics
                    group_id={group_id}
                    member_arr={member_arr}
                    count_member={count_member}
                />
            </div>
        </div>
    );
}

export default GroupPageMembers;
