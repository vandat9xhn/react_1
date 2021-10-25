import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
import { context_post } from '../../../../../../_context/post/ContextPost';
//
import { handleFbPostCmtAction } from '../../../../../../_some_function/post/handleFbPostCmtAction';
//
import { handle_API_FbPostCmtAction_L } from '../../../../../../_handle_api/post/cmt_action';
//
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
import { useCmtEdit } from '../../../../../../_hooks/post/useCmtEditing';
//
import { openScreenConfirm } from '../../../../../_screen/type/confirm/ScreenConfirm';
import { openScreenHistory } from '../../../../../_screen/type/history/ScreenHistory';
import { openScreenLike } from '../../../../../_screen/type/like/_main/ScreenLike';
//
import CmtSubHistory from '../../../ws_actions/history_component/_main/CmtSubHistory';
import SubsWs from '../../../ws_subs/_main/SubsWs';
import PostCmt from '../../../../_post/cmt/_main/PostCmt';
//
import './CommentWs.scss';
import { useScreenFetching } from '../../../../../../_hooks/UseScreenFetching';

//
CommentWs.propTypes = {};

//
function CommentWs({ comment, is_poster }) {
    //
    const { user: c_user, openScreenFloor } = useContext(context_api);

    const {
        ws_send,
        ws_type_cmt,
        is_main_vid_pic,

        handle_API_MoreContentCmt_R,
        handle_API_Cmt_U,

        handle_API_LikeCmt_L,
        handle_API_CmtReactedInfo_L,

        handle_API_HistoryCmt_L,
        handle_API_MoreContentHisCmt_R,
    } = useContext(context_post);

    //
    const {
        id,
        user,
        vid_pic,
        updated_time,
        content_obj,

        reacted_ix_arr,
        reacted_count,
        user_reacted_ix,

        subs,
        count_sub,
    } = comment;

    //
    const [state_obj, setStateObj] = useState({
        is_editing: false,
        is_fetching_edit: false,

        open_input_sub: false,
    });

    const { is_fetching_edit, is_editing, open_input_sub } = state_obj;

    //
    const ref_subs_ws = useRef(null);

    //
    const forceUpdate = useForceUpdate();
    const handleScreenFetching = useScreenFetching();

    //
    const { openEditing, handleEdit, cancelEdit } = useCmtEdit({
        cmt_obj: comment,
        setStateObj: setStateObj,

        handle_API_MoreContentCmt_R: handle_API_MoreContentCmt_R,
        handle_API_Cmt_U: handle_API_Cmt_U,
    });

    // ------

    //
    function seeMoreContent() {
        return handle_API_MoreContentCmt_R(id);
    }

    //
    function handleClickVidPic() {}

    //
    function startReply() {
        focusInputSub();
    }

    //
    function sendAward() {}

    //
    function focusInputSub() {
        if (c_user.id) {
            !open_input_sub &&
                setStateObj((state_obj) => ({
                    ...state_obj,
                    open_input_sub: true,
                }));

            setTimeout(() => {
                ref_subs_ws.current
                    .querySelector(
                        '.SubsWs_input textarea.CommentInput_textarea'
                    )
                    .focus();
            }, 1);
        }
    }

    // ------ LIKE

    //
    async function onOpenScreenLike() {
        const { data } = await handleScreenFetching(() =>
            handle_API_CmtReactedInfo_L({
                cmt_id: id,
                is_vid_pic: is_main_vid_pic,
            })
        );

        openScreenLike({
            openScreenFloor: openScreenFloor,
            handle_API_Like_L: (c_type_like, c_count) =>
                handle_API_LikeCmt_L({
                    cmt_id: id,
                    type_like: c_type_like,
                    is_vid_pic: is_main_vid_pic,
                    c_count: c_count,
                }),
            type_like: -1,
            reacted_count_arr: data,
        });
    }

    //
    function on_API_LikeCmt_L() {
        const reacted_type_count = reacted_ix_arr.length;

        if (reacted_type_count == 1) {
            return handle_API_LikeCmt_L({
                cmt_id: id,
                c_count: 0,
                type_like: -1,
                is_vid_pic: is_main_vid_pic,
            });
        }

        return handle_API_CmtReactedInfo_L({
            cmt_id: id,
            is_vid_pic: is_main_vid_pic,
        });
    }

    //
    function changeTypeLike(new_type_like) {
        ws_send({
            id: id,
            type: ws_type_cmt + '_like',
            new_type_like: new_type_like,
        });
    }

    // ----- ACTIONS

    //
    function handle_API_Action_L() {
        return handle_API_FbPostCmtAction_L({
            // is_commenter: user.id == c_user.id,
            is_commenter: true,
            is_poster: is_poster,
            params: {
                type: 'comment',
                is_vid_pic: is_main_vid_pic,
            },
        });
    }

    //
    function handleAction(action_name = '') {
        handleFbPostCmtAction({
            action_name: action_name,
            openEdit: openEditing,
            openDelete: openDeleteCmt,
            openReport: openReportCmt,
        });
    }

    // ------ OPEN ACTIONS

    //
    function openHistoryCmt() {
        openScreenHistory({
            openScreenFloor: openScreenFloor,
            title: 'Edit history',
            handle_API_History_L: (c_count) =>
                handle_API_HistoryCmt_L(id, c_count),
            HisComponent: CmtSubHistory,
            handle_API_MoreContent: handle_API_MoreContentHisCmt_R,
        });
    }

    //
    function openDeleteCmt() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: 'Do you really want to delete this comment?',
            handleConfirm: handleDelete,
        });
    }

    //
    function openReportCmt() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Report',
            notification: 'Do you want to report this post?',
            handleConfirm: handleReport,
        });
    }

    // -------  HANDLE ACTIONS

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

    // -----

    //
    if (comment.is_del) {
        return null;
    }

    //
    return (
        <div className="CommentWs">
            <div className="cmt-contain">
                {count_sub || open_input_sub ? (
                    <div className="cmt-connect-straight cmt-connect-straight-1"></div>
                ) : null}

                <PostCmt
                    user_id={user.id}
                    user_name={`${user.first_name} ${user.last_name}`}
                    user_pic={user.picture}
                    user_pic_size={32}
                    //
                    content_obj={content_obj}
                    vid_pic={vid_pic}
                    updated_time={updated_time}
                    class_scroll_elm={''}
                    //
                    reacted_ix_arr={reacted_ix_arr}
                    reacted_count={reacted_count}
                    user_reacted_ix={user_reacted_ix}
                    //
                    is_editing={is_editing}
                    is_fetching_edit={is_fetching_edit}
                    //
                    seeMoreContent={seeMoreContent}
                    handleClickVidPic={handleClickVidPic}
                    startReply={startReply}
                    sendAward={sendAward}
                    openHistory={openHistoryCmt}
                    //
                    changeTypeLike={changeTypeLike}
                    on_API_LikeAll_L={on_API_LikeCmt_L}
                    onOpenDetailLikeAll={onOpenScreenLike}
                    //
                    handle_API_Action_L={handle_API_Action_L}
                    handleAction={handleAction}
                    handleEdit={handleEdit}
                    cancelEdit={cancelEdit}
                />
            </div>

            <div ref={ref_subs_ws} className="Comment_subs">
                {count_sub ? (
                    <SubsWs
                        cmt_id={id}
                        is_poster={is_poster}
                        subs={subs}
                        count_sub={count_sub}
                        open_input_sub={open_input_sub}
                        focusInputSub={focusInputSub}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default CommentWs;
