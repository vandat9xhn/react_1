import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeGroupName.propTypes = {};

//
function ChatBdChangeGroupName({ user, group_name }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdChangeGroupName">
            <span>
                {getYouOrName({ user: user })}
                {' change the conversation name to '}
                {group_name}
            </span>
        </div>
    );
}

export default ChatBdChangeGroupName;
