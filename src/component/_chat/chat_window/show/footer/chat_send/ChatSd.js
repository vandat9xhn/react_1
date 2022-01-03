import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_chat } from '../../../../../../_context/chat/ContextChat';
//
import IconsAction from '../../../../../../_icons_svg/icons_action/IconsAction';
import IconLike from '../../../../../../_icons_svg/icons_like/icon_like/IconLike';
//
import { GROUP_EMOJI_OBJ } from '../../../../../../_groups_icon/emoji/_main';
//
import './ChatSd.scss';

//
ChatSd.propTypes = {
    should_send: PropTypes.bool,
    handleSend: PropTypes.func,
};

//
function ChatSd({ should_send, handleSend, handleSendEmoji }) {
    //
    const { colour_arr, emoji, room_obj } = useContext(context_chat);

    //
    const Emoji = GROUP_EMOJI_OBJ[emoji.name];

    //
    return (
        <div
            className="ChatSd cursor-pointer"
            style={{
                color: room_obj.room_active
                    ? colour_arr.slice(-1)[0]
                    : 'var(--md-color-third)',
            }}
        >
            {should_send ? (
                <div title="Send message" onClick={handleSend}>
                    <IconsAction x={200} y={200} size_icon="1.5rem" />
                </div>
            ) : (
                <div title={emoji.name} onClick={handleSendEmoji}>
                    {emoji.name == 'like' ? (
                        <IconLike
                            size_icon="1.5rem"
                            fill="currentColor"
                            stroke="currentColor"
                        />
                    ) : (
                        <Emoji size_icon="1.5rem" />
                    )}
                </div>
            )}
        </div>
    );
}

export default ChatSd;
