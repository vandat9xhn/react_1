import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../../picture_name/pic_name_content/PicNameContent';
//
import './ActionsFriendUser.scss';

//
ActionsFriendUser.propTypes = {
    user: PropTypes.object,
    sendAddFriendToGroupWs: PropTypes.func,
};

//
function ActionsFriendUser({ ix, user, sendAddFriendToGroupWs }) {
    //
    function onAddFriendToGroupWs() {
        sendAddFriendToGroupWs(ix, user.id);
    }

    //
    return (
        <div
            className="ActionsFriendUser padding-8px cursor-pointer hv-cl-blue hv-bg-blur"
            onClick={onAddFriendToGroupWs}
        >
            <div className="ActionsFriendUser_row flex-between-center">
                <div>
                    <PicNameContent user={user} />
                </div>

                <div className="ActionsFriendUser_add label-field padding-8px">
                    +
                </div>
            </div>
        </div>
    );
}

export default ActionsFriendUser;
