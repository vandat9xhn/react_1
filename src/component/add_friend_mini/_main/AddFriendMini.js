import React from 'react';
import PropTypes from 'prop-types';
//
import AddFriendBtn from '../../add_friend_add/_components/btn/AddFriendBtn';
import AddFriendListMutual from '../../add_friend_add/_components/mutual_friend/AddFriendListMutual';
import AddFriendMiniLayout from '../_components/layout/AddFriendMiniLayout';
//
import './AddFriendMini.scss';

//
AddFriendMini.propTypes = {};

//
function AddFriendMini({
    profile,
    has_requested,
    title_request,
    showProfile,

    has_first_btn,
    first_btn_title,
    first_btn_class,
    first_btn_disabled,
    handleFirstBtn,

    has_second_btn,
    second_btn_title,
    second_btn_class,
    second_btn_disabled,
    handleSecondBtn,
}) {
    //
    const {
        id,
        picture,
        first_name,
        last_name,

        mutual_friend_arr,
        mutual_friend_count,
    } = profile;

    //
    return (
        <div className="AddFriendMini pos-rel">
            <AddFriendMiniLayout picture={picture} showProfile={showProfile}>
                <div
                    className={`padding-y-10px ${
                        has_requested
                            ? 'flex-between-center flex-wrap'
                            : 'display-flex flex-col'
                    }`}
                >
                    <div className="flex-grow-1">
                        <div className="flex-between-center">
                            <div className="font-600">
                                {first_name} {last_name}
                            </div>

                            <div>
                                {/* {created_time
                                    ? UnitTime(new Date() - new Date(created_time))
                                    : ''} */}
                            </div>
                        </div>

                        {has_requested || mutual_friend_count ? (
                            <div className="AddFriendMini_mutual margin-y-5px text-third font-13px">
                                {has_requested ? (
                                    title_request
                                ) : (
                                    <div className="pos-rel width-fit-content">
                                        <AddFriendListMutual
                                            mutual_friend_arr={
                                                mutual_friend_arr
                                            }
                                            mutual_friend_count={
                                                mutual_friend_count
                                            }
                                        />
                                    </div>
                                )}
                            </div>
                        ) : null}
                    </div>

                    <div className="flex-grow-1 display-flex flex-wrap">
                        {has_first_btn ? (
                            <div className="AddFriendMini_btn">
                                <AddFriendBtn
                                    className={first_btn_class}
                                    title={first_btn_title}
                                    disabled={first_btn_disabled}
                                    handleClick={handleFirstBtn}
                                />
                            </div>
                        ) : null}

                        {has_second_btn ? (
                            <div className="AddFriendMini_btn">
                                <AddFriendBtn
                                    className={second_btn_class}
                                    title={second_btn_title}
                                    disabled={second_btn_disabled}
                                    handleClick={handleSecondBtn}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </AddFriendMiniLayout>
        </div>
    );
}

export default AddFriendMini;
