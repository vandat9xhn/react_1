import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { user_propTypes } from '../../../../../_prop-types/_CommonPropTypes';
//
import { useBool } from '../../../../../_hooks/useBool';
//
import { openScreenConfirm } from '../../../../../component/_screen/type/confirm/ScreenConfirm';
//
import IconsAction from '../../../../../_icons_svg/icons_action/IconsAction';
//
import IconDiv from '../../../../../component/some_div/icon_div/IconDiv';
import Actions from '../../../../../component/actions/_main/Actions';
//
import './FriendEdit.scss';

//
FriendEdit.propTypes = {
    ...user_propTypes,
    confirmDelete: PropTypes.func,
};

//
function FriendEdit({ user, handelDeleteFriend }) {
    //
    const { openRoomChat, openScreenFloor } = useContext(context_api);

    //
    const { is_true, toggleBool } = useBool();

    // ------

    //
    const onOpenMessage = () => {
        openRoomChat(user.id);
    };

    //
    function confirmDelete() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: 'Do you really want to delete this friend',
            handleConfirm: () => handelDeleteFriend(user.id),
        });
    }

    //
    return (
        <div className="FriendEdit pos-rel box-shadow-fb brs-5px bg-primary">
            <div className="FriendEdit_left">
                <Link
                    to={`/profile/${user.id}`}
                    className="normal-text hv-cl-blue font-500"
                >
                    <div className="display-flex align-items-center">
                        <div>
                            <img
                                className="brs-8px"
                                src={user.picture}
                                alt=""
                                width="80"
                                height="80"
                            />
                        </div>

                        <div className="FriendEdit_left_name">
                            {user.first_name + ' ' + user.last_name}
                        </div>
                    </div>
                </Link>
            </div>

            <div className="FriendEdit_right">
                <Actions is_show={is_true} toggleShow={toggleBool}>
                    <div className="FriendEdit_action" onClick={toggleBool}>
                        <div
                            className="FriendEdit_action_item font-500 cursor-pointer"
                            onClick={onOpenMessage}
                        >
                            <IconDiv x={200} Icon={IconsAction}>
                                Message
                            </IconDiv>
                        </div>

                        <div
                            className="FriendEdit_action_item font-500 cursor-pointer"
                            onClick={confirmDelete}
                        >
                            <IconDiv Icon={IconsAction}>
                                <span>Unfriend</span>
                            </IconDiv>
                        </div>
                    </div>
                </Actions>
            </div>
        </div>
    );
}

export default FriendEdit;
