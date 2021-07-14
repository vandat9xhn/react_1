import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_post } from '../../../../../_context/post/ContextPost';
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
    is_commenter,
    subs,
    count_sub,
    //
    open_input_sub,
    focusInputSub,
}) {
    //
    const [fetching_sub, setFetchingSub] = useState(false);
    //
    const { ws_send, ws_type_sub, handle_API_Sub_L, handle_API_Sub_C } =
        useContext(context_post);

    //
    async function onGetSubsWs() {
        setFetchingSub(true);
        //
        const [data, count] = await handle_API_Sub_L(cmt_id);
        subs.push(...data);
        setFetchingSub(false);
    }

    //
    async function onSendSub(content, files) {
        const [new_content, vid_pic] = await handle_API_Sub_C(cmt_id, {
            content: content,
            vid_pic: files[0],
        });

        ws_send({
            type: ws_type_sub + '_input',
            content: new_content,
            file: vid_pic,
        });
    }

    //
    return (
        <div>
            <ScreenBlurShowMore
                title={`See ${count_sub - subs.length} subs`}
                is_show_more={count_sub > subs.length}
                is_fetching={fetching_sub}
                handleShowMore={onGetSubsWs}
            />

            <div className="SubsWs_list">
                {subs.map((sub) => (
                    <div className="SubsWs_item" key={`SubsWs_${sub.id}`}>
                        <SubWs
                            is_commenter={is_commenter}
                            sub={sub}
                            focusInputSub={focusInputSub}
                        />
                    </div>
                ))}
            </div>

            <div className="Subs_input">
                <div className={open_input_sub ? '' : 'display-none'}>
                    <CommentPost is_sub={true} handleSend={onSendSub} />
                </div>
            </div>
        </div>
    );
}

export default SubsWs;
