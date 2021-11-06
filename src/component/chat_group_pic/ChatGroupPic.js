import React from 'react';
import PropTypes from 'prop-types';
//
import './ChatGroupPic.scss';

//
ChatGroupPic.propTypes = {};

//
function ChatGroupPic({ pic_1, pic_2, handleClick }) {
    //
    return (
        <div
            className="ChatGroupPic pos-rel wh-100 cursor-pointer"
            onClick={handleClick}
        >
            <img
                className="ChatGroupPic_top pos-abs right-0 top-0 brs-50 border-current text-white object-fit-cover"
                src={pic_2}
                alt=""
            />

            <img
                className="ChatGroupPic_bot pos-abs left-0 bottom-0 brs-50 object-fit-cover"
                src={pic_1}
                alt=""
            />
        </div>
    );
}

export default ChatGroupPic;
