import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
import { context_post } from '../../../../_context/post/ContextPost';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import { getBgColorOrImg } from '../../../../_some_function/getBgColorOrImg';
import { getTypeVidOrPic } from '../../../../_some_function/VideoOrImage';
//
import {
    handle_API_ContentMoreHistory_R,
    handle_API_History_L,
    handle_API_MoreContent_R,
    handle_API_Permission_U,
    handle_API_PostUpdate_R,
    handle_API_Post_D,
    handle_API_Post_U,
} from '../../../../_handle_api/post/HandleAPIPost';
import { handle_API_FbUserTagDetail_L } from '../../../../_handle_api/post/cu_user_tag';
//
import { openScreenConfirm } from '../../../_screen/type/confirm/ScreenConfirm';
import { openScreenHistory } from '../../../_screen/type/history/ScreenHistory';
import { openScreenPermission } from '../../../_screen/type/permission/_main/ScreenPermission';
import { openScreenWithElm } from '../../../_screen/type/with_elm/ScreenWithElm';
import { openScreenUserAdd } from '../../../_screen/type/user_add/_main/ScreenUserAdd';
//
import { useForceUpdate } from '../../../../_hooks/UseForceUpdate';
import { useScreenFetching } from '../../../../_hooks/UseScreenFetching';
//
import VirtualScroll from '../../../virtual_scroll/VirtualScroll';
import ContentMore from '../../../content_more/Content_more';
//
import CUPost from '../../common/create_update_post/_main/CUPost';
import VidPicsPost from '../vid_pics/_main/VidPicsPost';
import Info from '../../common/info/_main/InfoWs';
import CommentsWs from '../../common/ws_comments/_main/CommentsWs';
import LikeShareCmt from '../../common/like_share_cmt/_main/LikeShareCmtWs';
import PostHistory from '../history/_main/PostHistory';
import CUPostMb from '../../common/cu_post_mobile/_main/CUPostMb';
import PostHead from '../head/_main/PostHead';
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
    const {
        is_del,

        id,
        user,
        vid_pics,
        bg_obj,
        content_obj,
        permission_post,
        emoji_obj,
        user_tag_arr,
        user_tag_count,
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

    //
    const forceUpdate = useForceUpdate();
    const handleScreenFetching = useScreenFetching();

    // ------- HEAD

    //
    function openPermissionPost() {
        openScreenPermission({
            openScreenFloor: openScreenFloor,
            permission: permission_post,
            handleChoosePermission: handleChoosePermission,
        });
    }

    //
    function openTagUser() {
        openScreenUserAdd({
            openScreenFloor: openScreenFloor,
            title: 'People',
            handle_API_UserAdd_L: (c_count) =>
                handle_API_FbUserTagDetail_L({ c_count: c_count }),
        });
    }

    // ----- ACTIONS

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

        const vid_pic_update_arr = data.vid_pics.map((item) => {
            const type =
                getTypeVidOrPic(item.vid_pic) == 'img'
                    ? 'image'
                    : getTypeVidOrPic(item.vid_pic);

            return item.type == 'image'
                ? {
                      id: item.id,
                      content: item.content,
                      vid_pic: item.vid_pic,
                      type: type,
                      user_tag_arr: item.user_tag_arr,
                  }
                : {
                      id: item.id,
                      content: item.content,
                      vid_pic: item.vid_pic,
                      thumbnail: item.thumbnail,
                      srt_file: item.srt_file,
                      type: type,
                  };
        });

        const ComponentCUPost = IS_MOBILE ? CUPostMb : CUPost;

        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: (
                <ComponentCUPost
                    title="Update post"
                    title_action="Update"
                    //
                    main_content={data.content}
                    vid_pics={vid_pic_update_arr}
                    emoji_obj={emoji_obj}
                    user_tag_arr={user_tag_arr}
                    //
                    handleCUPost={handleUpdate}
                />
            ),
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

        const {
            main_content,
            c_vid_pics,
            bg_arr,
            bg_ix,
            permission,

            user_tag_arr,
            emoji_obj,
        } = data_update;

        // Do something and force_update
        content_obj.content = main_content;
        content_obj.content_more = '';
        content_obj.has_more_content = false;
        post.vid_pics = c_vid_pics;
        post.bg_obj = bg_ix >= 0 ? bg_arr[bg_ix] : null;
        post.permission_post = permission;
        post.user_tag_arr = user_tag_arr.slice(0, 2);
        post.user_tag_count = user_tag_arr.length;
        post.emoji_obj = emoji_obj;

        forceUpdate();

        closeScreenFloor();
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
            const { data: new_comments } = await handle_API_Cmt_L(id);
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
                        '.Comments_input_contain textarea.CommentInput_textarea'
                    )
                    .focus();
            }, 1);
        }
    }

    //
    if (is_del) {
        return null;
    }

    //
    return (
        <VirtualScroll rootMargin_y={1000}>
            <div className="Post padding-8px bg-primary box-shadow-1 brs-8px-md">
                <div className="Post_head pos-rel">
                    <PostHead
                        post_id={id}
                        user={user}
                        permission={permission_post}
                        emoji_obj={emoji_obj}
                        user_tag_arr={user_tag_arr}
                        user_tag_rest_count={
                            user_tag_count - user_tag_arr.length
                        }
                        updated_time={updated_time}
                        //
                        is_poster={is_poster}
                        //
                        openTagUser={openTagUser}
                        openPermissionPost={openPermissionPost}
                        //
                        openHistoryPost={openHistoryPost}
                        openUpdatePost={openUpdatePost}
                        openDeletePost={openDeletePost}
                        openReportPost={openReportPost}
                        openPermissionPost={openPermissionPost}
                    />
                </div>

                <div className="Post_content">
                    <div
                        className={`Post__text ${
                            bg_obj
                                ? 'Post__text-bg display-flex-center text-align-center font-16px font-700'
                                : ''
                        }`}
                        style={{
                            ...(bg_obj
                                ? {
                                      ...getBgColorOrImg({
                                          is_bg_img: bg_obj.is_bg_img,
                                          bg: bg_obj.bg,
                                      }),
                                      color: bg_obj.color,
                                  }
                                : {}),
                        }}
                    >
                        <div className="max-h-100per overflow-y-auto scroll-thin">
                            <ContentMore
                                content_obj={content_obj}
                                seeMoreContent={on_API_MoreContent_R}
                            />
                        </div>
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
        </VirtualScroll>
    );
}

export default Post;