import React from 'react';
import PropTypes from 'prop-types';

//
CUPostEmojiItemMb.propTypes = {};

//
function CUPostEmojiItemMb({ emoji_obj, is_active, changeEmoji }) {
    //
    function onChangeEmoji() {
        changeEmoji(emoji_obj);
    }

    //
    return (
        <div
            className={`padding-8px ${is_active ? 'bg-fb-active' : 'hv-bg-bv'}`}
            onClick={onChangeEmoji}
        >
            <div className="display-flex align-items-center">
                <div>{emoji_obj.icon}</div>

                <div className="margin-left-10px">{emoji_obj.name}</div>
            </div>
        </div>
    );
}

export default CUPostEmojiItemMb;
