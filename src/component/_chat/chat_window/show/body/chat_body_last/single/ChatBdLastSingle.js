import React from 'react';
import PropTypes from 'prop-types';
//
import './ChatBdLastSingle.scss';

//
function ChatBdLastSingle({ friend_user, is_friend }) {
    //
    return (
        <div className="ChatBdLastSingle padding-10px">
            <div className="ChatBdLastSingle_pic display-flex-center">
                <img
                    className="brs-50 border-blur object-fit-cover"
                    src={friend_user.picture}
                    alt=""
                    width="48"
                    height="48"
                />
            </div>

            <div className="ChatBdLastSingle_name margin-y-5px text-align-center font-500">
                {friend_user.first_name} {friend_user.last_name}
            </div>

            <div className="ChatBdLastSingle_info margin-y-5px font-14px text-secondary">
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
