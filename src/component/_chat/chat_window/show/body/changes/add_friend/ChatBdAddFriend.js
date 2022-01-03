import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdAddFriend.propTypes = {};

//
function ChatBdAddFriend({ user, admin }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdAddFriend">
            {getYouOrName({ user: admin })}
            {' added '}
            {getYouOrName({ user: user })}
            {' to this group.'}
        </div>
    );
}

export default ChatBdAddFriend;
