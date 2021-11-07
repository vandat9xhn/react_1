import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_chat } from '../../../../../../../_context/chat/ContextChat';

//
ChatMessContent.propTypes = {};

//
function ChatMessContent({ message }) {
    //
    const { colour_arr, room_obj } = useContext(context_chat);

    //
    return (
        <div
            className="ChatMessContent margin-left-auto width-fit-content padding-8px brs-10px bg-ccc"
            style={{
                backgroundImage: room_obj.room_active
                    ? `linear-gradient(to bottom, ${colour_arr.join(', ')})`
                    : 'none',
            }}
        >
            {message}
        </div>
    );
}

export default ChatMessContent;
