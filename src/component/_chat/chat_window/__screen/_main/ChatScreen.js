import React, { Component } from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ChatScreenCommon.scss';
//
import ChatScreenFloor from '../floor/ChatScreenFloor';
//
import './ChatScreen.scss';

//
class ChatScreen extends Component {
    state = {
        screen_floor: [],
    };

    //
    openChatScreen = (new_floor) => {
        const { screen_floor } = this.state;

        this.setState({
            screen_floor: [...screen_floor, new_floor],
        });
    };

    //
    closeChatScreen = () => {
        const { screen_floor } = this.state;

        screen_floor.pop();
        this.setState({});
    };

    //
    render() {
        //
        const { screen_floor } = this.state;

        //
        return (
            <div className="ChatScreen">
                {screen_floor.map((item, ix) => (
                    <div key={ix} className="pos-abs-100per">
                        <div className="ChatScreen_blur pos-abs-100 bg-fb-active z-index-lv5"></div>

                        <div className="pos-abs-100 bg-through z-index-lv5">
                            <ChatScreenFloor
                                closeChatScreen={this.closeChatScreen}
                                {...item}
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

ChatScreen.propTypes = {};

export default ChatScreen;
