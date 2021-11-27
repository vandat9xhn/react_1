import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_GroupJoined_L } from '../../../../../../../../_handle_api/fb_group/joined';
//
import GroupLeftGroupList from '../../group_list/_main/GroupLeftGroupList';
//
import './GroupLeftJoined.scss';

//
GroupLeftJoined.propTypes = {};

//
function GroupLeftJoined({ ref_scroll }) {
    //
    function handle_API_L(c_count) {
        return handle_API_GroupJoined_L({
            c_count: c_count,
        });
    }

    //
    return (
        <GroupLeftGroupList
            ref_scroll={ref_scroll}
            title="Group you've joined"
            handle_API_L={handle_API_L}
        />
    );
}

export default GroupLeftJoined;
