import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_post } from '../../../../../_context/post/ContextPost';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { getCmtTitleMore } from '../../../../../_some_function/post/cmt_title_more';
//
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
// 
import IconCaret from '../../../../../_icons_svg/_icon_caret/IconCaret';
import IconUpdate from '../../../../../_icons_svg/icon_update/IconUpdate';
//
import ScreenBlurShowMore from '../../../../_screen/components/part/foot/ScreenBlurShowMore';
import CommentPost from '../../../../input_img_vid_preview/comment_post/CommentPost';
import FetchingDiv from '../../../../some_div/fetching/FetchingDiv';
//
import CommentWs from '../ws_comment/_main/CommentWs';
//
import './CommentsWs.scss';

//
CommentsWs.propTypes = {
    comments: PropTypes.array,
};

CommentsWs.defaultProps = {
    comments: [],
};

//
function CommentsWs({
    parent_id,
    comments,
    count_comment,

    use_cmt_connect,
    initial_open_input = false,
}) {
    //
    const {
        ws_send,
        ws_type_cmt,
        //
        handle_API_Cmt_L,
        handle_API_Cmt_C,
    } = useContext(context_post);

    //
    const count_comment_left = count_comment - comments.length;

    //
    const [fetching_cmt, setFetchingCmt] = useState(false);
    const [open_input, setOpenInput] = useState(initial_open_input);

    // 
    const forceUpdate = useForceUpdate()

    //
    useEffect(() => {
        initial_open_input &&
            comments.length == 0 &&
            // count_comment > 0 &&
            onGetCommentsWs();
    }, []);

    // ------

    //
    async function onGetCommentsWs() {
        !open_input && setOpenInput(true);

        if (count_comment == 0) {
            return;
        }

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
        const data = await handle_API_Cmt_C(parent_id, {
            content: content,
            vid_pic: files[0],
        });

        comments.unshift(data);
        forceUpdate()

        ws_send({
            type: ws_type_cmt + '_input',
            parent_id: parent_id,
            content: data.content_obj.content,
            vid_pic: data.vid_pic,
        });
    }

    //
    return (
        <div
            className={`Comments ${
                comments.length || open_input ? '' : 'display-none'
            }`}
        >
            <div className="Comments_title flex-between-center padding-10px">
                <div className="Comments_more">
                    <ScreenBlurShowMore
                        title={
                            IS_MOBILE ? (
                                <div className="inline-flex align-items-center padding-5px">
                                    <IconUpdate size_icon="14px" />

                                    <span className="margin-left-5px">
                                        Show previous comments
                                    </span>
                                </div>
                            ) : (
                                getCmtTitleMore({
                                    count_left: count_comment_left,
                                })
                            )
                        }
                        is_show_more={count_comment_left >= 1}
                        is_fetching={fetching_cmt}
                        FetchingComponent={FetchingDiv}
                        handleShowMore={onGetCommentsWs}
                    />
                </div>

                <div className="Comments_filter display-flex align-items-center cursor-pointer font-600 text-secondary">
                    <span className="margin-right-5px">All comments</span>

                    <IconCaret size_icon="15px" fill="currentColor" />
                </div>
            </div>

            <div className="Comments_list display-flex col-reverse">
                {comments.map((comment) => (
                    <CommentWs
                        key={comment.id}
                        parent_id={parent_id}
                        comment={comment}
                        use_cmt_connect={use_cmt_connect}
                    />
                ))}
            </div>

            {open_input ? (
                <div className="Comments_input padding-y-5px padding-x-16px">
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
