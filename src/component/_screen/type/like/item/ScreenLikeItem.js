import React from 'react';
import PropTypes from 'prop-types';
// 
import { type_likes } from '../../../../like/list_type_like/type_likes/TypeLikes';
import UserAdd from '../../../../user_add/UserAdd';

// 
ScreenLikeItem.propTypes = {};

// 
function ScreenLikeItem({user, type_like, handleSendAddFriend}) {
    // 
    return (
        <UserAdd
            user={user}
            handleSendAddFriend={handleSendAddFriend}
            content={type_likes[type_like].component}
        />
    );
}

export default ScreenLikeItem;
