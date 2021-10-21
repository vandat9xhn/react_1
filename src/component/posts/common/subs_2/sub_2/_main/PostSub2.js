import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
import { context_post } from '../../../../../../_context/post/ContextPost';
//
import { useCmtEdit } from '../../../../../../_hooks/post/useCmtEditing';
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
//
import { openScreenConfirm } from '../../../../../_screen/type/confirm/ScreenConfirm';
import { openScreenHistory } from '../../../../../_screen/type/history/ScreenHistory';
import { openScreenLike } from '../../../../../_screen/type/like/_main/ScreenLike';
//
import PostCmt from '../../../../_post/cmt/_main/PostCmt';
import CmtSubHistory from '../../../ws_actions/history_component/_main/CmtSubHistory';
//
import './PostSub2.scss';

//
PostSub2.propTypes = {};

//
function PostSub2({
    is_poster,
    sub_2,

    has_straight_1,
    has_straight_2,

    open_input_sub_2,
    focusInputSub2,
}) {
    //
    const {
        ws_send,
        ws_type_sub,

        handle_API_MoreContentSub2_R,
        handle_API_Sub2_U,
        handle_API_LikeSub2_L,

        handle_API_HistorySub2_L,
        handle_API_MoreContentHisSub2_R,
    } = useContext(context_post);

    const { user: c_user, openScreenFloor } = useContext(context_api);

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
    } = sub_2;

    //
    const [state_obj, setStateObj] = useState({
        is_editing: false,
        is_fetching_edit: false,
    });

    const { is_fetching_edit, is_editing } = state_obj;

    //
    const forceUpdate = useForceUpdate();

    //
    const { openEditing, handleEdit, cancelEdit } = useCmtEdit({
        cmt_obj: sub_2,
        setStateObj: setStateObj,

        handle_API_MoreContentCmt_R: handle_API_MoreContentSub2_R,
        handle_API_Cmt_U: handle_API_Sub2_U,
    });

    // ------

    //
    function seeMoreContentSub2() {
        return handle_API_MoreContentSub2_R(id);
    }

    //
    function handleClickVidPic() {}

    //
    function startReply() {
        focusInputSub2();
    }

    //
    function sendAward() {}

    // -----

    //
    function on_API_LikeSub2_L() {
        return handle_API_LikeSub2_L(id, 0, -1);
    }

    //
    function onOpenScreenLike() {
        openScreenLike({
            openScreenFloor: openScreenFloor,
            handle_API_Like_L: on_API_LikeSub2_L,
            type_like: -1,
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
            is_commenter: user.id == c_user.id,
            is_poster: is_poster,
        });
    }

    //
    function handleAction(action_name = '') {
        handleFbPostCmtAction({
            action_name: action_name,
            openEdit: openEditing,
            openDelete: openDeleteSub2,
            openReport: openReportSub2,
        });
    }

    // -----

    //
    function openHistorySub2() {
        openScreenHistory({
            openScreenFloor: openScreenFloor,
            title: 'Edit history',
            handle_API_History_L: (c_count) =>
                handle_API_HistorySub2_L(id, c_count),
            HisComponent: CmtSubHistory,
            handle_API_MoreContent: handle_API_MoreContentHisSub2_R,
        });
    }

    //
    function openDeleteSub2() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: 'Do you really want to delete this comment?',
            handleConfirm: handleDelete,
        });
    }

    //
    function openReportSub2() {
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
        sub_2.is_del = true;
        forceUpdate();
    }
    //
    function handleReport() {
        //  Do something
        console.log('Report: ' + id);
    }

    //
    if (sub_2.is_del) {
        return null;
    }

    //
    return (
        <div className="PostSub2">
            <div className="sub-2-contain">
                {has_straight_1 ? (
                    <div className="cmt-connect-straight cmt-connect-straight-1-child"></div>
                ) : null}
                <div className="cmt-connect-curved cmt-connect-curved-2"></div>

                {has_straight_2 ? (
                    <div className="cmt-connect-straight cmt-connect-straight-2-child"></div>
                ) : null}

                <PostCmt
                    user_id={user.id}
                    user_name={`${user.first_name} ${user.last_name}`}
                    user_pic={user.picture}
                    user_pic_size={24}
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
                    seeMoreContent={seeMoreContentSub2}
                    handleClickVidPic={handleClickVidPic}
                    startReply={startReply}
                    sendAward={sendAward}
                    openHistory={openHistorySub2}
                    //
                    changeTypeLike={changeTypeLike}
                    on_API_LikeAll_L={on_API_LikeSub2_L}
                    onOpenDetailLikeAll={onOpenScreenLike}
                    //
                    handle_API_Action_L={handle_API_Action_L}
                    handleAction={handleAction}
                    handleEdit={handleEdit}
                    cancelEdit={cancelEdit}
                />
            </div>
        </div>
    );
}

export default PostSub2;
