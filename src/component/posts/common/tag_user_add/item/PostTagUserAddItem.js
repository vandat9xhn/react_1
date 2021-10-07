import React from 'react';
import PropTypes from 'prop-types';
//
import PicNameContent from '../../../../picture_name/pic_name_content/PicNameContent';
// 
import './PostTagUserAddItem.scss';

//
PostTagUserAddItem.propTypes = {};

//
function PostTagUserAddItem({ user, handleTagUser }) {
    //
    function onTagUser() {
        handleTagUser(user);
    }

    //
    return (
        <div
            className="PostTagUserAddItem padding-6px brs-4px cursor-pointer hv-bg-blur text-nowrap"
            onClick={onTagUser}
        >
            <PicNameContent user={user} />
        </div>
    );
}

export default PostTagUserAddItem;
