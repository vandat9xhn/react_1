import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_post } from '../../../../../_context/post/ContextPost';
//
import ScreenBlurShowMore from '../../../../_screen/components/part/foot/ScreenBlurShowMore';
import CommentPost from '../../../../input_img_vid_preview/comment_post/CommentPost';
//
import CommentWs from '../ws_comment/_main/CommentWs';
//
import './CommentsWsCommon.scss';
import './CommentsWs.scss';
import './CommentsWsRes.scss';

//
CommentsWs.propTypes = {
    comments: PropTypes.array,
};

CommentsWs.defaultProps = {
    comments: [],
};

//
function CommentsWs({
    is_poster,
    parent_id,
    comments,
    count_comment,

    open_input,
    fetching_first_cmt,
}) {
    //
    const [fetching_cmt, setFetchingCmt] = useState(false);

    //
    const {
        ws_send,
        ws_type_cmt,
        //
        handle_API_Cmt_L,
        handle_API_Cmt_C,
    } = useContext(context_post);

    //
    async function onGetCommentsWs() {
        setFetchingCmt(true);

        const [new_comments] = await handle_API_Cmt_L(
            parent_id,
            comments.length
        );
        comments.push(...new_comments);
        
        setFetchingCmt(false);
    }

    //
    async function onSendCmt(content, files) {
        const [new_content, vid_pic] = await handle_API_Cmt_C(parent_id, {
            content: content,
            vid_pic: files[0],
        });

        ws_send({
            type: ws_type_cmt + '_input',
            content: new_content,
            file: vid_pic,
        });
    }

    //
    return (
        <div className="Comments">
            <ScreenBlurShowMore
                title="More comments..."
                is_show_more={
                    count_comment > comments.length && !!comments.length
                }
                is_fetching={fetching_cmt || fetching_first_cmt}
                handleShowMore={onGetCommentsWs}
            />

            <div className="Comments_list">
                {comments.map((comment) => (
                    <CommentWs
                        key={`Comment_${comment.id}`}
                        is_poster={is_poster}
                        comment={comment}
                    />
                ))}
            </div>

            <div
                className={`Comments_input ${open_input ? '' : 'display-none'}`}
            >
                <div className="Comments_input-contain">
                    <CommentPost handleSend={onSendCmt} />
                </div>
            </div>
        </div>
    );
}

export default CommentsWs;
