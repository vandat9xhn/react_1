import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import './ChatBdLastGroup.scss';

ChatBdLastGroup.propTypes = {};

//
function ChatBdLastGroup({ room_users, room_creator, room_users_not_leave }) {
    //
    const { user } = useContext(context_api);

    //
    const name =
        user.id == room_creator.profile_model
            ? 'You'
            : (() => {
                  const { first_name, last_name } = room_users.find(
                      (item) => item.user.id == room_creator.id
                  ).user;

                  return `${first_name} ${last_name}`;
              })();

    //
    return (
        <div className="ChatBdLastGroup">
            <div className="ChatBdLastGroup_row display-flex justify-content-center flex-wrap">
                {room_users_not_leave.map((room_user, user_ix) => (
                    <div
                        className="ChatBdLastGroup_pic"
                        key={`ChatBdLastGroup_user_${user_ix}`}
                    >
                        <img
                            className="brs-50"
                            src={room_user.user.picture}
                            alt=""
                            width="40"
                            height="40"
                        />
                    </div>
                ))}
            </div>

            <div className="padding-y-5px text-align-center font-14px font-400 text-secondary">
                {name} created this group
            </div>
        </div>
    );
}

export default ChatBdLastGroup;
