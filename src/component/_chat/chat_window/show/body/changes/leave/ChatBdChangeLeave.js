import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeLeave.propTypes = {};

//
function ChatBdChangeLeave({ user }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdChangeLeave">
            <span>
                {getYouOrName({ user: user })}
                {' left this group.'}
            </span>
        </div>
    );
}

export default ChatBdChangeLeave;
