import React from 'react';
import PropTypes from 'prop-types';
//
import PictureName from '../../../../../picture_name/pic_name/PictureName';
//
import './ActionsFriendUser.scss';

//
ActionsFriendUser.propTypes = {
    user: PropTypes.object,
    sendAddFriendToGroupWs: PropTypes.func,
};

//
function ActionsFriendUser(props) {
    const { ix, user, sendAddFriendToGroupWs } = props;
    //
    function onAddFriendToGroupWs() {
        sendAddFriendToGroupWs(ix, user.id);
    }

    return (
        <div className="ActionsFriendUser">
            <div className="ActionsFriendUser_row">
                <div>
                    <PictureName user={user} />
                </div>

                <div
                    className="ActionsFriendUser_add label-field"
                    onClick={onAddFriendToGroupWs}
                >
                    +
                </div>
            </div>
        </div>
    );
}

export default ActionsFriendUser;
