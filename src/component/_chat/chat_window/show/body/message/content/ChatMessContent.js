import React from 'react';
import PropTypes from 'prop-types';
//
import './ChatMessContent.scss';

//
ChatMessContent.propTypes = {};

//
function ChatMessContent({ message }) {
    //
    return (
        <div className="ChatMessContent overflow-hidden">
            <div className="ChatMessContent_row display-flex">
                <div className="flex-grow-1 bg-primary"></div>

                <div className="pos-rel">
                    <div className="padding-12px">{message}</div>

                    <div className="ChatMessContent_bg pos-abs-center"></div>
                </div>
            </div>
        </div>
    );
}

export default ChatMessContent;
