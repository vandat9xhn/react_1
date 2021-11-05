import React from 'react';
import PropTypes from 'prop-types';
// 
import IconSubtract from '../../../../../../_icons_svg/subtract/IconSubtract';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ChatHeadRight.scss';

//
ChatHeadRight.propTypes = {};

//
function ChatHeadRight({ handleHideRoomChat, handleCloseRoomChat }) {
    //
    return (
        <div className="ChatHeadRight display-flex align-items-center h-100per">
            <div className="ChatHeadRight_btn" onClick={handleHideRoomChat}>
                <IconSubtract size_icon="18px" color="currentColor" />
            </div>

            <div className="ChatHeadRight_btn" onClick={handleCloseRoomChat}>
                <IconsArrow y={400} size_icon="18px" />
            </div>
        </div>
    );
}

export default ChatHeadRight;
