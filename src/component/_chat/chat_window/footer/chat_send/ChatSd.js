import React from 'react';
import PropTypes from 'prop-types';
import IconsAction from '../../../../../_icons_svg/icons_action/IconsAction';

//
function ChatSd(props) {
    const { should_send, handleSend } = props;

    return (
        <div className="ChatSd">
            <div
                className={should_send ? 'cursor-pointer nav-active' : ''}
                onClick={handleSend}
                title="Send message"
            >
                <IconsAction x={200} y={200} size_icon="1.5rem" />
            </div>
        </div>
    );
}

ChatSd.propTypes = {
    should_send: PropTypes.bool,
    handleSend: PropTypes.func,
};

export default ChatSd;
