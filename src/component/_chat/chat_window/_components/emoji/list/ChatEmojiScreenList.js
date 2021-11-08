import React from 'react';
import PropTypes from 'prop-types';
//
import ChatEmojiScreenItem from '../item/ChatEmojiScreenItem';

//
ChatEmojiScreenList.propTypes = {};

//
function ChatEmojiScreenList({ title, emoji_row_arr, changeEmoji }) {
    //
    return (
        <div className="padding-bottom-5px">
            <h3 className="margin-x-8px line-17px font-13px font-400 text-secondary">
                {title}
            </h3>

            <div>
                {emoji_row_arr.map((emoji_arr, row_ix) => (
                    <div key={row_ix}>
                        {emoji_arr.map((item, ix) => (
                            <span key={ix} className="inline-block padding-2px">
                                <ChatEmojiScreenItem
                                    emoji={item}
                                    changeEmoji={changeEmoji}
                                />
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatEmojiScreenList;
