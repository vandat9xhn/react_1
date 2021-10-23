import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_post } from '../../../../../_context/post/ContextPost';
//
import { getReplyTitleAllOrMore } from '../../../../../_some_function/post/cmt_title_more';
//
import IconReply from '../../../../../_icons_svg/icon_reply/IconReply';
//
import CommentPost from '../../../../input_img_vid_preview/comment_post/CommentPost';
import ScreenBlurShowMore from '../../../../_screen/components/part/foot/ScreenBlurShowMore';
//
import SubWs from '../sub_ws/_main/SubWs';
//
import './SubsWs.scss';

//
SubsWs.propTypes = {};

//
function SubsWs({
    cmt_id,
    is_poster,
    subs,
    count_sub,
    //
    open_input_sub,
    focusInputSub,
}) {
    //
    const count_sub_left = count_sub - subs.length;

    //
    const {
        ws_send,
        ws_type_sub,
        is_main_vid_pic,

        handle_API_Sub_L,
        handle_API_Sub_C,
    } = useContext(context_post);

    //
    const [fetching_sub, setFetchingSub] = useState(false);

    // ------

    //
    async function onGetSubsWs() {
        setFetchingSub(true);

        const { data } = await handle_API_Sub_L({ cmt_id: cmt_id });
        subs.push(...data);

        setFetchingSub(false);
    }

    //
    async function onSendSub(content, files) {
        const { content: new_content, vid_pic } = await handle_API_Sub_C({
            cmt_id: cmt_id,
            data: {
                content: content,
                vid_pic: files[0],
            },
            is_vid_pic: is_main_vid_pic,
        });

        ws_send({
            type: ws_type_sub + '_input',
            content: new_content,
            file: vid_pic,
        });
    }

    //
    return (
        <div className="SubsWs">
            {count_sub_left >= 1 ? (
                <div className="sub-contain text-secondary">
                    {subs.length || open_input_sub ? (
                        <div className="cmt-connect-straight cmt-connect-straight-1-child"></div>
                    ) : null}

                    <div className="cmt-connect-curved cmt-connect-curved-1"></div>

                    <div className="display-flex align-items-center">
                        <IconReply class_icon="margin-x-5px" />

                        <ScreenBlurShowMore
                            title={getReplyTitleAllOrMore({
                                count_left: count_sub_left,
                                is_all: subs.length == 0,
                            })}
                            is_show_more={count_sub_left > 0}
                            is_fetching={fetching_sub}
                            handleShowMore={onGetSubsWs}
                        />
                    </div>
                </div>
            ) : null}

            <div className="SubsWs_list display-flex col-reverse">
                {subs.map((sub, sub_ix) => (
                    <div className="SubsWs_item" key={sub.id}>
                        <SubWs
                            is_poster={is_poster}
                            sub={sub}
                            // Flex col-reverse => the first does not have straight-1
                            has_straight_1={open_input_sub || sub_ix > 0}
                            // 
                            focusInputSub={focusInputSub}
                        />
                    </div>
                ))}
            </div>

            {open_input_sub ? (
                <div className="SubsWs_input sub-contain">
                    <div className="cmt-connect-curved cmt-connect-curved-1"></div>

                    <div className="sub-input">
                        <CommentPost
                            is_sub={true}
                            placeholder={'Write a public comment...'}
                            handleSend={onSendSub}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default SubsWs;
