import React from 'react';
import PropTypes from 'prop-types';
//
import MouseEnterLeaveInfo from '../../../posts/common/mouse_enter_leave_info/_main/MouseEnterLeaveInfo';
//
import ActionPreviewProfilePc from '../../../action_preview_profile/pc/ActionPreviewProfilePc';
//
import './AddFriendListMutual.scss';

//
const PeopleComponent = ({ item }) => {
    return (
        <div className="text-white font-12px">
            {item.first_name} {item.last_name}
        </div>
    );
};

//
AddFriendListMutual.propTypes = {};

//
function AddFriendListMutual({
    friend_arr,
    mutual_friend_count,
    // has_more_friend,
}) {
    //
    function API_L() {
        return new Promise((res) => {
            setTimeout(() => {
                res(friend_arr);
            }, 250);
        });
    }

    //
    async function handle_API_L() {
        const data = await API_L();

        return { data: data, count: 10, pages: 1 };
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
                    {friend_arr.map((item, ix) => (
                        <div key={ix} className="AddFriendListMutual_item">
                            <ActionPreviewProfilePc
                                user_id={item.id}
                                title_action={
                                    <img
                                        className="AddFriendListMutual_item_img brs-50 object-fit-cover cursor-pointer"
                                        src={item.picture}
                                        alt=""
                                    />
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
                    PeopleComponent={PeopleComponent}
                />
            </div>
        </div>
    );
}

export default AddFriendListMutual;
