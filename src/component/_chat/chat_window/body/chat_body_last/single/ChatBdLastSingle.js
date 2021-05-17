import React from 'react';
import PropTypes from 'prop-types';
//
import './ChatBdLastSingle.scss';

//
function ChatBdLastSingle(props) {
    const { friend_user, is_friend } = props;

    //
    return (
        <div className="ChatBdLastSingle">
            <div className="ChatBdLastSingle_pic">
                <img src={friend_user.picture} alt="" />
            </div>

            <div className="ChatBdLastSingle_name">
                {friend_user.first_name + ' ' + friend_user.last_name}
            </div>

            {is_friend ? (
                <div className="ChatBdLastSingle_info">
                    You are friend on web ReactJs and Django
                </div>
            ) : (
                <div className="ChatBdLastSingle_info">
                    You are not friend, make friend now
                </div>
            )}
        </div>
    );
}

ChatBdLastSingle.propTypes = {
    friend_user: PropTypes.object,
    is_friend: PropTypes.bool,
};

export default ChatBdLastSingle;
