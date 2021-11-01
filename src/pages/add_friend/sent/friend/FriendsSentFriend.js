import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import AddFriendMiniLayout from '../../../../component/add_friend_mini/_components/layout/AddFriendMiniLayout';
import AddFriendListMutual from '../../../../component/add_friend_add/_components/mutual_friend/AddFriendListMutual';
import AddFriendBtn from '../../../../component/add_friend_add/_components/btn/AddFriendBtn';
//
import './FriendsSentFriend.scss';

//
FriendsSentFriend.propTypes = {};

//
function FriendsSentFriend({
    profile,
    has_cancelled,

    showProfile,
    handleCancel,
}) {
    //
    const { closeScreenFloor } = useContext(context_api);

    //
    const {
        id,
        picture,
        first_name,
        last_name,

        mutual_friend_arr,
        mutual_friend_count,
    } = profile;

    // ----

    //
    function onShowProfile() {
        showProfile(id);
        closeScreenFloor();
    }

    //
    return (
        <div className="FriendsSentFriend pos-rel">
            <AddFriendMiniLayout picture={picture} showProfile={onShowProfile}>
                <div className="FriendsSentFriend_contain padding-y-10px flex-between-center">
                    <div className="flex-grow-1">
                        <div className="font-600">
                            {first_name} {last_name}
                        </div>

                        <div className="FriendsSentFriend_mutual margin-y-5px text-third font-13px">
                            {has_cancelled ? (
                                'Requested cancelled'
                            ) : mutual_friend_count ? (
                                <div className="pos-rel width-fit-content">
                                    <AddFriendListMutual
                                        mutual_friend_arr={mutual_friend_arr}
                                        mutual_friend_count={
                                            mutual_friend_count
                                        }
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div>
                        {has_cancelled ? null : (
                            <div className="FriendsSentFriend_btn pos-rel">
                                <AddFriendBtn
                                    className={'bg-ccc'}
                                    title={
                                        IS_MOBILE ? 'Cancel' : 'Cancel request'
                                    }
                                    disabled={false}
                                    handleClick={handleCancel}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </AddFriendMiniLayout>
        </div>
    );
}

export default FriendsSentFriend;
