import React from 'react';
import PropTypes from 'prop-types';
//
import AddFriendAdd from '../_main/AddFriendAdd';

//
AddFriendRequest.propTypes = {};

//
function AddFriendRequest({ profile, accepted, confirmFriend, deleteFriend }) {
    //
    function handleSecondBtn() {
        !accepted && deleteFriend();
    }

    //
    return (
        <AddFriendAdd
            profile={profile}
            //
            has_first_btn={!accepted}
            first_btn_title={'Confirm'}
            first_btn_class={'bg-blue text-white'}
            first_btn_disabled={accepted}
            handleFirstBtn={confirmFriend}
            //
            has_second_btn={true}
            second_btn_title={accepted ? 'Request accepted' : 'Delete'}
            second_btn_class={`bg-ccc ${
                accepted ? 'text-smoke cursor-not-allowed' : ''
            }`}
            second_btn_disabled={accepted}
            handleSecondBtn={handleSecondBtn}
        />
    );
}

export default AddFriendRequest;
