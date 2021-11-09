import React from 'react';
import PropTypes from 'prop-types';
//
import { Group_emoji_obj } from '../../../../../../../_groups_icon/emoji/_main';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeEmoji.propTypes = {};

//
function ChatBdChangeEmoji({ user, emoji }) {
    //
    const Emoji = Group_emoji_obj[emoji.name];

    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdChangeEmoji">
            <span>
                {getYouOrName({ user: user })}
                {' set the emoji to '}
            </span>
            <span>
                <Emoji size_icon="11px" />
            </span>
            <span>{'.'}</span>
        </div>
    );
}

export default ChatBdChangeEmoji;
