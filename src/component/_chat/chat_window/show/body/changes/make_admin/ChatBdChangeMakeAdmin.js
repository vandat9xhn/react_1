import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeMakeAdmin.propTypes = {};

//
function ChatBdChangeMakeAdmin({ user, friend }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdChangeMakeAdmin">
            <span>
                {getYouOrName({ user: user })}
                {' added '}
                {getYouOrName({ user: friend })}
                {' as a group admin.'}
            </span>
        </div>
    );
}

export default ChatBdChangeMakeAdmin;
