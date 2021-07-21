import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    handle_API_AddFriend_D,
    handle_API_Friend_C,
} from '../../../../../_handle_api/add_friend/AddFriendHandleAPI';
//
import AddFriendAdd from '../../../../../component/add_friend_add/_main/AddFriendAdd';
import AddFriendBtn from '../../../components/btn/AddFriendBtn';
//
import './AddFriendRequestedItem.scss';

//
AddFriendRequestedItem.propTypes = {
    status_requested: PropTypes.string,
    handleSendRequest: PropTypes.func,
};

//
function AddFriendRequestedItem({ id, picture, first_name, last_name }) {
    //
    const [state_obj, setStateObj] = useState({
        response_requested: '',
        accepting: false,
        canceling: false,
    });

    const { response_requested, accepting, canceling } = state_obj;

    //
    async function handleAccept() {
        setStateObj({
            ...state_obj,
            accepting: true,
        });

        await handle_API_Friend_C(id);

        setStateObj({
            ...state_obj,
            accepting: false,
            response_requested: 'Accepted',
        });
    }

    //
    async function handleCancel() {
        setStateObj({
            ...state_obj,
            canceling: true,
        });

        await handle_API_AddFriend_D(id);

        setStateObj({
            ...state_obj,
            canceling: false,
            response_requested: 'Not accepted',
        });
    }

    //
    return (
        <div className="add-friend-item-contain">
            <AddFriendAdd
                id={id}
                pic={picture}
                name={first_name + ' ' + last_name}
            >
                <div>
                    {!response_requested ? (
                        <div>
                            <AddFriendBtn
                                requesting={accepting}
                                title_request="Accept"
                                //
                                removing={canceling}
                                title_remove="Cancel"
                                //
                                handleRequesting={handleAccept}
                                handleRemoving={handleCancel}
                            />
                        </div>
                    ) : (
                        <div className="text-align-center opacity-05 label-field">
                            {response_requested}
                        </div>
                    )}
                </div>
            </AddFriendAdd>
        </div>
    );
}

export default AddFriendRequestedItem;
