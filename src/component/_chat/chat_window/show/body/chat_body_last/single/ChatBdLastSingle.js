import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import './ChatBdLastSingle.scss';

//
function ChatBdLastSingle({ friend_user, is_friend }) {
    //
    return (
        <div className="ChatBdLastSingle">
            <div className="ChatBdLastSingle_pic display-flex-center">
                <Link to={`/profile/${friend_user.id}`}>
                    <img
                        className="brs-50 border-blur object-fit-cover"
                        src={friend_user.picture}
                        alt=""
                        width="48"
                        height="48"
                    />
                </Link>
            </div>

            <div className="ChatBdLastSingle_name padding-top-5px text-align-center font-500">
                {friend_user.first_name} {friend_user.last_name}
            </div>

            <div className="ChatBdLastSingle_info padding-top-5px text-align-center font-14px text-secondary">
                {is_friend ? 'You are friend' : 'You are not friend'}
            </div>
        </div>
    );
}

ChatBdLastSingle.propTypes = {
    friend_user: PropTypes.object,
    is_friend: PropTypes.bool,
};

export default ChatBdLastSingle;
