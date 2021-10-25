import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { user_propTypes } from '../../../../../../_prop-types/_CommonPropTypes';
//
import { openScreenConfirm } from '../../../../../../component/_screen/type/confirm/ScreenConfirm';
//
import FriendEditAction from '../action/_main/FriendEditAction';
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
        <div className="FriendEdit pos-rel padding-10px brs-5px bg-primary">
            <div className="FriendEdit_left flex-grow-1">
                <Link
                    to={`/profile/${user.id}`}
                    className="normal-text hv-cl-blue font-500"
                >
                    <div className="display-flex align-items-center">
                        <img
                            className="brs-8px object-fit-cover"
                            src={user.picture}
                            alt=""
                            width="80"
                            height="80"
                        />

                        <div className="FriendEdit_left_name margin-left-10px">
                            {user.first_name + ' ' + user.last_name}
                        </div>
                    </div>
                </Link>
            </div>

            <div className="FriendEdit_right pos-abs">
                <FriendEditAction
                    openMessage={onOpenMessage}
                    confirmDelete={confirmDelete}
                />
            </div>
        </div>
    );
}

export default FriendEdit;
