import React, { useContext } from "react";
import PropTypes from "prop-types";
//
import { context_api } from "../../../../../../_context/ContextAPI";
//
import "./MessageFriend.scss";

//
MessageFriend.propTypes = {
    friend_id: PropTypes.number,
    picture: PropTypes.string,
    last_name: PropTypes.string,
    closeMessage: PropTypes.func,
};

//
function MessageFriend(props) {
    const { friend_id, picture, last_name, closeMessage } = props;
    //
    const { openMessage } = useContext(context_api);

    //
    function onOpenMessage() {
        openMessage(friend_id);
        closeMessage();
    }

    //
    return (
        <div className="MessageFriend" onClick={onOpenMessage}>
            <div className="display-flex justify-content-center">
                <div>
                    <div className="MessageFriend_pic display-flex justify-content-center">
                        <img
                            className="MessageFriend_img brs-50"
                            src={picture}
                            alt=""
                            width="50"
                            height="50"
                        />
                    </div>

                    <div className="MessageFriend_name">
                        <div className="text-align-center label-field">
                            {last_name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageFriend;
