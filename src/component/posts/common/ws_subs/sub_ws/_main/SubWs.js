import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
import { context_post } from '../../../../../../_context/post/ContextPost';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { getTypeVidOrPic } from '../../../../../../_some_function/VideoOrImage';
//
import { handleFbPostCmtAction } from '../../../../../../_some_function/post/handleFbPostCmtAction';
//
import { handle_API_FbPostCmtAction_L } from '../../../../../../_handle_api/post/cmt_action';
//
import { useCmtEdit } from '../../../../../../_hooks/post/useCmtEditing';
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
import { useScreenFetching } from '../../../../../../_hooks/UseScreenFetching';
//
import { openScreenConfirm } from '../../../../../_screen/type/confirm/ScreenConfirm';
import { openScreenHistory } from '../../../../../_screen/type/history/ScreenHistory';
import { openScreenLike } from '../../../../../_screen/type/like/_main/ScreenLike';
import { openScreenVidPic } from '../../../../../_screen/type/vid_pics/_main/ZoomVidPics';
//
import PostSubs2 from '../../../subs_2/_main/PostSubs2';
import PostCmt from '../../../../_post/cmt/_main/PostCmt';
import CmtSubHistory from '../../../ws_actions/history_component/_main/CmtSubHistory';
//
import './SubWs.scss';

//
SubWs.propTypes = {};

//
function SubWs({
    parent_id,
    cmt_id,
    sub,

    use_cmt_connect,
    has_straight_1,
    focusInputSub,
}) {
    //
    const {
        ws_send,
        ws_type_sub,
        is_main_vid_pic,

        handle_API_MoreContentSub_R,
        handle_API_Sub_U,

        handle_API_LikeSub_L,
        handle_API_SubReactedInfo_L,

        handle_API_HistorySub_L,
        handle_API_MoreContentHisSub_R,
    } = useContext(context_post);

    const { user: c_user, openScreenFloor } = useContext(context_api);

    //
    const {
        id,
        user,

        vid_pic,
        content_obj,
        is_edited,
        updated_time,

        reacted_ix_arr,
        reacted_count,
        user_reacted_ix,

        subs_2,
        count_sub_2,
    } = sub;

    //
    const [state_obj, setStateObj] = useState({
        is_editing: false,
        is_fetching_edit: false,

        open_input_sub_2: false,
    });

    const { is_fetching_edit, is_editing, open_input_sub_2 } = state_obj;

    //
    const ref_subs2_ws = useRef(null);

    //
    const forceUpdate = useForceUpdate();
    const handleScreenFetching = useScreenFetching();

    //
    const { openEditing, handleEdit, cancelEdit } = useCmtEdit({
        cmt_obj: sub,
        setStateObj: setStateObj,

        handle_API_MoreContentCmt_R: handle_API_MoreContentSub_R,
        handle_API_Cmt_U: handle_API_Sub_U,
    });

    // ------

    //
    function seeMoreContentSub() {
        return handle_API_MoreContentSub_R(id);
    }

    //
    function handleClickVidPic() {
        openScreenVidPic({
            openScreenFloor: openScreenFloor,
            urls: [{ url: vid_pic, type: getTypeVidOrPic(vid_pic) }],
            current: 0,
        });
    }

    //
    function startReply() {
        IS_MOBILE || !use_cmt_connect ? focusInputSub() : focusInputSub2();
    }

    //
    function sendAward() {}

    //
    function focusInputSub2() {
        if (!c_user.id || c_user.id <= 0) {
            return;
        }

        setStateObj((state_obj) => ({
            ...state_obj,
            open_input_sub_2: true,
        }));

        setTimeout(() => {
            ref_subs2_ws.current
                .querySelector(
                    '.PostSubs2_input textarea.CommentInput_textarea'
                )
                .focus();
        }, 100);
    }

    // -----

    //
    async function onOpenScreenLike() {
        const { data } = await handleScreenFetching(() =>
            handle_API_SubReactedInfo_L({
                sub_id: id,
                is_vid_pic: is_main_vid_pic,
            })
        );

        openScreenLike({
            openScreenFloor: openScreenFloor,
            handle_API_Like_L: (c_type_like, c_count) =>
                handle_API_LikeSub_L({
                    sub_id: id,
                    type_like: c_type_like,
                    is_vid_pic: is_main_vid_pic,
                    c_count: c_count,
                }),
            type_like: -1,
            reacted_count_arr: data,
        });
    }

    //
    function on_API_LikeSub_L() {
        if (reacted_ix_arr.length <= 1) {
            return handle_API_LikeSub_L({
                sub_id: id,
                c_count: 0,
                type_like: -1,
                is_vid_pic: is_main_vid_pic,
            });
        }

        return handle_API_SubReactedInfo_L({
            sub_id: id,
            is_vid_pic: is_main_vid_pic,
        });
    }

    //
    function changeTypeLike(new_type_like) {
        ws_send({
            id: id,
            type: ws_type_sub + '_like',
            new_type_like: new_type_like,
        });
    }

    // ----- ACTIONS

    //
    function handle_API_Action_L() {
        return handle_API_FbPostCmtAction_L({
            params: {
                type: 'sub',
                id: id,
                is_vid_pic: is_main_vid_pic,
            },
        });
    }

    //
    function handleAction(action_name = '') {
        handleFbPostCmtAction({
            action_name: action_name,
            openEdit: openEditing,
            openDelete: openDeleteSub,
            openReport: openReportSub,
        });
    }

    // -----

    //
    function openHistorySub() {
        openScreenHistory({
            openScreenFloor: openScreenFloor,
            title: 'Edit history',
            handle_API_History_L: (c_count) =>
                handle_API_HistorySub_L(id, c_count),
            HisComponent: CmtSubHistory,
            handle_API_MoreContent: handle_API_MoreContentHisSub_R,
        });
    }

    //
    function openDeleteSub() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: 'Do you really want to delete this comment?',
            handleConfirm: handleDelete,
        });
    }

    //
    function openReportSub() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Report',
            notification: 'Do you want to report this comment?',
            handleConfirm: handleReport,
        });
    }

    // -----

    //
    function handleDelete() {
        sub.is_del = true;
        forceUpdate();
    }
    //
    function handleReport() {
        //  Do something
        console.log('Report: ' + id);
    }

    //
    if (sub.is_del) {
        return null;
    }

    //
    return (
        <div className="SubWs">
            <div className="sub-contain">
                {use_cmt_connect ? (
                    <React.Fragment>
                        {has_straight_1 ? (
                            <div className="cmt-connect-straight cmt-connect-straight-1-child"></div>
                        ) : null}
                        <div className="cmt-connect-curved cmt-connect-curved-1"></div>

                        {open_input_sub_2 || count_sub_2 ? (
                            <div className="cmt-connect-straight cmt-connect-straight-2"></div>
                        ) : null}
                    </React.Fragment>
                ) : null}

                <PostCmt
                    user_id={user.id}
                    user_name={`${user.first_name} ${user.last_name}`}
                    user_pic={user.picture}
                    user_pic_size={24}
                    //
                    content_obj={content_obj}
                    vid_pic={vid_pic}
                    is_edited={is_edited}
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
                    seeMoreContent={seeMoreContentSub}
                    handleClickVidPic={handleClickVidPic}
                    startReply={startReply}
                    sendAward={sendAward}
                    openHistory={openHistorySub}
                    //
                    changeTypeLike={changeTypeLike}
                    on_API_LikeAll_L={on_API_LikeSub_L}
                    onOpenDetailLikeAll={onOpenScreenLike}
                    //
                    handle_API_Action_L={handle_API_Action_L}
                    handleAction={handleAction}
                    handleEdit={handleEdit}
                    cancelEdit={cancelEdit}
                />
            </div>

            <div ref={ref_subs2_ws} className="Comment_subs2">
                {!IS_MOBILE &&
                use_cmt_connect &&
                (count_sub_2 || open_input_sub_2) ? (
                    <PostSubs2
                        parent_id={parent_id}
                        cmt_id={cmt_id}
                        sub_id={id}
                        subs_2={subs_2}
                        count_sub_2={count_sub_2}
                        //
                        use_cmt_connect={use_cmt_connect}
                        has_straight_1={has_straight_1}
                        //
                        open_input_sub_2={open_input_sub_2}
                        focusInputSub2={focusInputSub2}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default SubWs;
