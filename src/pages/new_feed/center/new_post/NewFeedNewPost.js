import React from 'react';
import PropTypes from 'prop-types';
// 
import AddNewPost from '../../../../component/posts/common/add_new_post/_main/AddNewPost';

//
NewFeedNewPost.propTypes = {};

//
function NewFeedNewPost({ title_add_new, handleCreatePost }) {
    //
    return (
        <React.Fragment>
            <AddNewPost
                title={title_add_new}
                handleCreatePost={handleCreatePost}
            />
        </React.Fragment>
    );
}

export default NewFeedNewPost;
