import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
import { context_post } from '../../../../__context_post/ContextPost';
import { useForceUpdate } from '../../../../../../_custom_hooks/UseForceUpdate';
//
// import { handle_API_HistoryCmt_L } from '../../../../__handle_api/PostHandleAPI';

import SubsWs from '../../../ws_subs/_main/SubsWs';
import CommentWsFoot from '../foot/CommentWsFoot';
import CommentWsHead from '../head/CommentWsHead';
import CommentWsBody from '../body/CommentWsBody';
import CmtSubUpdate from '../../../ws_actions/update_component/_main/CmtSubUpdate';
import CmtSubHistory from '../../../ws_actions/history_component/_main/CmtSubHistory';
//
import './CommentWs.scss';

//
CommentWs.propTypes = {};

//
function CommentWs({ comment, is_poster }) {
    //
    const {
        ws_send,
        ws_type_cmt,
        handle_API_MoreContentCmt_R,
        handle_API_HistoryCmt_L,
        handle_API_Cmt_U,
        handle_API_MoreContentHisCmt_R,
    } = useContext(context_post);

    const {
        user: c_user,

        openScreenConfirm,
        openScreenHistory,
        openScreenUpdate,
        openScreenFetching,

        closeScreenUpdate,
        closeScreenFetching,
    } = useContext(context_api);

    //
    const {
        id,
        user,
        vid_pic,
        updated_time,
        content_obj,

        likes,
        count_like,
        user_type_like,

        subs,
        count_sub,
    } = comment;

    //
    const [open_input_sub, setOpenInputSub] = useState(false);

    //
    const ref_subs_ws = useRef(null);

    //
    const forceUpdate = useForceUpdate();

    /* -------------------------------- */

    //
    function onSeeMoreContentCmt() {
        return handle_API_MoreContentCmt_R(id);
    }

    /* ---------------- SUB ---------------- */

    //
    function focusInputSub() {
        if (c_user.id) {
            !open_input_sub && setOpenInputSub(true);
            setTimeout(() => {
                ref_subs_ws.current
                    .querySelector('.Subs_input textarea.CommentInput_textarea')
                    .focus();
            }, 1);
        }
    }

    /* ---------------- WS ---------------- */

    //
    function changeTypeLike(new_type_like) {
        ws_send({
            id: id,
            type: ws_type_cmt + '_like',
            new_type_like: new_type_like,
        });
    }

    /* --------------- OPEN SCREEN ACTIONS ---------------- */

    //
    function openHistoryCmt() {
        openScreenHistory('History', on_API_HistoryCmt_L, CmtSubHistory, {
            handle_API_MoreContent: handle_API_MoreContentHisCmt_R,
        });
    }

    //
    function openUpdateCmt() {
        openScreenUpdate('Update', CmtSubUpdate, {
            text: content_obj.content,
            vid_pic: vid_pic,
            handleUpdate: handleUpdate,
        });
    }

    //
    function openDeleteCmt() {
        openScreenConfirm(
            'Delete',
            'Do you really want to delete this post?',
            handleDelete
        );
    }

    //
    function openReportCmt() {
        openScreenConfirm(
            'Report',
            'Do you want to report this post?',
            handleReport
        );
    }

    /* --------------- ON HANDLE ACTIONS ---------------- */

    //
    function on_API_HistoryCmt_L(c_count) {
        return handle_API_HistoryCmt_L(id, c_count);
    }

    //
    async function handleUpdate(data) {
        openScreenFetching();
        //
        const { text, file, vid_pic_obj } = data;

        const data_update = {
            text: text,
        };
        if ((!file && !vid_pic_obj.url) || file) {
            data_update['file'] = file;
        }

        await handle_API_Cmt_U(id, data_update);
        //
        content_obj.content = text;
        comment.vid_pic = vid_pic_obj.url;
        forceUpdate();
        closeScreenUpdate();
        closeScreenFetching();
    }
    //
    function handleDelete() {
        comment.is_del = true;
        forceUpdate();
    }
    //
    function handleReport() {
        //  Do something
        console.log('Report: ' + id);
    }

    //
    return (
        !comment.is_del && (
            <div className="CommentWs">
                <div className="display-flex">
                    <div className="CommentWs_user-pic">
                        <Link to={`/profile/${user.id}`}>
                            <img
                                className="brs-50"
                                src={user.picture}
                                alt=""
                                width="45"
                                height="45"
                            />
                        </Link>
                    </div>

                    <div className="Comment_contain">
                        <div className="Comment_head">
                            <CommentWsHead
                                user={user}
                                is_user={c_user.id == user.id}
                                is_poster={is_poster}
                                content_obj={content_obj}
                                onSeeMoreContentCmt={onSeeMoreContentCmt}
                                //
                                openHistoryCmt={openHistoryCmt}
                                openUpdateCmt={openUpdateCmt}
                                openDeleteCmt={openDeleteCmt}
                                openReportCmt={openReportCmt}
                            />
                        </div>

                        <div className="Comment_body">
                            <CommentWsBody vid_pic={vid_pic} />
                        </div>

                        <div className="Comment_foot">
                            <CommentWsFoot
                                id={id}
                                likes={likes}
                                count_like={count_like}
                                user_type_like={user_type_like}
                                updated_time={updated_time}
                                //
                                focusInputSub={focusInputSub}
                                changeTypeLike={changeTypeLike}
                            />
                        </div>

                        <div className="Comment_subs" ref={ref_subs_ws}>
                            <SubsWs
                                cmt_id={id}
                                is_commenter={c_user.id == user.id}
                                subs={subs}
                                count_sub={count_sub}
                                open_input_sub={open_input_sub}
                                focusInputSub={focusInputSub}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default CommentWs;
