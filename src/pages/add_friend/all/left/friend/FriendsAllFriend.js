import React from 'react';
import PropTypes from 'prop-types';
//
import MouseEnterLeaveInfo from '../../../../../component/posts/common/mouse_enter_leave_info/_main/MouseEnterLeaveInfo';
import ActionsProfileOther from '../../../../../component/actions_profile/other/ActionsProfileOther';
import AddFriendMiniLayout from '../../../../../component/add_friend_mini/_components/layout/AddFriendMiniLayout';
//
import './FriendsAllFriend.scss';

//
FriendsAllFriend.propTypes = {};

//
function FriendsAllFriend({ ix, profile, showProfile, handleAction }) {
    //
    const {
        id,
        first_name,
        last_name,
        picture,

        mutual_friend_arr,
        mutual_friend_count,
    } = profile;

    // -------

    //
    function handle_API_L() {
        return {
            data: mutual_friend_arr,
            count: mutual_friend_count,
            pages: 1,
        };
    }

    // ------

    //
    function openMutualFriend() {
        console.log('mutual');
    }

    //
    function onAction(action_name = '') {
        handleAction({ action_name: action_name, user_ix: ix });
    }

    //
    return (
        <div className="FriendsAllFriend">
            <AddFriendMiniLayout picture={picture} showProfile={showProfile}>
                <div className="flex-between-center h-100per">
                    <div className="padding-right-10px">
                        <div className="font-500">
                            {first_name} {last_name}
                        </div>

                        {mutual_friend_count ? (
                            <MouseEnterLeaveInfo
                                title={
                                    <div className="font-13px text-third">
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
                        ) : null}
                    </div>

                    <div className="FriendsAllFriend_other pos-rel">
                        <ActionsProfileOther
                            user_id={id}
                            class_action_contain=""
                            is_at_body={true}
                            handleAction={onAction}
                        />
                    </div>
                </div>
            </AddFriendMiniLayout>
        </div>
    );
}

export default FriendsAllFriend;
