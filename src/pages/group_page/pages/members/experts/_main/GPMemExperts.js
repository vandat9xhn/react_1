import React from 'react';
import PropTypes from 'prop-types';
//
import GPMemPartList from '../../_components/part_list/_main/GPMemPartList';

//
GPMemExperts.propTypes = {};

//
function GPMemExperts({ group_id, expert_arr, expert_count }) {
    //
    return (
        <div>
            <GPMemPartList
                group_id={group_id}
                //
                title={'Group experts'}
                info={
                    "Group experts are chosen by admins and know a lot about the group's topic. They get a badge next to their name and help answer questions."
                }
                has_learn_more={true}
                link_learn_more={'/help/group-experts'}
                //
                user_page_arr={expert_arr}
                user_page_count={expert_count}
                link_all={`/group/members/experts`}
            />
        </div>
    );
}

export default GPMemExperts;
