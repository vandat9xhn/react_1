import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    handle_API_AddFriend_C,
    handle_API_AddFriend_D,
    handle_API_FriendRemove,
} from '../../../../../_handle_api/add_friend/AddFriendHandleAPI';
//
import AddFriendAdd from '../../../../../component/add_friend_add/_main/AddFriendAdd';
import AddFriendBtn from '../../../components/btn/AddFriendBtn';

//
AddFriendSentItem.propTypes = {
    handleRemoveFriend: PropTypes.func,
};

AddFriendSentItem.defaultProps = {};

//
function AddFriendSentItem({
    ix,

    id,
    picture,
    first_name,
    last_name,

    handleRemoveFriend,
}) {
    //
    const [state_obj, setStateObj] = useState({
        has_sent: true,
        requesting: false,
        removing: false,
    });

    const { has_sent, requesting, removing } = state_obj;

    //
    async function handleAddOrCancelFriend() {
        setStateObj({
            ...state_obj,
            requesting: true,
        });

        !has_sent
            ? await handle_API_AddFriend_C(id)
            : await handle_API_AddFriend_D(id);

        setStateObj({
            ...state_obj,
            requesting: false,
            has_sent: !has_sent,
        });
    }

    //
    async function handleRemove() {
        setStateObj({
            ...state_obj,
            removing: true,
        });

        await handle_API_FriendRemove(id);
        
        handleRemoveFriend(ix);
    }

    //
    return (
        <div className="add-friend-item-contain">
            <AddFriendAdd
                id={id}
                pic={picture}
                name={first_name + ' ' + last_name}
            >
                <div className="AddFriendNormal_bottom">
                    <AddFriendBtn
                        requesting={requesting}
                        title_request={has_sent ? 'Cancel' : 'Add'}
                        //
                        removing={removing}
                        //
                        handleRequesting={handleAddOrCancelFriend}
                        handleRemoving={handleRemove}
                    />
                </div>
            </AddFriendAdd>
        </div>
    );
}

export default AddFriendSentItem;
