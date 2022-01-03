import React from 'react';
import PropTypes from 'prop-types';
//
import { useYouOrName } from '../../../../../../../_hooks/useYouOrName';

//
ChatBdChangeNickname.propTypes = {};

//
function ChatBdChangeNickname({ user_set, user, nickname }) {
    //
    const { getYouOrName } = useYouOrName();

    //
    const user_set_name = getYouOrName({ user: user_set });
    const user_name = getYouOrName({ user: user });

    //
    return (
        <div className="ChatBdChangeNickname">
            <span>
                {user_set_name}
                {user_set.id != user.id
                    ? `${' set the nickname for '}
                ${user_name}`
                    : ` set ${
                          user_name.toLocaleLowerCase() == 'you'
                              ? 'your'
                              : user.sex == 'male'
                              ? 'his'
                              : 'her'
                      } nickname`}
                {' to '}
                {nickname}.
            </span>
        </div>
    );
}

export default ChatBdChangeNickname;
