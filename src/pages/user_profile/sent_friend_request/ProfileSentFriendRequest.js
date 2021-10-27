import React from 'react';
import PropTypes from 'prop-types';
//
import BtnProfileActions from '../../../component/button/profile_actions/_common/BtnProfileActions';
// 
import './ProfileSentFriendRequest.scss';

//
ProfileSentFriendRequest.propTypes = {};

//
function ProfileSentFriendRequest({ user_name, handleAction }) {
    //
    function confirmRequest() {
        handleAction('confirm_request');
    }

    //
    function deleteRequest() {
        handleAction('delete_request');
    }

    //
    return (
        <div className="ProfileSentFriendRequest fb-profile-width-contain padding-16px bg-fb">
            <div className="ProfileSentFriendRequest_row flex-between-center">
                <div className="ProfileSentFriendRequest_title font-17px font-600">
                    {user_name} sent you a friend request
                </div>

                <div className="display-flex flex-wrap">
                    <div className="ProfileSentFriendRequest_btn margin-5px">
                        <BtnProfileActions
                            className="bg-blue text-white"
                            title="Confirm Request"
                            handleClick={confirmRequest}
                        />
                    </div>

                    <div className="ProfileSentFriendRequest_btn margin-5px">
                        <BtnProfileActions
                            className="bg-ccc"
                            title="Delete Request"
                            handleClick={deleteRequest}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSentFriendRequest;
