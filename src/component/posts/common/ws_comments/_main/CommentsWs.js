import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_post } from '../../../../../_context/post/ContextPost';
//
import ScreenBlurShowMore from '../../../../_screen/components/part/foot/ScreenBlurShowMore';
import CommentPost from '../../../../input_img_vid_preview/comment_post/CommentPost';
import FetchingDiv from '../../../../some_div/fetching/FetchingDiv';
//
import CommentWs from '../ws_comment/_main/CommentWs';
//
import './CommentsWs.scss';
import IconCaret from '../../../../../_icons_svg/_icon_caret/IconCaret';
import { getCmtTitleMore } from '../../../../../_some_function/post/cmt_title_more';

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
    const count_comment_left = count_comment - comments.length;

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

        const { data: new_comments } = await handle_API_Cmt_L(
            parent_id,
            comments.length
        );
        comments.push(...new_comments);

        setFetchingCmt(false);
    }

    //
    async function onSendCmt(content, files) {
        const { content: new_content, vid_pic } = await handle_API_Cmt_C(
            parent_id,
            {
                content: content,
                vid_pic: files[0],
            }
        );

        ws_send({
            type: ws_type_cmt + '_input',
            content: new_content,
            file: vid_pic,
        });
    }

    //
    return (
        <div className="Comments">
            <div className="flex-between-center padding-y-10px">
                <div>
                    <ScreenBlurShowMore
                        title={getCmtTitleMore({
                            count_left: count_comment_left,
                        })}
                        is_show_more={count_comment_left >= 1}
                        is_fetching={fetching_cmt || fetching_first_cmt}
                        FetchingComponent={FetchingDiv}
                        handleShowMore={onGetCommentsWs}
                    />
                </div>

                <div className="display-flex align-items-center cursor-pointer font-600 text-secondary">
                    <span className="margin-right-5px">All comments</span>

                    <IconCaret size_icon="15px" fill="currentColor" />
                </div>
            </div>

            <div className="Comments_list display-flex col-reverse">
                {comments.map((comment) => (
                    <CommentWs
                        key={comment.id}
                        is_poster={is_poster}
                        comment={comment}
                    />
                ))}
            </div>

            {open_input ? (
                <div className="Comments_input padding-top-5px padding-x-16px">
                    <CommentPost
                        placeholder={'Write a public comment...'}
                        handleSend={onSendCmt}
                    />
                </div>
            ) : null}
        </div>
    );
}

export default CommentsWs;
