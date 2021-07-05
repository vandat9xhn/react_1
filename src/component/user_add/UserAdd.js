import React from 'react';
import PropTypes from 'prop-types';
//
import { content_pic_name_props } from '../../_prop-types/_CommonPropTypes';
//
import IconsAction from '../../_icons_svg/icons_action/IconsAction';
import PictureName from '../picture_name/pic_name/PictureName';
//
import './UserAdd.scss';

//
UserAdd.propTypes = {
    user: PropTypes.object,
    content: content_pic_name_props,
    handleSendAddFriend: PropTypes.func,
    num_action_friend: PropTypes.number,
};

UserAdd.defaultProps = {
    num_action_friend: 0,
};

//
function UserAdd(props) {
    const { user, content, num_action_friend, handleSendAddFriend } = props;
    //
    function onSendAddFriend() {
        handleSendAddFriend(user.id);
    }

    return (
        <div className="UserAdd">
            <div className="UserAdd_row">
                <div>
                    <PictureName user={user} content={content} />
                </div>

                <div
                    onClick={onSendAddFriend}
                    className="cursor-pointer hv-opacity"
                >
                    <IconsAction y={200} />
                </div>
            </div>
        </div>
    );
}

export default UserAdd;
