import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import AddFriendAdd from '../../../../../component/add_friend_add/_main/AddFriendAdd';
import AddFriendBtn from '../_common/btn/AddFriendBtn';
//
import './AddFriendRequested.scss';

//
AddFriendRequested.propTypes = {
    status_requested: PropTypes.string,
    handleSendRequest: PropTypes.func,
};

//
function AddFriendRequested(props) {
    //
    const {
        id,
        ix,
        pic,
        name,
        status_requested,

        handleRemoving,
        handleRequesting,
    } = props;

    const title_request =
        status_requested == 'friend'
            ? 'Friend'
            : status_requested == 'not_accept'
            ? 'Not accept'
            : 'Reply';

    //
    const [requested_obj, setRequestedObj] = useState({
        open_reply: false,
        removing: false,
        requesting: false,
    });

    const { open_reply, removing, requesting } = requested_obj;

    /* ------------------- COMMON ---------------------- */

    //
    function beforeRequesting() {
        setRequestedObj((requested_obj) => ({
            ...requested_obj,
            requesting: true,
            open_reply: false,
        }));
    }

    //
    function afterRequesting() {
        setRequestedObj((requested_obj) => ({
            ...requested_obj,
            requesting: false,
        }));
    }

    //
    function onRequesting(new_status_request) {
        beforeRequesting();
        handleRequesting(ix, new_status_request).then(() => {
            afterRequesting();
        });
    }

    /* -------------------- ACTIONS --------------------- */

    //
    function onOpenRequesting() {
        !status_requested &&
            setRequestedObj({
                ...requested_obj,
                open_reply: !open_reply,
            });
    }

    //
    function handleAccept() {
        onRequesting('friend');
    }

    //
    function handleCancel() {
        onRequesting('not_accept');
    }

    //
    function onRemoving() {
        setRequestedObj((requested_obj) => ({
            ...requested_obj,
            removing: true,
        }));

        handleRemoving(ix);
        // .then(() => {
        //     setRequestedObj(requested_obj => ({
        //         ...requested_obj,
        //         removing: false,
        //     }))
        // });
    }

    //
    return (
        <AddFriendAdd id={id} pic={pic} name={name}>
            <div>
                <div className={!status_requested ? '' : 'display-none'}>
                    <AddFriendBtn
                        requesting={requesting}
                        title_request={title_request}
                        btn_class_requesting=""
                        //
                        removing={removing}
                        btn_class_removing=""
                        //
                        handleRequesting={onOpenRequesting}
                        handleRemoving={onRemoving}
                    />
                </div>

                <div
                    className={`text-align-center opacity-5 label-field ${
                        !status_requested ? 'display-none' : ''
                    }`}
                >
                    {title_request}
                </div>

                <div
                    className={`${
                        open_reply
                            ? 'AddFriendRequested_reply box-shadow-1 brs-5px'
                            : 'display-none'
                    }`}
                >
                    <div className="AddFriendRequested_reply_row display-flex">
                        <div
                            className="AddFriendRequested_reply_item"
                            onClick={handleAccept}
                        >
                            Accept
                        </div>

                        <div
                            className="AddFriendRequested_reply_item"
                            onClick={handleCancel}
                        >
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
        </AddFriendAdd>
    );
}

export default AddFriendRequested;
