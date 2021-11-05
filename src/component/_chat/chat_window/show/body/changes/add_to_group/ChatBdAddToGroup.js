import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdAddToGroup.propTypes = {};

//
function ChatBdAddToGroup({ user, friend }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdAddToGroup text-align-center font-12px text-secondary">
            {getYouOrName({
                user_id: user.id,
                user_name: `${user.first_name} ${user.last_name}`,
            })}
            {' added '}
            {getYouOrName({
                user_id: friend.id,
                user_name: `${friend.first_name} ${friend.last_name}`,
            })}
            {' to this group.'}
        </div>
    );
}

export default ChatBdAddToGroup;
