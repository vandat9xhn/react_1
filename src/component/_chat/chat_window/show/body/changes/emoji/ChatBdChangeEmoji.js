import React from 'react';
import PropTypes from 'prop-types';
//
import { GROUP_EMOJI_OBJ } from '../../../../../../../_groups_icon/emoji/_main';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeEmoji.propTypes = {};

//
function ChatBdChangeEmoji({ user, emoji }) {
    //
    const Emoji = GROUP_EMOJI_OBJ[emoji.name];

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
