import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeRemoveAdmin.propTypes = {};

//
function ChatBdChangeRemoveAdmin({ user, friend }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdChangeRemoveAdmin">
            {user ? (
                <span>
                    {getYouOrName({ user: user })}
                    {' removed '}
                    {getYouOrName({ user: friend })}
                    {' as a group admin.'}
                </span>
            ) : (
                <span>
                    {getYouOrName({ user: friend })}
                    {' removed themselves as a group admin.'}
                </span>
            )}
        </div>
    );
}

export default ChatBdChangeRemoveAdmin;
