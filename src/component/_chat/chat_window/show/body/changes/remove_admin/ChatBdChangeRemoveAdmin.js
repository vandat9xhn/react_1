import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeRemoveAdmin.propTypes = {};

//
function ChatBdChangeRemoveAdmin({ user, admin }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdChangeRemoveAdmin">
            {admin ? (
                <span>
                    {getYouOrName({ user: admin })}
                    {' removed '}
                    {getYouOrName({ user: user })}
                    {' as a group admin.'}
                </span>
            ) : (
                <span>
                    {getYouOrName({ user: user })}
                    {' removed themselves as a group admin.'}
                </span>
            )}
        </div>
    );
}

export default ChatBdChangeRemoveAdmin;
