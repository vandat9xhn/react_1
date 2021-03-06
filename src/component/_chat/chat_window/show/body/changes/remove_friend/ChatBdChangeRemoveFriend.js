import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeRemoveFriend.propTypes = {};

//
function ChatBdChangeRemoveFriend({ admin, user }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdChangeRemoveFriend">
            <span>
                {getYouOrName({ user: admin })}
                {' removed '}
                {getYouOrName({ user: user })}
                {' from the group.'}
            </span>
        </div>
    );
}

export default ChatBdChangeRemoveFriend;
