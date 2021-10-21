import React from 'react';
import PropTypes from 'prop-types';
//
import CommentInput from '../../../../../input_img_vid_preview/comment_input/CommentInput';
import CircleLoading from '../../../../../waiting/circle_loading/CircleLoading';

//
PostCmtEdit.propTypes = {};

//
function PostCmtEdit({ text, vid_pics, is_fetching, handleEdit, cancelEdit }) {
    //
    return (
        <div
            className={`PostCmtEdit pos-rel ${
                is_fetching ? 'pointer-events-none opacity-05' : ''
            }`}
        >
            {is_fetching ? (
                <div className="pos-abs-center">
                    <CircleLoading is_fetching={is_fetching} />
                </div>
            ) : null}
            <div>
                <CommentInput
                    old_text={text}
                    old_urls={vid_pics}
                    file_multiple={false}
                    placeholder={'Write a comment...'}
                    handleSend={handleEdit}
                />
            </div>

            <div
                className="padding-6px text-blue font-12px cursor-pointer"
                onClick={cancelEdit}
            >
                Cancel
            </div>
        </div>
    );
}

export default PostCmtEdit;
