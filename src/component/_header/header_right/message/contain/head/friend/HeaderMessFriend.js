import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import './HeaderMessFriend.scss';

//
HeaderMessFriend.propTypes = {
    friend_id: PropTypes.number,
    picture: PropTypes.string,
    last_name: PropTypes.string,
    closeZoom: PropTypes.func,
};

//
function HeaderMessFriend({
    is_mouse_down,
    friend_id,
    picture,
    last_name,
    closeZoom,
}) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    function onOpenMessage() {
        if (!is_mouse_down) {
            openRoomChat(friend_id);
            closeZoom();
        }
    }

    //
    return (
        <div className="HeaderMessFriend padding-4px" onClick={onOpenMessage}>
            <div className="HeaderMessFriend_pic display-flex-center">
                <img
                    className="HeaderMessFriend_img brs-50"
                    src={picture}
                    alt=""
                    width="60"
                    height="60"
                />
            </div>

            <div className="w-100per text-nowrap text-align-center">
                <span className="label-field">
                    {last_name}
                </span>
            </div>
        </div>
    );
}

export default HeaderMessFriend;
