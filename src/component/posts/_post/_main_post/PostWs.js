import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';

import { useForceUpdate } from '../../../../_custom_hooks/UseForceUpdate';
import { useScreenFetching } from '../../../../_custom_hooks/UseScreenFetching';
//
import PictureName from '../../../picture_name/pic_name/PictureName';
import ContentMore from '../../../content_more/Content_more';
//
import { context_post } from '../../__context_post/ContextPost';

import {
    handle_API_ContentMoreHistory_R,
    handle_API_History_L,
    handle_API_MoreContent_R,
    handle_API_Permission_U,
    handle_API_PostUpdate_R,
    handle_API_Post_D,
    handle_API_Post_U,
} from '../../__handle_api/PostHandleAPI';

import CreateUpdatePost from '../../common/create_update_post/_main/CreateUpdatePost';
import VidPicsPost from '../vid_pics/_main/VidPicsPost';
import PermissionPost from '../../common/permission/_main/PermissionPost';
import Info from '../../common/info/_main/InfoWs';
import ActionsPost from '../actions_post/ActionsPost';
import CommentsWs from '../../common/ws_comments/_main/CommentsWs';
import LikeShareCmt from '../../common/like_share_cmt/_main/LikeShareCmtWs';
//
import './Post.scss';
import PostHistory from '../history/_main/PostHistory';

//
Post.propTypes = {
    post: PropTypes.object,
};

Post.defaultProps = {
    post: {},
};

//
function Post(props) {
    //
    const {
        openScreenConfirm,
        openScreenHistory,
        openScreenUpdate,
        openScreenPermission,

        closeScreenUpdate,
    } = useContext(context_api);

    const { handle_API_Cmt_L } = useContext(context_post);

    //
    const forceUpdate = useForceUpdate();
    const handleScreenFetching = useScreenFetching();

    //
    const {
        post,
        post_ix,
        //
        enabled_share,
        // enabled_like,
        // enabled_cmt,
    } = props;

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

    const { content = '', has_more_content = false } = content_obj || {};

    // state
    const [fetching_more_content, setFetchingMoreContent] = useState(false);
    const [open_input, setOpenInput] = useState(false);
    const [fetching_cmt, setFetchingCmt] = useState(false);

    //
    const ref_comments = useRef(null);

    /* -------------------- OPEN ACTIONS ----------------- */

    //
    function openHistoryPost() {
        openScreenHistory('History', on_API_History_L, PostHistory, {
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

        openScreenUpdate('Update', CreateUpdatePost, {
            main_content: data.content,
            vid_pics: vid_pics_update,

            title_action: 'Update',
            handleCreateUpdatePost: handleUpdate,
        });
    }
    //
    function openDeletePost() {
        openScreenConfirm(
            'Delete',
            'Do you really want to delete this post?',
            handleDelete
        );
    }
    //
    function openReportPost() {
        openScreenConfirm(
            'Report',
            'Do you want to report this post?',
            handleReport
        );
    }
    //
    function openPermissionPost() {
        openScreenPermission(permission_post, handleChoosePermission);
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
        closeScreenUpdate();
        console.log(data, data_update);
        // Do something and force_update
        content_obj.content = data_update.main_content;
        content_obj.has_more_content = false;
        forceUpdate();
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

    // More content
    async function on_API_MoreContent_R() {
        setFetchingMoreContent(true);
        const more_content = await handle_API_MoreContent_R(id);
        content_obj.content += more_content;
        content_obj.has_more_content = false;
        setFetchingMoreContent(false);
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
        if (localStorage.is_login == 1) {
            !open_input && setOpenInput(true);
            setTimeout(() => {
                ref_comments.current
                    .querySelector('.Comments_input-contain .Textarea')
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
                            content={content}
                            seeMoreContent={on_API_MoreContent_R}
                            has_more_content={has_more_content}
                            is_fetching={fetching_more_content}
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
