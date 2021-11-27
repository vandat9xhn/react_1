import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_GroupActions_L } from '../../../_handle_api/fb_group/action';
//
import BtnGroupOther from '../../button/group_actions/other/BtnGroupOther';

//
ActionsGroupOther.propTypes = {};

//
function ActionsGroupOther({
    group_id,
    class_action_contain,
    is_at_body,

    handleAction,
}) {
    //
    async function getData_GroupActionsOther() {
        const data = await handle_API_GroupActions_L({
            group_id: group_id,
            type: 'other',
        });

        return data;
    }

    //
    return (
        <BtnGroupOther
            is_at_body={is_at_body}
            class_action_contain={class_action_contain}
            //
            handle_API_L={getData_GroupActionsOther}
            handleAction={handleAction}
        />
    );
}

export default ActionsGroupOther;
