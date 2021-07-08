import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { useForceUpdate } from '../../../../_hooks/UseForceUpdate';
import { useScreenFetching } from '../../../../_hooks/UseScreenFetching';
//
import PictureName from '../../../picture_name/pic_name/PictureName';
import ContentMore from '../../../content_more/Content_more';
//
import { openScreenConfirm } from '../../../_screen/type/confirm/ScreenConfirm';
import { openScreenHistory } from '../../../_screen/type/history/ScreenHistory';
import { openScreenPermission } from '../../../_screen/type/permission/_main/ScreenPermission';
import { openScreenUpdate } from '../../../_screen/type/update/_main/ScreenUpdate';
//
import { context_post } from '../../__context_post/ContextPost';
//
import {
    handle_API_ContentMoreHistory_R,
    handle_API_History_L,
    handle_API_MoreContent_R,
    handle_API_Permission_U,
    handle_API_PostUpdate_R,
    handle_API_Post_D,
    handle_API_Post_U,
} from '../../__handle_api/PostHandleAPI';
//
import CUPost from '../../common/create_update_post/_main/CUPost';
import VidPicsPost from '../vid_pics/_main/VidPicsPost';
import PermissionPost from '../../common/permission/_main/PermissionPost';
import Info from '../../common/info/_main/InfoWs';
import ActionsPost from '../actions_post/ActionsPost';
import CommentsWs from '../../common/ws_comments/_main/CommentsWs';
import LikeShareCmt from '../../common/like_share_cmt/_main/LikeShareCmtWs';
import PostHistory from '../history/_main/PostHistory';
//
import './Post.scss';

//
Post.propTypes = {
    post: PropTypes.object,
};

//
function Post({
    post,
    post_ix,
    //
    enabled_share,
    // enabled_like,
    // enabled_cmt,
}) {
    //
    const {
        user: c_user,
        openScreenFloor,
        closeScreenFloor,
    } = useContext(context_api);

    const { handle_API_Cmt_L } = useContext(context_post);

    //
    const forceUpdate = useForceUpdate();
    const handleScreenFetching = useScreenFetching();

    //
    const {
        is_del,

        id,
        user,
        vid_pics,
        content_obj,
        permission_post,
        updated_time,

        likes,
        count_like,
        user_type_like,

        shares,
        count_share,
        count_unique_share,
        count_user_shared,

        comments,
        count_comment,
    } = post;

    const is_poster = c_user.id == user.id;

    //
    const [open_input, setOpenInput] = useState(false);
    const [fetching_cmt, setFetchingCmt] = useState(false);

    //
    const ref_comments = useRef(null);

    /* -------------------- OPEN ACTIONS ----------------- */

    //
    function openHistoryPost() {
        openScreenHistory({
            openScreenFloor: openScreenFloor,

            title: 'History',
            handle_API_History_L: on_API_History_L,
            HisComponent: PostHistory,
            handle_API_MoreContent: handle_API_ContentMoreHistory_R,
        });
    }
    //
    async function openUpdatePost() {
        const data = await handleScreenFetching(() =>
            handle_API_PostUpdate_R(id)
        );

        const vid_pics_update = data.vid_pics.map((item) => ({
            id: item.id,
            content: item.content,
            vid_pic: item.vid_pic,
            type: item.vid_pic.endsWith('./mp4') ? 'video' : 'image',
        }));

        openScreenUpdate({
            openScreenFloor: openScreenFloor,

            title: 'Update',
            UpdateComponent: CUPost,

            main_content: data.content,
            vid_pics: vid_pics_update,
            handleCUPost: handleUpdate,
        });
    }

    //
    function openDeletePost() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: 'Do you really want to delete this post?',
            handleConfirm: handleDelete,
        });
    }

    //
    function openReportPost() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Report',
            notification: 'Do you want to report this post?',
            handleConfirm: handleReport,
        });
    }

    //
    function openPermissionPost() {
        openScreenPermission({
            openScreenFloor: openScreenFloor,
            permission: permission_post,
            handleChoosePermission: handleChoosePermission,
        });
    }

    /* --------------- ON HANDLE ACTIONS ---------------- */

    //
    function on_API_History_L(c_count) {
        return handle_API_History_L(id, c_count);
    }

    //
    async function handleUpdate(data_update) {
        const data = await handleScreenFetching(() =>
            handle_API_Post_U(id, data_update)
        );
        // Do something and force_update
        content_obj.content = data_update.main_content;
        content_obj.content_more = '';
        content_obj.has_more_content = false;
        post.vid_pics = data_update.c_vid_pics;
        forceUpdate();

        closeScreenFloor();
        console.log(data_update);
    }

    //
    async function handleDelete() {
        await handleScreenFetching(() => handle_API_Post_D(id));
        post.is_del = true;
        forceUpdate();
    }

    //
    function handleReport() {
        //  Do something
        console.log('Report: ' + id);
    }

    //
    async function handleChoosePermission(ix) {
        await handleScreenFetching(() => handle_API_Permission_U(id, ix));
        post.permission_post = ix;
        forceUpdate();
    }

    /* ------------------------------ */

    //
    function on_API_MoreContent_R() {
        return handle_API_MoreContent_R(id);
    }

    //
    async function handleClickBtnCmt() {
        if (!comments.length && count_comment) {
            setFetchingCmt(true);
            const [new_comments] = await handle_API_Cmt_L(id);
            comments.push(...new_comments);
            setFetchingCmt(false);
            focusInput();
        } else {
            focusInput();
        }
    }

    //
    function focusInput() {
        if (c_user.id) {
            !open_input && setOpenInput(true);
            setTimeout(() => {
                ref_comments.current
                    .querySelector(
                        '.Comments_input-contain textarea.CommentInput_textarea'
                    )
                    .focus();
            }, 1);
        }
    }

    //
    return (
        !is_del && (
            <div className="Post box-shadow-1 brs-5px">
                <div className="Post_head position-rel">
                    <div className="Post__user">
                        <PictureName
                            user={user}
                            content={
                                <PermissionPost
                                    permission_post={+permission_post}
                                    updated_time={updated_time}
                                />
                            }
                        />
                    </div>

                    <div className="Post__actions">
                        <ActionsPost
                            is_poster={is_poster}
                            openHistoryPost={openHistoryPost}
                            openUpdatePost={openUpdatePost}
                            openDeletePost={openDeletePost}
                            openReportPost={openReportPost}
                            openPermissionPost={openPermissionPost}
                        />
                    </div>
                </div>

                <div className="Post_content">
                    <div className="Post__text">
                        <ContentMore
                            content_obj={content_obj}
                            seeMoreContent={on_API_MoreContent_R}
                        />
                    </div>

                    <div className="Post__pic">
                        <VidPicsPost post_ix={post_ix} vid_pics={vid_pics} />
                    </div>
                </div>

                <div className="Post_Info">
                    <Info
                        parent_id={id}
                        count_comment={count_comment}
                        //
                        likes={likes}
                        count_like={count_like}
                        user_type_like={user_type_like}
                        //
                        enabled_share={enabled_share}
                        shares={shares}
                        count_share={count_share}
                        count_unique_share={count_unique_share}
                        handleClickBtnCmt={handleClickBtnCmt}
                    />
                </div>

                <div className="Post_btn">
                    <LikeShareCmt
                        parent_id={id}
                        //
                        enabled_like={true}
                        user_type_like={user_type_like}
                        //
                        enabled_cmt={true}
                        count_comment={count_comment}
                        //
                        enabled_share={true}
                        count_share={count_share}
                        count_user_shared={count_user_shared}
                        //
                        handleClickBtnCmt={handleClickBtnCmt}
                    />
                </div>

                <div ref={ref_comments} className="Post_comment">
                    <CommentsWs
                        is_poster={is_poster}
                        parent_id={id}
                        comments={comments}
                        count_comment={count_comment}
                        open_input={open_input}
                        fetching_first_cmt={fetching_cmt}
                    />
                </div>
            </div>
        )
    );
}

export default Post;
