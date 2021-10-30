import React from 'react';
import PropTypes from 'prop-types';
//
import AddFriendMini from '../../_main/AddFriendMini';

//
AddFriendMiniRequest.propTypes = {};

//
function AddFriendMiniRequest({
    profile,
    accepted,

    confirmFriend,
    deleteFriend,
    showProfile,
}) {
    //
    function handleSecondBtn() {
        !accepted && deleteFriend();
    }

    //
    return (
        <div className="AddFriendMiniRequest">
            <AddFriendMini
                profile={profile}
                has_requested={accepted}
                title_request="Request accepted"
                showProfile={showProfile}
                //
                has_first_btn={!accepted}
                first_btn_title={'Confirm'}
                first_btn_class={'bg-blue text-white'}
                first_btn_disabled={accepted}
                handleFirstBtn={confirmFriend}
                //
                has_second_btn={true}
                second_btn_title={accepted ? 'Request accepted' : 'Delete'}
                second_btn_class={`bg-ccc ${accepted ? 'text-smoke' : ''}`}
                second_btn_disabled={accepted}
                handleSecondBtn={handleSecondBtn}
            />
        </div>
    );
}

export default AddFriendMiniRequest;
