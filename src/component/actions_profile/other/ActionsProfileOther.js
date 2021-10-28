import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_ProfileActions_L } from '../../../_handle_api/profile/action';
//
import BtnProfileOther from '../../button/profile_actions/other/BtnProfileOther';

//
ActionsProfileOther.propTypes = {};

//
function ActionsProfileOther({
    user_id,
    class_action_contain,
    is_at_body,
    
    handleAction,
}) {
    //
    async function getData_ProfileActionsOther() {
        const data = await handle_API_ProfileActions_L({
            user_id: user_id,
            type: 'other',
        });

        return data;
    }

    //
    return (
        <BtnProfileOther
            is_at_body={is_at_body}
            class_action_contain={class_action_contain}
            handle_API_L={getData_ProfileActionsOther}
            handleAction={handleAction}
        />
    );
}

export default ActionsProfileOther;
