import React from 'react';
import PropTypes from 'prop-types';
//
import { Group_emoji_obj } from '../../../../../../_groups_icon/emoji/_main';

//
ChatEmojiScreenItem.propTypes = {};

//
function ChatEmojiScreenItem({ emoji, changeEmoji }) {
    //
    const Emoji = Group_emoji_obj[emoji.name];

    // -----

    //
    function handleClick() {
        changeEmoji(emoji);
    }

    //
    return (
        <div
            className="ChatEmojiScreenItem padding-4px brs-5px cursor-pointer hv-bg-fb"
            onClick={handleClick}
        >
            <div>
                <Emoji size_icon="26px" />
            </div>
        </div>
    );
}

export default ChatEmojiScreenItem;
