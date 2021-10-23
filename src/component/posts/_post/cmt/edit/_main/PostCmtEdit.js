import React from 'react';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../../../waiting/circle_loading/CircleLoading';
import PostCmtEditInput from '../input/PostCmtEditInput';

//
PostCmtEdit.propTypes = {};

//
function PostCmtEdit({ text, vid_pics, is_fetching, handleEdit, cancelEdit }) {
    // -----

    //
    if (is_fetching) {
        <div className="display-flex-center pointer-events-none">
            <CircleLoading is_fetching={is_fetching} />
        </div>;
    }

    //
    return (
        <div className="PostCmtEdit">
            <PostCmtEditInput
                text={text}
                vid_pics={vid_pics}
                cancelEdit={cancelEdit}
                handleEdit={handleEdit}
            />
        </div>
    );
}

export default PostCmtEdit;
