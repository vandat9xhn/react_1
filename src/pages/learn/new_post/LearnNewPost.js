import React from 'react';
import PropTypes from 'prop-types';
//
import AddNewPost from '../../../component/posts/common/add_new_post/AddNewPost';
// 
import './LearnNewPost.scss';

//
LearnNewPost.propTypes = {};

//
function LearnNewPost(props) {
    //
    return (
        <div className="LearnNewPost">
            <AddNewPost title="Create post" />
        </div>
    );
}

export default LearnNewPost;
