import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { WsSend } from '../../../../../../../_some_function/WsSend';
// 
import PicNameContent from '../../../../../../picture_name/pic_name_content/PicNameContent';
//
import './ChatScreenAddFriendItem.scss';

//
ChatScreenAddFriendItem.propTypes = {
    user: PropTypes.object,
};

//
function ChatScreenAddFriendItem({ user, ws }) {
    //
    const [was_added, setWasAdded] = useState(false);

    //
    function onAddFriendToGroupWs() {
        if (!was_added) {
            WsSend(ws, {
                type: 'add_friend',
                user_id: user.id,
            });

            setWasAdded(true)
        }
    }

    //
    return (
        <div
            className={`ChatScreenAddFriendItem padding-8px ${
                was_added
                    ? 'opacity-05 pointer-events-none'
                    : 'cursor-pointer hv-cl-blue hv-bg-blur'
            }`}
            onClick={onAddFriendToGroupWs}
        >
            <div className="ChatScreenAddFriendItem_row flex-between-center">
                <div>
                    <PicNameContent user={user} />
                </div>

                <div className="ChatScreenAddFriendItem_add label-field padding-8px">
                    {was_added ? 'Added' : '+'}
                </div>
            </div>
        </div>
    );
}

export default ChatScreenAddFriendItem;
