import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { WsSend } from '../../../../../../_some_function/WsSend';
//
import IconDiv from '../../../../../some_div/icon_div/IconDiv';
import IconsAction from '../../../../../../_icons_svg/icons_action/IconsAction';
//
import YesNoDiv from '../../../../../some_div/yes_no_div/YesNoDiv';
//
import './ChatScreenEdit.scss';

//
export function openChatEdit({ openChatScreen, ws, mess_id }) {
    openChatScreen({
        ChatFloorComponent: ChatScreenEdit,
        ws: ws,
        mess_id: mess_id,
    });
}

//
ChatScreenEdit.propTypes = {};

//
function ChatScreenEdit({ ws, mess_id, closeChatScreen }) {
    //
    const [open_yes_no, setOpenYesNo] = useState(false);

    //
    function handleOpenConfirmDelete() {
        setOpenYesNo(true);
    }

    //
    function handleCancelDelete() {
        setOpenYesNo(false);
    }

    //
    function handleConfirmDelete() {
        WsSend(ws, {
            type: 'delete_message',
            mess_id: mess_id,
        });

        closeChatScreen()
    }

    //
    return (
        <div className="ChatScreenEdit wh-100">
            <div className="ChatScreenEdit_row display-flex justify-content-center wh-100">
                <div className="ActionsChat_del ChatScreenEdit_part bg-primary">
                    <div
                        className="padding-8px cursor-pointer hv-bg-blur"
                        onClick={handleOpenConfirmDelete}
                    >
                        <IconDiv Icon={IconsAction}>Delete message</IconDiv>
                    </div>

                    <div
                        className={
                            open_yes_no
                                ? 'ActionsChat_del-confirm'
                                : 'display-none'
                        }
                    >
                        <YesNoDiv
                            handleYes={handleConfirmDelete}
                            handleNo={handleCancelDelete}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatScreenEdit;
