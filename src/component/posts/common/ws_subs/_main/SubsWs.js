import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_post } from '../../../../../_context/post/ContextPost';
//
import { getReplyTitleAllOrMore } from '../../../../../_some_function/post/cmt_title_more';
//
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
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
    parent_id,
    cmt_id,

    subs,
    count_sub,

    use_cmt_connect,
    open_input_sub,
    focusInputSub,
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
    const count_sub_left = count_sub - subs.length;

    //
    const [fetching_sub, setFetchingSub] = useState(false);

    //
    const forceUpdate = useForceUpdate();

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
        const data = await handle_API_Sub_C({
            cmt_id: cmt_id,
            data: {
                content: content,
                vid_pic: files[0],
            },
            is_vid_pic: is_main_vid_pic,
        });

        subs.unshift(data)
        forceUpdate()

        ws_send({
            type: ws_type_sub + '_input',
            parent_id: parent_id,
            cmt_id: cmt_id,
            content: data.content_obj.content,
            vid_pic: data.vid_pic,
        });
    }

    //
    return (
        <div className="SubsWs">
            {count_sub_left >= 1 ? (
                <div className="sub-contain text-secondary">
                    {use_cmt_connect ? (
                        <React.Fragment>
                            {subs.length || open_input_sub ? (
                                <div className="cmt-connect-straight cmt-connect-straight-1-child"></div>
                            ) : null}

                            <div className="cmt-connect-curved cmt-connect-curved-1"></div>
                        </React.Fragment>
                    ) : null}

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
                            parent_id={parent_id}
                            cmt_id={cmt_id}
                            sub={sub}
                            // Flex col-reverse => the first does not have straight-1
                            use_cmt_connect={use_cmt_connect}
                            has_straight_1={open_input_sub || sub_ix > 0}
                            //
                            focusInputSub={focusInputSub}
                        />
                    </div>
                ))}
            </div>

            {open_input_sub ? (
                <div className="SubsWs_input sub-contain">
                    {use_cmt_connect ? (
                        <div className="cmt-connect-curved cmt-connect-curved-1"></div>
                    ) : null}

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
