import React from 'react';
import PropTypes from 'prop-types';
//
import BtnProfileFriend from '../../../button/profile_actions/friend/BtnProfileFriend';
//
import { handle_API_ProfileActions_L } from '../../../../_handle_api/profile/action';

//
ActionsProfileFriend.propTypes = {};

//
function ActionsProfileFriend({ user_id, handleAction }) {
    //
    async function getData_ActionFriend() {
        const data = await handle_API_ProfileActions_L({
            user_id: user_id,
            type: 'friend',
        });

        return data;
    }

    //
    return (
        <BtnProfileFriend
            handle_API_L={getData_ActionFriend}
            handleAction={handleAction}
        />
    );
}

export default ActionsProfileFriend;
