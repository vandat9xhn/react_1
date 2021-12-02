import React from 'react';
import PropTypes from 'prop-types';
//
import GPMemPartList from '../../_components/part_list/_main/GPMemPartList';

//
GPMemNear.propTypes = {};

//
function GPMemNear({ group_id, near_arr, near_count }) {
    //
    return (
        <div>
            <GPMemPartList
                group_id={group_id}
                //
                title={'Members near you'}
                info={''}
                has_learn_more={false}
                link_learn_more={''}
                //
                user_page_arr={near_arr}
                user_page_count={near_count}
                link_all={`/group/members/near`}
            />
        </div>
    );
}

export default GPMemNear;
