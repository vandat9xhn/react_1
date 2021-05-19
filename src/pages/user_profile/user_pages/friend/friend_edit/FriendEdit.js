import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';

import { user_propTypes } from '../../../../../_prop-types/_CommonPropTypes';
//
import PictureName from '../../../../../component/picture_name/pic_name/PictureName';
import IconDiv from '../../../../../component/some_div/icon_div/IconDiv';
import IconsAction from '../../../../../_icons_svg/icons_action/IconsAction';
import Actions from '../../../../../component/actions/_main/Actions';
// 
import './FriendEdit.scss';

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
        <div className="FriendEdit position-rel box-shadow-1 brs-5px">
            {/* <div className="display-flex align-items-center"> */}
                <div className="FriendEdit_left brs-5px">
                    <PictureName user={user} />
                </div>

                <div className="FriendEdit_right">
                    <Actions title_action="Friend" symbol_post={false}>
                        <div
                            className="FriendEdit_action brs-5px box-shadow-1"
                        >
                            <div className="FriendEdit_action-item" onClick={confirmDelete}>
                                <IconDiv Icon={IconsAction}>Delete</IconDiv>
                            </div>

                            <div className="FriendEdit_action-item" onClick={onOpenMessage}>
                                <IconDiv x={200} Icon={IconsAction}>
                                    Message
                                </IconDiv>
                            </div>
                        </div>
                    </Actions>
                </div>
            {/* </div> */}
        </div>
    );
}

export default FriendEdit;
