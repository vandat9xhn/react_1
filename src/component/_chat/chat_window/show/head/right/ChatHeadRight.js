import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
// 
import IconSubtract from '../../../../../../_icons_svg/subtract/IconSubtract';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
import IconCameraFilm from '../../../../../../_icons_svg/icon_camera_film/IconCameraFilm';
import IconTablePhone from '../../../../../../_icons_svg/icon_table_phone/IconTablePhone';
//
import './ChatHeadRight.scss';

//
ChatHeadRight.propTypes = {};

//
function ChatHeadRight({
    callVideoFriends,
    phoneYourFriends,
    handleHideRoomChat,
    handleCloseRoomChat,
}) {
    //
    return (
        <div className="ChatHeadRight display-flex align-items-center h-100per">
            <div className="ChatHeadRight_btn" onClick={callVideoFriends}>
                <IconCameraFilm size_icon="20px" fill="currentColor" />
            </div>

            <div className="ChatHeadRight_btn" onClick={phoneYourFriends}>
                <IconTablePhone size_icon="20px" fill="currentColor" />
            </div>

            {IS_MOBILE ? null : (
                <React.Fragment>
                    <div
                        className="ChatHeadRight_btn"
                        onClick={handleHideRoomChat}
                    >
                        <IconSubtract size_icon="20px" color="currentColor" />
                    </div>

                    <div
                        className="ChatHeadRight_btn"
                        onClick={handleCloseRoomChat}
                    >
                        <IconsArrow y={400} size_icon="20px" />
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

export default ChatHeadRight;
