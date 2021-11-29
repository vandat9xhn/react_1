import React from 'react';
import PropTypes from 'prop-types';
//
import AddNewPost from '../../../../../../component/posts/common/add_new_post/_main/AddNewPost';

//
GroupPageDiscussCreate.propTypes = {};

//
function GroupPageDiscussCreate({ handleCreatePost }) {
    //
    return (
        <div className="GroupPageDiscussCreate">
            <AddNewPost
                // title=""
                handleCreatePost={handleCreatePost}
            />
        </div>
    );
}

export default GroupPageDiscussCreate;
