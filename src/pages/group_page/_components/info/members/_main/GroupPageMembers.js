import React from 'react';
import PropTypes from 'prop-types';
//
import GroupPageMemberCount from '../count/GroupPageMemberCount';
import GroupPageMemberPics from '../pics/GroupPageMemberPics';

//
GroupPageMembers.propTypes = {};

//
function GroupPageMembers({ group_id, privacy, member_arr, member_count }) {
    //
    return (
        <div className="GroupPageMembers">
            <div className="margin-top-8px margin-bottom-12px">
                <GroupPageMemberCount
                    privacy={privacy}
                    member_count={member_count}
                />
            </div>

            <div>
                <GroupPageMemberPics
                    group_id={group_id}
                    member_arr={member_arr}
                    member_count={member_count}
                />
            </div>
        </div>
    );
}

export default GroupPageMembers;
