import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// 
import LinkOpenChat from './LinkOpenChat';

//
class SomeLinks extends Component {
    //
    state = {
        chat_room: '',
    };

    //
    openRoomChat = (new_chat_room = '') => {
        this.setState({ chat_room: new_chat_room });
    };

    //
    render() {
        const { chat_room } = this.state;

        //
        return (
            <div className="display-none">
                <LinkOpenChat chat_room={chat_room} />
            </div>
        );
    }
}

SomeLinks.propTypes = {};

export default SomeLinks;
