import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import PicNameContent from '../../../../picture_name/pic_name_content/PicNameContent';
//
import './ChatHideMoreRoom.scss';

//
ChatHideMoreRoom.propTypes = {};

//
function ChatHideMoreRoom({ chat_ix, room_chat, scroll_y, index, chat_item }) {
    //
    const { openZoomChat, closeZoomChat } = useContext(context_api);

    //
    function reOpenZoomChat() {
        openZoomChat(room_chat);
    }

    //
    function onCloseZoomChat() {
        closeZoomChat(false, chat_ix);
    }

    //
    const f_user = chat_item.room_obj.room_users[1].user;
    const last_message = chat_item.message_obj.messages[0].message;

    //
    return (
        <div className="ChatHideMoreRoom padding-8px text-nowrap">
            <div className="flex-between-center">
                <div className="ChatHideMoreRoom_left cursor-pointer hv-bg-blur">
                    <PicNameContent
                        user={f_user}
                        content={
                            <div className="ChatHideMoreRoom_message">
                                {last_message}
                            </div>
                        }
                        handleClick={reOpenZoomChat}
                    />
                </div>

                <div className="ChatHideMoreRoom_close">
                    <div
                        className="padding-8px cursor-pointer"
                        onClick={onCloseZoomChat}
                    >
                        <IconsArrow y={400} size_icon="0.75rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatHideMoreRoom;
