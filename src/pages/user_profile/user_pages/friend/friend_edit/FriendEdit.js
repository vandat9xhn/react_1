import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';

import { user_propTypes } from '../../../../../_prop-types/_CommonPropTypes';
//
import IconDiv from '../../../../../component/some_div/icon_div/IconDiv';
import IconsAction from '../../../../../_icons_svg/icons_action/IconsAction';
import Actions from '../../../../../component/actions/_main/Actions';
//
import './FriendEdit.scss';
import { Link } from 'react-router-dom';

//
FriendEdit.propTypes = {
    ...user_propTypes,
    confirmDelete: PropTypes.func,
};

//
function FriendEdit(props) {
    // context
    const { openMessage, openScreenConfirm } = useContext(context_api);

    // props
    const { user, handelDeleteFriend } = props;

    /* --------------- HANDLE EDIT --------------- */

    // open message
    const onOpenMessage = () => {
        openMessage(user.id);
    };

    //  delete friend
    function confirmDelete() {
        openScreenConfirm(
            'Delete',
            'Do you really want to delete this friend',
            () => handelDeleteFriend(user.id)
        );
    }

    //
    return (
        <div className="FriendEdit position-rel box-shadow-1 brs-5px bg-primary">
            <div className="FriendEdit_left">
                <div>
                    <Link
                        to={`/profile/${user.id}`}
                        className="normal-text hv-cl-blue label-field"
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
            </div>

            <div className="FriendEdit_right">
                <Actions title_action="Friend" symbol_post={false}>
                    <div className="FriendEdit_action brs-5px box-shadow-1">
                        <div
                            className="FriendEdit_action_item"
                            onClick={onOpenMessage}
                        >
                            <IconDiv x={200} Icon={IconsAction}>
                                Message
                            </IconDiv>
                        </div>

                        <div
                            className="FriendEdit_action_item"
                            onClick={confirmDelete}
                        >
                            <IconDiv Icon={IconsAction}>Unfriend</IconDiv>
                        </div>
                    </div>
                </Actions>
            </div>
        </div>
    );
}

export default FriendEdit;
