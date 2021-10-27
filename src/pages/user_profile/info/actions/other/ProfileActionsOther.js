import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_ProfileActions_L } from '../../../../../_handle_api/profile/action';
//
import BtnProfileOther from '../../../../../component/button/profile_actions/other/BtnProfileOther';

//
ProfileActionsOther.propTypes = {};

//
function ProfileActionsOther({ user_id, handleAction }) {
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
            handle_API_L={getData_ProfileActionsOther}
            handleAction={handleAction}
        />
    );
}

export default ProfileActionsOther;
