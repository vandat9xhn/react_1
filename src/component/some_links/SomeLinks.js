import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//
class SomeLinks extends Component {
    //
    state = {
        chat_room: '',
    };

    //
    refChatRoom = (elm) => {
        if (elm != null) {
            this.ref_chat_room = elm;
        }
    };

    //
    refChatHome = (elm) => {
        if (elm != null) {
            this.ref_chat_home = elm;
        }
    };

    //
    openRoomChat = (new_chat_room = '') => {
        this.setState({ chat_room: new_chat_room });
        setTimeout(() => {
            this.ref_chat_room.click();
        }, 1);
    };

    //
    closeRoomChat = () => {
        this.setState({ chat_room: '' });
        setTimeout(() => {
            this.ref_chat_home.click();
        }, 1);
    };

    //
    render() {
        const { chat_room } = this.state;

        //
        return (
            <div className="display-none">
                <Link
                    ref={this.refChatRoom}
                    to={`/chat/${chat_room}`}
                    replace={location.pathname.startsWith('/chat/')}
                />
                <Link ref={this.refChatHome} to={`/fb-chat`} replace />
            </div>
        );
    }
}

SomeLinks.propTypes = {};

export default SomeLinks;
