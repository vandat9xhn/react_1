import React from 'react';
import PropTypes from 'prop-types';
//
import ChatGroupPic from '../../../../../chat_group_pic/ChatGroupPic';
// 
import './ChatHeadGroupPic.scss';

//
ChatHeadGroupPic.propTypes = {};

//
function ChatHeadGroupPic({ room_users, openRoomUsers }) {
    //
    const pic_1 = room_users[0].user.picture;
    const pic_2 = room_users[1].user.picture;

    //
    return (
        <div className="ChatHeadGroupPic">
            <ChatGroupPic
                pic_1={pic_1}
                pic_2={pic_2}
                handleClick={openRoomUsers}
            />
        </div>
    );
}

export default ChatHeadGroupPic;
