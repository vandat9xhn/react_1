import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../_some_function/UnitNumber';
//
import GroupPageAboutSeeAll from '../../../../_components/about_see_all/GroupPageAboutSeeAll';
import GPAbMembersPics from '../pics/GPAbMembersPics';

//
GPAbMembers.propTypes = {};

//
function GPAbMembers({
    group_id,
    member_count,

    friend_arr,
    friend_name_str,
    
    admin_arr,
    admin_name_str,
}) {
    //
    return (
        <div className="GPAbMembers gr-page-about-part">
            <h2 className="gr-page-about-title">
                Members · {UnitNumber(member_count)}
            </h2>

            <hr className="gr-page-hr" />

            <div>
                <GPAbMembersPics
                    member_arr={friend_arr}
                    member_name_str={friend_name_str}
                />
            </div>

            <div>
                <GPAbMembersPics
                    member_arr={admin_arr}
                    member_name_str={admin_name_str}
                />
            </div>

            <div>
                <GroupPageAboutSeeAll link_to={`/group/${group_id}/members`} />
            </div>
        </div>
    );
}

export default GPAbMembers;
