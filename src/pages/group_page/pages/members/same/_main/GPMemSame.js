import React from 'react';
import PropTypes from 'prop-types';
//
import GPMemPartList from '../../_components/part_list/_main/GPMemPartList';

//
GPMemSame.propTypes = {};

//
function GPMemSame({ group_id, same_arr, same_count }) {
    //
    return (
        <div>
            <GPMemPartList
                group_id={group_id}
                //
                title={'Members with things in common'}
                show_count_on_title={false}
                info={''}
                has_learn_more={false}
                link_learn_more={''}
                //
                user_page_arr={same_arr}
                user_page_count={same_count}
                link_all={`/group/members/sames`}
            />
        </div>
    );
}

export default GPMemSame;
