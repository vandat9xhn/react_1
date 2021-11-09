import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeNickname.propTypes = {};

//
function ChatBdChangeNickname({ user, friend, nickname }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdChangeNickname">
            <span>
                {getYouOrName({ user: user })}
                {' set the nickname for '}
                {getYouOrName({ user: friend })}
                {' to '}
                {nickname}.
            </span>
        </div>
    );
}

export default ChatBdChangeNickname;
