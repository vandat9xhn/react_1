import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { user_propTypes } from '../../../../../../_prop-types/_CommonPropTypes';
//
import BtnActions from '../../../../../../component/button/actions/BtnActions';
import ActionPreviewProfile from '../../../../../../component/action_preview_profile/_main/ActionPreviewProfile';
//
import FriendEditAction from '../action/_main/FriendEditAction';
//
import './FriendEdit.scss';
import { IS_MOBILE } from '../../../../../../_constant/Constant';

//
FriendEdit.propTypes = {
    ...user_propTypes,

    is_friend: PropTypes.bool,
    can_add_friend: PropTypes.bool,
    sent_request: PropTypes.bool,
};

//
function FriendEdit({ ix, friend_obj, handleAction, toggleAddFriend }) {
    //
    const {
        id,
        picture,
        first_name,
        last_name,

        is_friend,
        can_add_friend,
        sent_request,
    } = friend_obj;

    // ------

    //
    function onAction(action_name = '') {
        handleAction({ action_name: action_name, ix: ix });
    }

    //
    function onToggleAddFriend() {
        toggleAddFriend(ix);
    }

    //
    return (
        <div className="FriendEdit padding-16px brs-8px border-blur box-shadow-1">
            <div className="display-flex align-items-center">
                <div className="FriendEdit_left">
                    <ActionPreviewProfile
                        title_action={
                            <Link
                                className="display-block brs-8px hv-after-shadow-05"
                                to={`/profile/${id}`}
                            >
                                <img
                                    className="FriendEdit_img brs-8px object-fit-cover"
                                    src={picture}
                                    alt=""
                                    width="80"
                                    height="80"
                                />
                            </Link>
                        }
                        user_id={id}
                    />
                </div>

                <div className="FriendEdit_right flex-grow-1 display-flex align-items-center">
                    <div className="flex-grow-1 padding-8px">
                        <div className={`${IS_MOBILE ? '' : 'display-flex'}`}>
                            <div>
                                <ActionPreviewProfile
                                    title_action={
                                        <Link
                                            to={`/profile/${id}`}
                                            className="color-inherit font-500"
                                        >
                                            <div className="FriendEdit_name break-word">
                                                {first_name + ' ' + last_name}
                                            </div>
                                        </Link>
                                    }
                                    user_id={id}
                                />
                            </div>
                        </div>

                        <div></div>
                    </div>

                    <div className="flex-shrink-0">
                        {IS_MOBILE ? null : is_friend ? (
                            <FriendEditAction
                                friend_id={id}
                                handleAction={onAction}
                            />
                        ) : !can_add_friend ? null : sent_request ? (
                            <BtnActions
                                className="bg-fb-active text-blue"
                                title="Cancel Request"
                                handleClick={onToggleAddFriend}
                            />
                        ) : (
                            <BtnActions
                                className="bg-fb-active text-blue"
                                title="Add Friend"
                                handleClick={onToggleAddFriend}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendEdit;
