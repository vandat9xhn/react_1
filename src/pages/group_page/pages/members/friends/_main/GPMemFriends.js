import React from 'react';
import PropTypes from 'prop-types';
//
import GPMemPartList from '../../_components/part_list/_main/GPMemPartList';

//
GPMemFriends.propTypes = {};

//
function GPMemFriends({ group_id, friend_arr, friend_count }) {
    //
    return (
        <div>
            <GPMemPartList
                group_id={group_id}
                //
                title={'Friends'}
                info={''}
                has_learn_more={false}
                link_learn_more={''}
                //
                user_page_arr={friend_arr}
                user_page_count={friend_count}
                link_all={`/group/members/friends`}
            />
        </div>
    );
}

export default GPMemFriends;
