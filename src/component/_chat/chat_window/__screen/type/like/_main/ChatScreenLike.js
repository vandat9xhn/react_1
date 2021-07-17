import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { WsSend } from '../../../../../../../_some_function/WsSend';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import { type_likes } from '../../../../../../like/list_type_like/type_likes/TypeLikes';
import TypesLike from '../types_like/ChatScreenTypeLike';
//
import './ChatScreenLike.scss';

//
export function openChatLike({ openChatScreen, ws, mess_id }) {
    openChatScreen({
        ChatFloorComponent: ChatScreenLike,
        ws: ws,
        mess_id: mess_id,
    });
}

//
ChatScreenLike.propTypes = {};

//
function ChatScreenLike({ ws, mess_id, user_like, closeChatScreen }) {
    //
    function handleTypeLike(type_like) {
        WsSend(ws, {
            type: 'like_message',
            mess_id: mess_id,
            type_like: type_like,
        });

        closeChatScreen();
    }

    //
    function handleDeleteTypeLike() {
        handleTypeLike(-1);
    }

    //
    return (
        <div className="ChatScreenLike w-100per">
            <div className="ChatScreenLike_contain padding-8px open-type-like">
                <div
                    className={`ChatScreenLike_row display-flex justify-content-center flex-wrap`}
                >
                    {type_likes.map((item, index) => (
                        <TypesLike
                            key={`ChatScreenLike_${index}`}
                            item_ix={index}
                            component={item.component}
                            handleTypeLike={handleTypeLike}
                        />
                    ))}
                    <div
                        className={`ChatScreenLike_del display-flex align-items-center flex-wrap ${
                            user_like == undefined || user_like == -1
                                ? 'pointer-events-none opacity-05'
                                : 'cursor-pointer'
                        }`}
                    >
                        <div
                            className="ChatScreenLike_del-item close-icon-small brs-50"
                            onClick={handleDeleteTypeLike}
                        >
                            <IconsArrow y={400} size_icon="1.5rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatScreenLike;
