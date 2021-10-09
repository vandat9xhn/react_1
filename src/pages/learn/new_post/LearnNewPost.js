import React from 'react';
import PropTypes from 'prop-types';
//
import AddNewPost from '../../../component/posts/common/add_new_post/_main/AddNewPost';
// 
import './LearnNewPost.scss';

//
LearnNewPost.propTypes = {};

//
function LearnNewPost(props) {
    // 
    function handleCreatePost(params) {
        console.log(params);
    }

    //
    return (
        <div className="LearnNewPost">
            <AddNewPost handleCreatePost={handleCreatePost} />
        </div>
    );
}

export default LearnNewPost;
