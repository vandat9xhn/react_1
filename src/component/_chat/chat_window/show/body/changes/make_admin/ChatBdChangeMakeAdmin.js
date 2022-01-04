import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeMakeAdmin.propTypes = {};

//
function ChatBdChangeMakeAdmin({ user, admin }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    return (
        <div className="ChatBdChangeMakeAdmin">
            <span>
                {getYouOrName({ user: admin })}
                {' added '}
                {getYouOrName({ user: user })}
                {' as a group admin.'}
            </span>
        </div>
    );
}

export default ChatBdChangeMakeAdmin;
