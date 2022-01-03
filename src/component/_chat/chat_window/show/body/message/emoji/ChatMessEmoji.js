import React from 'react';
import PropTypes from 'prop-types';
//
import { GROUP_EMOJI_OBJ } from '../../../../../../../_groups_icon/emoji/_main';

//
ChatMessEmoji.propTypes = {};

//
function ChatMessEmoji({ emoji }) {
    //
    const Emoji = GROUP_EMOJI_OBJ[emoji.name];

    //
    return (
        <div className="ChatMessEmoji">
            <Emoji size_icon="2.5rem" />
        </div>
    );
}

export default ChatMessEmoji;
