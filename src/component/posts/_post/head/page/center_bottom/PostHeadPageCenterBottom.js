import React from 'react';
import PropTypes from 'prop-types';
//
import PostHeadTimePermission from '../../_components/time_permission/PostHeadTimePermission';

//
PostHeadPageCenterBottom.propTypes = {};

//
function PostHeadPageCenterBottom({ post_id, permission, updated_time }) {
    //
    return (
        <PostHeadTimePermission
            post_id={post_id}
            permission={permission}
            updated_time={updated_time}
        />
    );
}

export default PostHeadPageCenterBottom;
