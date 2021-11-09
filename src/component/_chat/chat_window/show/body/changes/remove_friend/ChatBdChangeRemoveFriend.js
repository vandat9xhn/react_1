import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeRemoveFriend.propTypes = {};

//
function ChatBdChangeRemoveFriend({ user, friend }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdChangeRemoveFriend">
            <span>
                {getYouOrName({ user: user })}
                {' removed '}
                {getYouOrName({ user: friend })}
                {' from the group.'}
            </span>
        </div>
    );
}

export default ChatBdChangeRemoveFriend;
