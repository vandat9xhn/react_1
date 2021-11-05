import React from 'react';
import PropTypes from 'prop-types';
//
import './ChatHeadGroupPic.scss';

//
ChatHeadGroupPic.propTypes = {};

//
function ChatHeadGroupPic({ room_users }) {
    //
    const pic_1 = room_users[0].user.picture;
    const pic_2 = room_users[1].user.picture;

    // ------

    //
    function openRoomUsers() {}

    //
    return (
        <div
            className="ChatHeadGroupPic pos-rel cursor-pointer"
            onClick={openRoomUsers}
        >
            <img
                className="ChatHeadGroupPic_top pos-abs right-0 top-0 brs-50 border-current text-white object-fit-cover"
                src={pic_2}
                alt=""
                width="21"
                height="21"
            />

            <img
                className="ChatHeadGroupPic_bot pos-abs left-0 bottom-0 brs-50 object-fit-cover"
                src={pic_1}
                alt=""
                width="23"
                height="23"
            />
        </div>
    );
}

export default ChatHeadGroupPic;
