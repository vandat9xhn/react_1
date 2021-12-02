import React from 'react';
import PropTypes from 'prop-types';
//
import GPMemPartList from '../../_components/part_list/_main/GPMemPartList';

//
GPMemAdmins.propTypes = {};

//
function GPMemAdmins({ group_id, admin_arr, admin_count }) {
    //
    return (
        <div>
            <GPMemPartList
                group_id={group_id}
                //
                title={'Admins & moderators'}
                info={''}
                has_learn_more={false}
                link_learn_more={''}
                //
                user_page_arr={admin_arr}
                user_page_count={admin_count}
                link_all={`/group/members/admins`}
            />
        </div>
    );
}

export default GPMemAdmins;
