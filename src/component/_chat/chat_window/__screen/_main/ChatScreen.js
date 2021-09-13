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
            <div>
                <div>
                    {screen_floor.map((item, ix) => (
                        <div
                            key={`${ix}`}
                            className="pos-fixed-100per z-index-lv5"
                        >
                            <div className="ChatScreen_blur pos-abs-100 bg-fb-active"></div>

                            <div className="pos-rel wh-100 bg-through">
                                <ChatScreenFloor
                                    closeChatScreen={this.closeChatScreen}
                                    {...item}
                                />

                                <div className="ChatScreen_close pos-abs right-0 top-0">
                                    <div
                                        className="bg-shadow-9 brs-50 cursor-pointer hv-opacity"
                                        onClick={this.closeChatScreen}
                                    >
                                        <IconsArrow y={400} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

ChatScreen.propTypes = {};

export default ChatScreen;
