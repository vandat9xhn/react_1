import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import MouseEnterLeaveInfo from '../../../posts/common/mouse_enter_leave_info/_main/MouseEnterLeaveInfo';
//
import ActionPreviewProfilePc from '../../../action_preview_profile/pc/ActionPreviewProfilePc';
//
import './AddFriendListMutual.scss';

//
AddFriendListMutual.propTypes = {};

//
function AddFriendListMutual({ mutual_friend_arr, mutual_friend_count }) {
    //
    function handle_API_L() {
        return {
            data: mutual_friend_arr,
            count: mutual_friend_count,
            pages: 1,
        };
    }

    //
    function openMutualFriend() {
        console.log('open mutual');
    }

    //
    return (
        <div className="AddFriendListMutual line-16px">
            <div className="display-flex align-items-center">
                <div className="flex-end row-reverse">
                    {mutual_friend_arr.map((item, ix) => (
                        <div key={ix} className="AddFriendListMutual_item">
                            <ActionPreviewProfilePc
                                user_id={item.id}
                                title_action={
                                    <Link to={`/profile/${item.id}`}>
                                        <img
                                            className="AddFriendListMutual_item_img brs-50 object-fit-cover cursor-pointer"
                                            src={item.picture}
                                            alt=""
                                        />
                                    </Link>
                                }
                            />
                        </div>
                    ))}
                </div>

                <MouseEnterLeaveInfo
                    title={
                        <div className="margin-left-5px">
                            {mutual_friend_count} mutual friend
                            {mutual_friend_count >= 2 ? 's' : ''}
                        </div>
                    }
                    count={mutual_friend_count}
                    total_people={mutual_friend_count}
                    //
                    handle_API_L={handle_API_L}
                    handleOpenScreen={openMutualFriend}
                />
            </div>
        </div>
    );
}

export default AddFriendListMutual;
