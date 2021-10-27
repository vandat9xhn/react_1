import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

//
LinkOpenChat.propTypes = {};

//
function LinkOpenChat({ chat_room }) {
    //
    const use_history = useHistory();

    //
    useEffect(() => {
        chat_room && use_history.push(`/chat/${chat_room}`);
    }, [chat_room]);

    //
    return null;
}

export default LinkOpenChat;
