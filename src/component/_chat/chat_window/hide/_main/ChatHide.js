import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ChatHideCommon.scss';
import './ChatHide.scss';

//
ChatHide.propTypes = {};

//
function ChatHide({
    num_transform_y,
    chat_ix,
    //
    ws,
    index,
    room_chat,
    chat_item,
}) {
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
        <div
            className="ChatHide"
            style={{
                transform: `translateY(calc(${-num_transform_y * 100}% - ${
                    num_transform_y * 0.25
                }rem))`,
            }}
        >
            <div className="ChatHide_contain position-rel">
                <div
                    className={`ChatHide_close ${
                        IS_MOBILE ? '' : 'display-none'
                    }`}
                >
                    <div
                        className="ChatHide_close-icon close-icon-small brs-50 cursor-pointer"
                        onClick={onCloseZoomChat}
                    >
                        <IconsArrow y={400} size_icon="0.75rem" />
                    </div>
                </div>

                <div className="cursor-pointer" onClick={reOpenZoomChat}>
                    <img
                        className="brs-50"
                        src={f_user.picture}
                        alt=""
                        width="45"
                        height="45"
                    />
                </div>

                <div className="ChatHide_info_user display-none">
                    <div className="ChatHide_info_user-padding chat-hide-padding">
                        <div className="ChatHide_info_user-contain padding-4px bg-primary brs-5px box-shadow-fb">
                            <div className="w-100per text-nowrap label-field">
                                {f_user.first_name + ' ' + f_user.last_name}
                            </div>

                            <div className="w-100per text-nowrap">{last_message}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatHide;
