import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import CommentInput from '../../../../../input_img_vid_preview/comment_input/CommentInput';
//
import './PostCmtEditInput.scss';

//
PostCmtEditInput.propTypes = {};

//
function PostCmtEditInput({ text, vid_pics, handleEdit, cancelEdit }) {
    //
    const ref_main = useRef(null);

    //
    useEffect(() => {
        const textarea =
            // document.getElementsByTagName('textarea')[0];
            ref_main.current.querySelector('textarea.CommentInput_textarea');

        textarea.focus();
        textarea.selectionStart = textarea.selectionEnd = textarea.value.length;

        textarea.addEventListener('keydown', handleKeyDown);

        return () => {
            textarea.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // -----

    //
    function handleKeyDown(e) {
        if (e.keyCode == 27) {
            cancelEdit();
        }
    }

    //
    return (
        <div ref={ref_main}>
            <CommentInput
                old_text={text}
                old_urls={vid_pics}
                file_multiple={false}
                placeholder={'Write a comment...'}
                handleSend={handleEdit}
            />

            <div className="user-select-none">
                <div
                    className="PostCmtEditInput_btn_confirm"
                    onClick={cancelEdit}
                >
                    Cancel
                </div>
            </div>
        </div>
    );
}

export default PostCmtEditInput;
