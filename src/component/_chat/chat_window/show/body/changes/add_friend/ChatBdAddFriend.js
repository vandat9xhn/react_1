import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdAddFriend.propTypes = {};

//
function ChatBdAddFriend({ user, friend }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdAddFriend">
            {getYouOrName({ user: user })}
            {' added '}
            {getYouOrName({ user: friend })}
            {' to this group.'}
        </div>
    );
}

export default ChatBdAddFriend;
