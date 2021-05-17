import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './ChatBdLastGroup.scss';

//
function ChatBdLastGroup(props) {
    const { zoom_users, zoom_creator } = props;

    //
    const name =
        zoom_users.find((item) => item.user.id == zoom_creator.id).user
            .first_name +
        ' ' +
        zoom_users.find((item) => item.user.id == zoom_creator.id).user
            .last_name;

    //
    return (
        <div className="ChatBdLastGroup">
            <div className="ChatBdLastGroup_contain">
                <div className="ChatBdLastGroup_row">
                    {zoom_users.map((zoom_user, user_ix) => (
                        <div
                            className="ChatBdLastGroup_pic"
                            key={`ChatBdLastGroup_user_${user_ix}`}
                        >
                            <Link
                                to={`/profile/${zoom_user.user.id}`}
                                title={zoom_user.user.last_name}
                            >
                                <img
                                    className="brs-50"
                                    src={zoom_user.user.picture}
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
    zoom_users: PropTypes.array,
};

export default ChatBdLastGroup;
