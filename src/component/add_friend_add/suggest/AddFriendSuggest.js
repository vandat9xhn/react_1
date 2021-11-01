import React from 'react';
import PropTypes from 'prop-types';
//
import AddFriendAdd from '../_main/AddFriendAdd';
//
import './AddFriendSuggest.scss';

//
AddFriendSuggest.propTypes = {};

//
function AddFriendSuggest({ profile, sent, link_to, addFriend, removeFriend }) {
    //
    return (
        <AddFriendAdd
            profile={profile}
            link_to={link_to}
            //
            has_first_btn={!sent}
            first_btn_title={'Add Friend'}
            first_btn_class={
                'AddFriendSuggest_first_btn bg-fb-active text-blue'
            }
            handleFirstBtn={addFriend}
            //
            has_second_btn={true}
            second_btn_title={sent ? 'Cancel' : 'Remove'}
            second_btn_class={'bg-ccc'}
            handleSecondBtn={removeFriend}
        />
    );
}

export default AddFriendSuggest;
