import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './ChatBdLastGroup.scss';

//
function ChatBdLastGroup({ room_users, room_creator }) {
    //
    const name = (() => {
        const { first_name, last_name } = room_users.find(
            (item) => item.user.id == room_creator.id
        ).user;

        return `${first_name} ${last_name}`;
    })();

    //
    return (
        <div className="ChatBdLastGroup">
            <div className="ChatBdLastGroup_contain">
                <div className="ChatBdLastGroup_row display-flex justify-content-center flex-wrap">
                    {room_users.map((room_user, user_ix) => (
                        <div
                            className="ChatBdLastGroup_pic"
                            key={`ChatBdLastGroup_user_${user_ix}`}
                        >
                            <Link
                                to={`/profile/${room_user.user.id}`}
                                title={room_user.user.last_name}
                            >
                                <img
                                    className="brs-50"
                                    src={room_user.user.picture}
                                    alt=""
                                    width="40"
                                    height="40"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div className="width-fit-content margin-auto font-italic">
                {name} had created this group
            </div>
        </div>
    );
}

ChatBdLastGroup.propTypes = {
    room_users: PropTypes.array,
};

export default ChatBdLastGroup;
