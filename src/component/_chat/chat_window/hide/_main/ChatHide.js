import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import ChatGroupPic from '../../../../chat_group_pic/ChatGroupPic';
//
import './ChatHideCommon.scss';
import './ChatHide.scss';

//
ChatHide.propTypes = {};

//
function ChatHide({ chat_ix, ws, index, room_chat, chat_item }) {
    //
    const { openRoomChat, closeRoomChat } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        mounted_done: false,
    });

    const { mounted_done } = state_obj;

    //
    useEffect(() => {
        setStateObj({
            mounted_done: true,
        });
    }, []);

    //
    function reOpenZoomChat() {
        openRoomChat(room_chat);
    }

    //
    function onCloseZoomChat() {
        closeRoomChat(false, chat_ix);
    }

    //
    const f_user = chat_item.room_obj.room_users[1].user;
    const last_message = chat_item.message_obj.messages[0].message;

    //
    return (
        <div className="ChatHide padding-4px">
            <div
                className={`ChatHide_contain pos-rel ${
                    mounted_done
                        ? 'ChatHide_contain-mounted-done'
                        : 'ChatHide_contain-mounted-yet'
                }`}
            >
                <div
                    className="ChatHide_pic cursor-pointer"
                    onClick={reOpenZoomChat}
                >
                    {chat_item.is_group ? (
                        <ChatGroupPic
                            pic_1={
                                chat_item.room_obj.room_users[0].user.picture
                            }
                            pic_2={
                                chat_item.room_obj.room_users[1].user.picture
                            }
                        />
                    ) : (
                        <img
                            className="wh-100 brs-50 object-fit-cover"
                            src={f_user.picture}
                            alt=""
                        />
                    )}
                </div>

                <div className="ChatHide_close display-none pos-abs right-0">
                    <div
                        className="ChatHide_close-icon close-icon-small brs-50 cursor-pointer"
                        onClick={onCloseZoomChat}
                    >
                        <IconsArrow y={400} size_icon="0.75rem" />
                    </div>
                </div>

                <div className="ChatHide_info_user display-none pos-abs right-100per y-center">
                    <div className="ChatHide_info_user-padding chat-hide-padding">
                        <div className="chat-hide-contain padding-4px bg-primary brs-5px box-shadow-fb">
                            <div className="w-100per text-nowrap font-500">
                                {f_user.first_name + ' ' + f_user.last_name}
                            </div>

                            <div className="w-100per text-nowrap">
                                {last_message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatHide;
