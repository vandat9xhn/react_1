import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { content_pic_name_props } from '../../_prop-types/_CommonPropTypes';
//
import IconsAction from '../../_icons_svg/icons_action/IconsAction';
//
import IconDiv from '../some_div/icon_div/IconDiv';
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
function UserAdd({ user, content, num_action_friend, handleSendAddFriend }) {
    //
    // const [state_obj, setStateObj] = useState({
    //     added: false,
    // })

    // console.log(num_action_friend);
    //
    function onSendAddFriend() {
        handleSendAddFriend(user.id);
    }

    return (
        <div className="UserAdd padding-8px">
            <div className="UserAdd_row flex-between-center">
                <div className="flex-grow-1 overflow-hidden">
                    <PictureName user={user} content={content} />
                </div>

                <div
                    className="UserAdd_btn padding-8px bg-ccc brs-8px hv-bg-s-through cursor-pointer"
                    onClick={onSendAddFriend}
                >
                    <IconDiv Icon={IconsAction} y={200}>
                        <strong className="UserAdd_btn-title text-secondary text-nowrap">
                            Add friend
                        </strong>
                    </IconDiv>
                </div>
            </div>
        </div>
    );
}

export default UserAdd;
