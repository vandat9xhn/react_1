import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import { Group_emoji_obj } from '../../../../../../_groups_icon/emoji/_main';
//
import './ChatEmojiScreenCurrent.scss';

//
ChatEmojiScreenCurrent.propTypes = {};

//
function ChatEmojiScreenCurrent({ emoji, removeEmoji }) {
    //
    const Emoji = Group_emoji_obj[emoji.name];

    //
    return (
        <div className="ChatEmojiScreenCurrent">
            <div className="flex-between-center">
                <div>
                    <div className="margin-bottom-5px font-17px font-500">
                        Current emoji
                    </div>

                    <div>
                        <Emoji size_icon="28px" />
                    </div>
                </div>

                <button
                    className="ChatEmojiScreenCurrent_btn display-flex-center padding-8px btn btn-hv btn-active brs-6px bg-fb font-600 cursor-pointer"
                    type="button"
                    onClick={removeEmoji}
                >
                    <IconsArrow y={400} size_icon="20px" />

                    <span className="margin-left-5px">Remove</span>
                </button>
            </div>
        </div>
    );
}

export default ChatEmojiScreenCurrent;
