import React from 'react';
import PropTypes from 'prop-types';
//
import AddFriendMini from '../../_main/AddFriendMini';

//
AddFriendMiniSuggest.propTypes = {};

//
function AddFriendMiniSuggest({
    profile,
    sent,
    
    addFriend,
    removeFriend,
    showProfile,
}) {
    //

    //
    return (
        <div className="AddFriendMiniSuggest">
            <AddFriendMini
                profile={profile}
                has_requested={sent}
                title_request="Request sent"
                showProfile={showProfile}
                //
                has_first_btn={!sent}
                first_btn_title={'Add Friend'}
                first_btn_class={'bg-blue text-white'}
                handleFirstBtn={addFriend}
                //
                has_second_btn={true}
                second_btn_title={sent ? 'Cancel' : 'Remove'}
                second_btn_class={'bg-ccc'}
                handleSecondBtn={removeFriend}
            />
        </div>
    );
}

export default AddFriendMiniSuggest;
