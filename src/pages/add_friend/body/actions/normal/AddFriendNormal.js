import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import AddFriendAdd from '../../../../../component/add_friend_add/_main/AddFriendAdd';
import AddFriendBtn from '../_common/btn/AddFriendBtn';

//
AddFriendNormal.propTypes = {
    status_requested: PropTypes.string,
    handleRequesting: PropTypes.func,
};

AddFriendNormal.defaultProps = {
    status_requested: '',
};

//
function AddFriendNormal({
    id,
    ix,
    pic,
    name,
    status_requested,

    handleRemoving,
    handleRequesting,
}) {
    //
    const title_request = status_requested == 'cancel' ? 'Cancel' : 'Send';

    //
    const [removing, setRemoving] = useState(false);
    const [requesting, setRequesting] = useState(false);

    //
    function onRequesting() {
        setRequesting(true);
        handleRequesting(ix, status_requested == 'cancel' ? '' : 'cancel').then(
            () => {
                setRequesting(false);
            }
        );
    }

    //
    function onRemoving() {
        setRemoving(true);
        handleRemoving(ix);
    }

    //
    return (
        <AddFriendAdd id={id} pic={pic} name={name}>
            <div className="AddFriendNormal_bottom">
                <AddFriendBtn
                    requesting={requesting}
                    title_request={title_request}
                    btn_class_requesting=""
                    //
                    removing={removing}
                    btn_class_removing=""
                    //
                    handleRequesting={onRequesting}
                    handleRemoving={onRemoving}
                />
            </div>
        </AddFriendAdd>
    );
}

export default AddFriendNormal;
