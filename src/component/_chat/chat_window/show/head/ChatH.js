import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
import { context_chat } from '../../../../../_context/chat/ContextChat';
// 
import { openChatUser } from '../../__screen/type/room_user/_main/ChatScreenUsers';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconSubtract from '../../../../../_icons_svg/subtract/IconSubtract';
//
import PictureName from '../../../../picture_name/pic_name/PictureName';
//
import './ChatH.scss';

// 
ChatH.propTypes = {};

ChatH.defaultProps = {};

//
function ChatH({ room_users, room_owner, count_user }) {
    //
    const { hideZoomChat, closeZoomChat } = useContext(context_api);

    const { openChatScreen, ws, chat_ix, is_group } = useContext(context_chat);

    //
    const some_user_pics = room_users
        .sort((item) => item.is_friend)
        .slice(0, 3)
        .map((item) => item.user.picture);

    //
    function handleHideZoomChat() {
        hideZoomChat(chat_ix);
    }

    //
    function handleCloseZoomChat() {
        closeZoomChat(true, chat_ix);
    }

    //
    function handleShowUser() {
        openChatUser({
            openChatScreen: openChatScreen,
            ws: ws,
            room_users: room_users,
            owner_id: room_owner.id,
        });
    }

    //
    return (
        <div className="ChatH position-rel">
            <div className="ChatH_row flex-between-center">
                {is_group ? (
                    <div
                        className="ChatH_user display-flex cursor-pointer"
                        onClick={handleShowUser}
                    >
                        {some_user_pics.map((pic, pic_ix) => (
                            <div
                                className="ChatH_user-pic"
                                key={`ChatH_user_pic_${pic_ix}`}
                            >
                                <img
                                    className="brs-50"
                                    src={pic}
                                    alt=""
                                    width="30"
                                    height="30"
                                />
                            </div>
                        ))}
                        <div
                            className={
                                count_user > some_user_pics.length
                                    ? ''
                                    : 'display-none'
                            }
                        >
                            + {count_user - some_user_pics.length}
                        </div>
                    </div>
                ) : (
                    <div className="ChatH_user">
                        <PictureName user={room_users[0].user} />
                    </div>
                )}

                <div className="ChatH_actions">
                    <div className="ChatH_actions-row display-flex flex-end">
                        <div
                            className="ChatH_actions_btn display-flex-center cursor-pointer brs-5px hv-opacity"
                            onClick={handleHideZoomChat}
                        >
                            <IconSubtract size_icon="0.75rem" color="var(--white)" />
                        </div>

                        <div
                            className="ChatH_actions_btn brs-5px display-flex-center cursor-pointer hv-opacity"
                            onClick={handleCloseZoomChat}
                        >
                            <IconsArrow y={400} size_icon="0.75rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatH;
