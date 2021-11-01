import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfilePc from '../../action_preview_profile/pc/ActionPreviewProfilePc';
//
import AddFriendListMutual from '../_components/mutual_friend/AddFriendListMutual';
import AddFriendBtn from '../_components/btn/AddFriendBtn';
//
import './AddFriendAdd.scss';

//
AddFriendAdd.propTypes = {
    id: PropTypes.number,
    pic: PropTypes.string,
    name: PropTypes.string,
};

//
function AddFriendAdd({
    profile,
    link_to,

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
        <div className="AddFriendAdd pos-rel padding-bottom-10px brs-8px bg-primary box-shadow-1 overflow-hidden">
            <div className="pos-rel padding-top-100per">
                <Link to={link_to}>
                    <img
                        className="pos-abs-0 wh-100 object-fit-cover"
                        src={picture}
                        alt=""
                    />
                </Link>
            </div>

            <div className="AddFriendAdd_name display-flex padding-x-10px padding-y-6px line-16px">
                <ActionPreviewProfilePc
                    user_id={id}
                    title_action={
                        <Link to={link_to} className="color-inherit font-500">
                            {first_name} {last_name}
                        </Link>
                    }
                />
            </div>

            <div className="AddFriendAdd_mutual padding-y-6px padding-x-10px text-secondary ">
                {mutual_friend_count ? (
                    <AddFriendListMutual
                        mutual_friend_arr={mutual_friend_arr}
                        mutual_friend_count={mutual_friend_count}
                    />
                ) : null}
            </div>

            <div className="AddFriendAdd_btn">
                {has_first_btn ? (
                    <AddFriendBtn
                        className={first_btn_class}
                        title={first_btn_title}
                        disabled={first_btn_disabled}
                        handleClick={handleFirstBtn}
                    />
                ) : null}
            </div>

            <div className="AddFriendAdd_btn">
                {has_second_btn ? (
                    <AddFriendBtn
                        className={second_btn_class}
                        title={second_btn_title}
                        disabled={second_btn_disabled}
                        handleClick={handleSecondBtn}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default AddFriendAdd;
