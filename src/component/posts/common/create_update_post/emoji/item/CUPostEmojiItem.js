import React from 'react';
import PropTypes from 'prop-types';
// 
import './CUPostEmojiItem.scss';

//
CUPostEmojiItem.propTypes = {};

//
function CUPostEmojiItem({ emoji_obj, is_active, changeEmoji }) {
    //
    function onChangeEmoji() {
        changeEmoji(emoji_obj);
    }

    //
    return (
        <div
            className={`CUPostEmojiItem padding-8px brs-6px cursor-pointer ${
                is_active ? 'bg-fb-active' : 'hv-bg-blur'
            }`}
            onClick={onChangeEmoji}
        >
            <div className="CUPostEmojiItem_row display-flex align-items-center">
                <div>{emoji_obj.icon}</div>

                <div className="margin-left-10px">{emoji_obj.name}</div>
            </div>
        </div>
    );
}

export default CUPostEmojiItem;
