import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_ProfileActions_L } from '../../../../../../../_handle_api/profile/action';
//
import ActionsMultiList from '../../../../../../../component/actions_multi_list/_main/ActionsMultiList';
//
import './FriendEditAction.scss';

//
FriendEditAction.propTypes = {};

//
function FriendEditAction({ friend_id, handleAction }) {
    //
    function handle_API_L() {
        return handle_API_ProfileActions_L({
            user_id: friend_id,
            type: 'friend',
        });
    }

    //
    return (
        <div className="FriendEditAction">
            <ActionsMultiList
                x_always="right"
                handle_API_L={handle_API_L}
                handleAction={handleAction}
            />
        </div>
    );
}

export default FriendEditAction;
