import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ChatHide.scss';
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
ChatHide.propTypes = {};

//
function ChatHide({ ws, room_chat, chat_ix, is_group, room_users }) {
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
    const f_user = room_users[1].user;

    //
    return (
        <div className="ChatHide">
            <div className="position-rel">
                <div
                    className={`ChatHide_close ${
                        IS_MOBILE ? '' : 'display-none'
                    }`}
                >
                    <div
                        className="close-icon-small brs-50 cursor-pointer"
                        onClick={onCloseZoomChat}
                    >
                        <IconsArrow y={400} size_icon="0.75rem" />
                    </div>
                </div>

                <div
                    className="cursor-pointer"
                    title={f_user.first_name + ' ' + f_user.last_name}
                    onClick={reOpenZoomChat}
                >
                    <img
                        className="brs-50"
                        src={f_user.picture}
                        alt=""
                        width="45"
                        height="45"
                    />
                </div>

                {/* <div
                    className={`display-none ${
                        IS_MOBILE ? '' : 'ChatHide_info_user'
                    }`}
                >
                    <div>
                        {room_users[1].user.first_name}{' '}
                        {room_users[1].user.last_name}
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ChatHide;
