import React from 'react';
import PropTypes from 'prop-types';
//
import { content_pic_name_props } from '../../_prop-types/_CommonPropTypes';
//
import ActionsProfileCase from '../actions_profile/case/_main/ActionsProfileCase';
import PictureName from '../picture_name/pic_name/PictureName';
//
import './UserAdd.scss';

//
UserAdd.propTypes = {
    user: PropTypes.object,
    content: content_pic_name_props,
    action_name: PropTypes.string,

    handleSendAddFriend: PropTypes.func,
};

UserAdd.defaultProps = {};

//
function UserAdd({ user, content, action_name, handleSendAddFriend }) {
    //
    function handleAction(action_name = '') {
        console.log(action_name);
        action_name == 'add_friend' && handleSendAddFriend(user.id);
    }

    return (
        <div className="UserAdd padding-8px">
            <div className="UserAdd_row flex-between-center">
                <div className="flex-grow-1 overflow-hidden">
                    <PictureName user={user} content={content} />
                </div>

                <div>
                    <ActionsProfileCase
                        action_case={action_name}
                        user_id={user.id}
                        // use_title={use_title}
                        // is_at_body={is_at_body}
                        // class_action_contain={class_action_contain}
                        handleAction={handleAction}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserAdd;
