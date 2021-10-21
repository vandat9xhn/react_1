import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_post } from '../../../../../_context/post/ContextPost';
//
import { getReplyTitleAllOrMore } from '../../../../../_some_function/post/cmt_title_more';
//
import CommentPost from '../../../../input_img_vid_preview/comment_post/CommentPost';
import ScreenBlurShowMore from '../../../../_screen/components/part/foot/ScreenBlurShowMore';
//
import PostSub2 from '../sub_2/_main/PostSub2';
//
import './PostSubs2.scss';

//
PostSubs2.propTypes = {};

//
function PostSubs2({
    sub_id,
    is_poster,
    subs_2,
    count_sub_2,
    has_straight_1,

    open_input_sub_2,
    focusInputSub2,
}) {
    //
    const count_sub_2_left = count_sub_2 - subs_2.length;

    //
    const [fetching_sub, setFetchingSub] = useState(false);
    //
    const { ws_send, ws_type_sub, handle_API_Sub_L, handle_API_Sub_C } =
        useContext(context_post);

    //
    async function onGetPostSubs2() {
        setFetchingSub(true);

        const { data } = await handle_API_Sub_L(sub_id);
        subs_2.push(...data);

        setFetchingSub(false);
    }

    //
    async function onSendSub2(content, files) {
        const { content: new_content, vid_pic } = await handle_API_Sub_C(
            sub_id,
            {
                content: content,
                vid_pic: files[0],
            }
        );

        ws_send({
            type: ws_type_sub + '_input',
            content: new_content,
            file: vid_pic,
        });
    }

    //
    return (
        <div>
            {count_sub_2_left >= 1 ? (
                <div className="sub-2-contain">
                    {has_straight_1 ? (
                        <div className="cmt-connect-straight cmt-connect-straight-1-child"></div>
                    ) : null}
                    <div className="cmt-connect-curved cmt-connect-curved-2"></div>
                    {subs_2.length || open_input_sub_2 ? (
                        <div className="cmt-connect-straight cmt-connect-straight-2-child"></div>
                    ) : null}

                    <ScreenBlurShowMore
                        title={getReplyTitleAllOrMore({
                            count_left: count_sub_2_left,
                            is_all: subs_2.length == 0,
                        })}
                        is_show_more={count_sub_2_left > 0}
                        is_fetching={fetching_sub}
                        handleShowMore={onGetPostSubs2}
                    />
                </div>
            ) : null}

            <div className="PostSubs2_list display-flex col-reverse">
                {subs_2.map((sub_2, sub_2_ix) => (
                    <div className="PostSubs2_item" key={sub_2.id}>
                        <PostSub2
                            sub_2={sub_2}
                            is_poster={is_poster}
                            //
                            has_straight_1={has_straight_1}
                            // Flex col-reverse => the first does not have straight-1
                            has_straight_2={sub_2_ix > 0 || open_input_sub_2}
                            //
                            open_input_sub_2={open_input_sub_2}
                            focusInputSub2={focusInputSub2}
                        />
                    </div>
                ))}
            </div>

            {open_input_sub_2 ? (
                <div className="PostSubs2_input sub-2-contain">
                    {has_straight_1 ? (
                        <div className="cmt-connect-straight cmt-connect-straight-1-child"></div>
                    ) : null}
                    <div className="cmt-connect-curved cmt-connect-curved-2"></div>

                    <div className="sub-input">
                        <CommentPost
                            is_sub={true}
                            placeholder={'Write a public comment...'}
                            handleSend={onSendSub2}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default PostSubs2;
