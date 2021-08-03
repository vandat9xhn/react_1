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
        <div className="HeaderMessFriend padding-8px" onClick={onOpenMessage}>
            <div className="display-flex justify-content-center">
                <div>
                    <div className="HeaderMessFriend_pic display-flex justify-content-center">
                        <img
                            className="HeaderMessFriend_img brs-50"
                            src={picture}
                            alt=""
                            width="60"
                            height="60"
                        />
                    </div>

                    <div className="HeaderMessFriend_name">
                        <div className="text-align-center label-field">
                            {last_name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderMessFriend;
