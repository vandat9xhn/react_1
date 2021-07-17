import React from 'react';
import PropTypes from 'prop-types';

//
ChatDraw.propTypes = {};

//
function ChatDraw(props) {
    return (
        <div>
            <div
                className="ChatMB__draw ChatMB__item"
                onClick={letDrawCanvas}
                title="Draw something now!"
            >
                <IconDraw size_icon="1.5rem" />
            </div>
        </div>
    );
}

export default ChatDraw;
