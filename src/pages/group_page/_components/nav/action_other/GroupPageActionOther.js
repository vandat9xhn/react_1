import React from 'react';
import PropTypes from 'prop-types';
//
import ActionsGroupOther from '../../../../../component/actions_group/other/ActionsGroupOther';

//
GroupPageActionOther.propTypes = {};

//
function GroupPageActionOther({ group_id, handleAction }) {
    //
    //
    return (
        <ActionsGroupOther group_id={group_id} handleAction={handleAction} />
    );
}

export default GroupPageActionOther;
