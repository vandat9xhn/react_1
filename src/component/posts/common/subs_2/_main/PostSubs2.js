import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_post } from '../../../../../_context/post/ContextPost';
//
import { getReplyTitleAllOrMore } from '../../../../../_some_function/post/cmt_title_more';
//
// 
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
import IconReply from '../../../../../_icons_svg/icon_reply/IconReply';
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
    parent_id,
    cmt_id,
    sub_id,

    subs_2,
    count_sub_2,

    use_cmt_connect,
    has_straight_1,

    open_input_sub_2,
    focusInputSub2,
}) {
    //
    const {
        ws_send,
        ws_type_sub,
        is_main_vid_pic,

        handle_API_Sub_L,
        handle_API_Sub_C,
    } = useContext(context_post);

    //
    const count_sub_2_left = count_sub_2 - subs_2.length;

    //
    const [fetching_sub, setFetchingSub] = useState(false);

    //
    const forceUpdate = useForceUpdate();

    //
    async function onGetPostSubs2() {
        setFetchingSub(true);

        const { data } = await handle_API_Sub_L({
            sub_id: sub_id,
            is_sub_2: 1,
            is_vid_pic: is_main_vid_pic,
        });
        subs_2.push(...data);

        setFetchingSub(false);
    }

    //
    async function onSendSub2(content, files) {
        const data = await handle_API_Sub_C({
            is_sub_2: 1,
            sub_id: sub_id,
            data: {
                content: content,
                vid_pic: files[0],
                is_sub_2: 1,
            },
            is_vid_pic: is_main_vid_pic,
        });

        subs_2.unshift(data)
        forceUpdate()

        ws_send({
            type: ws_type_sub + '_input',
            parent_id: parent_id,
            cmt_id: cmt_id,
            sub_id: sub_id,
            content: data.content_obj.content,
            vid_pic: data.vid_pic,
        });
    }

    //
    return (
        <div>
            {count_sub_2_left >= 1 ? (
                <div className="sub-2-contain text-secondary">
                    {use_cmt_connect ? (
                        <React.Fragment>
                            {has_straight_1 ? (
                                <div className="cmt-connect-straight cmt-connect-straight-1-child"></div>
                            ) : null}
                            <div className="cmt-connect-curved cmt-connect-curved-2"></div>

                            {subs_2.length || open_input_sub_2 ? (
                                <div className="cmt-connect-straight cmt-connect-straight-2-child"></div>
                            ) : null}
                        </React.Fragment>
                    ) : null}

                    <div className="display-flex align-items-center">
                        <IconReply class_icon="margin-x-5px" />

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
                </div>
            ) : null}

            <div className="PostSubs2_list display-flex col-reverse">
                {subs_2.map((sub_2, sub_2_ix) => (
                    <div className="PostSubs2_item" key={sub_2.id}>
                        <PostSub2
                            sub_2={sub_2}
                            open_input_sub_2={open_input_sub_2}
                            //
                            use_cmt_connect={use_cmt_connect}
                            has_straight_1={has_straight_1}
                            // Flex col-reverse => the first does not have straight-1
                            has_straight_2={sub_2_ix > 0 || open_input_sub_2}
                            //
                            focusInputSub2={focusInputSub2}
                        />
                    </div>
                ))}
            </div>

            {open_input_sub_2 ? (
                <div className="PostSubs2_input sub-2-contain">
                    {use_cmt_connect ? (
                        <React.Fragment>
                            {has_straight_1 ? (
                                <div className="cmt-connect-straight cmt-connect-straight-1-child"></div>
                            ) : null}
                            <div className="cmt-connect-curved cmt-connect-curved-2"></div>
                        </React.Fragment>
                    ) : null}

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
