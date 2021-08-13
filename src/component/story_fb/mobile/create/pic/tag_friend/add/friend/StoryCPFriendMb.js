import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../../../../picture_name/pic_name_content/PicNameContent';

//
StoryCPFriendMb.propTypes = {};

//
function StoryCPFriendMb({ user, handleTagFriend }) {
    //
    function onClick() {
        handleTagFriend(user);
    }

    //
    return (
        <div className="padding-8px">
            <PicNameContent user={user} handleClick={onClick} />
        </div>
    );
}

export default StoryCPFriendMb;
