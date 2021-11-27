import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_GroupManage_L } from '../../../../../../../../_handle_api/fb_group/manage';
//
import GroupLeftGroupList from '../../group_list/_main/GroupLeftGroupList';
//
// import './GroupLeftManage.scss';

//
GroupLeftManage.propTypes = {};

//
function GroupLeftManage({ ref_scroll }) {
    //
    function handle_API_L(c_count) {
        return handle_API_GroupManage_L({
            c_count: c_count,
        });
    }

    //
    return (
        <GroupLeftGroupList
            ref_scroll={ref_scroll}
            title="Group you manage"
            handle_API_L={handle_API_L}
        />
    );
}

export default GroupLeftManage;
