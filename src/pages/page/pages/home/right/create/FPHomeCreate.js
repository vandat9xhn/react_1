import React from 'react';
import PropTypes from 'prop-types';
// 
import AddNewPost from '../../../../../../component/posts/common/add_new_post/_main/AddNewPost';

// 
FPHomeCreate.propTypes = {
    
};

// 
function FPHomeCreate(props) {

    // ------

    // 
    function handleCreatePost(params) {
        console.log(params);
    }

    // 
    return (
        <div className="FPHomeCreate">
            <AddNewPost handleCreatePost={handleCreatePost} />
        </div>
    );
}

export default FPHomeCreate;