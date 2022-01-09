import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
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
//
import PostHead from '../head/_main/PostHead';
import PostText from '../text/_main/PostText';
import PostTagAndEmoji from '../tag_emoji/_main/PostTagAndEmoji';

import Info from '../../common/info/_main/InfoWs';
import LikeShareCmt from '../../common/like_share_cmt/_main/LikeShareCmtWs';
import CommentsWs from '../../common/ws_comments/_main/CommentsWs';
import VidPicsPost from '../vid_pics/_main/VidPicsPost';

import CUPostMb from '../../common/cu_post_mobile/_main/CUPostMb';
import CUPost from '../../common/create_update_post/_main/CUPost';
import PostHistory from '../history/_main/PostHistory';
//
import './Post.scss';
import { context_post } from '../../../../_context/post/ContextPost';
import { openScreenNotice } from '../../../_screen_once/notice/ScreenNotice';

//
Post.propTypes = {
    post: PropTypes.object,
};

//
function Post({
    post,
    post_ix,
    is_open_input,
    //
    enabled_share,
    // enabled_like,
    // enabled_cmt,
}) {
    //
    const {
        openScreenFloor,
        closeScreenFloor,
        openScreenOnce,
        closeScreenOnce,
    } = useContext(context_api);
    const { ws_send, ws_type_post } = useContext(context_post);

    //
    const {
        is_del,
        is_head_to,

        id,
        post_where,
        user,
        to_user,
        group_obj,
        page_obj,

        vid_pics,
        vid_pic_count,
        content_obj,

        bg_obj,
        emoji_obj,
        user_tag_arr,
        user_tag_count,

        reacted_ix_arr,
        reacted_count,
        user_reacted_ix,

        count_share,
        count_unique_share,
        count_user_shared,

        comments,
        count_comment,

        permission_post,
        updated_time,
    } = post;

    //
    const ref_comments = useRef(null);

    //
    const forceUpdate = useForceUpdate();
    const handleScreenFetching = useScreenFetching();

    // ------- HEAD

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
    function handleAction(action_name = '') {
        console.log(action_name);
        if (action_name == 'edit_audience') {
            openPermissionPost();
        }

        if (action_name == 'history') {
            openHistoryPost();
        }

        if (action_name == 'edit') {
            openUpdatePost();
        }

        if (action_name == 'remove') {
            openDeletePost();
        }

        if (action_name == 'support_report') {
            openReportPost();
        }
    }

    //
    function openPermissionPost() {
        openScreenPermission({
            openScreenFloor: openScreenFloor,
            permission: permission_post,
            handleChoosePermission: handleChoosePermission,
        });
    }

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
            title: 'Move to your recycle bin?',
            notification:
                'Items in your recycle bin will be automatically deleted after 30 days. You can delete them earlier from your recycle bin by going to "Activity log" in your settings.',

            title_no: 'Cancel',
            title_yes: 'Move',
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

    // -------

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
        post.vid_pic_count = c_vid_pics.length;
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

    // ----- CONTENT LIKE SHARE CMT

    //
    function on_API_MoreContent_R() {
        return handle_API_MoreContent_R(id);
    }

    //
    function changeTypeLike(new_type_like) {
        ws_send({
            id: id,
            type: ws_type_post + '_like',
            type_like: new_type_like,
        });

        // ---- FAKE
        if (new_type_like >= 0) {
            if (post.user_reacted_ix < 0) {
                post.reacted_count += 1;
            }
        } else {
            if (post.user_reacted_ix >= 0) {
                post.reacted_count -= 1;
            }
        }

        post.reacted_ix_arr = [
            ...post.reacted_ix_arr.filter(
                (item) => item != post.user_reacted_ix && item != new_type_like
            ),
            ...(new_type_like >= 0 ? [new_type_like] : []),
        ]

            .sort()
            .slice(0, 3);

        if (post.reacted_count > 0 && post.reacted_ix_arr.length == 0) {
            post.reacted_ix_arr = [post.user_reacted_ix];
        }
        post.user_reacted_ix = new_type_like;

        forceUpdate();
    }

    //
    function sharePost() {
        if (count_user_shared < 10) {
            ws_send({
                id: id,
                type: ws_type_post + '_share',
            });
        } else {
            openScreenNotice({
                openScreenOnce: openScreenOnce,
                ComponentNotice: (
                    <div className="display-flex-center w-250px padding-20px brs-10px bg-shadow-5">
                        <div className="padding-y-20px text-align-center font-600 text-white font-17px">
                            You can not share more than 10 times
                        </div>
                    </div>
                ),
            });

            setTimeout(() => {
                closeScreenOnce();
            }, 1500);
        }
    }

    //
    async function handleClickBtnCmt() {
        if (comments.length > 0) {
            return;
        }

        if (count_comment == 0) {
            const btn_open_cmt = ref_comments.current.querySelector(
                '.CommentsWs_open_input'
            );

            btn_open_cmt.click();

            return;
        }

        const btn_more_cmt = ref_comments.current.querySelector(
            '.Comments_more .ScreenBlurShowMore_title'
        );

        btn_more_cmt && btn_more_cmt.click();
    }

    //
    if (is_del) {
        return null;
    }

    //
    return (
        <VirtualScroll rootMargin_y={1000}>
            <div className="Post bg-primary box-shadow-1 brs-8px">
                <div className="Post_head">
                    <PostHead
                        post_id={id}
                        post_where={post_where}
                        permission={permission_post}
                        updated_time={updated_time}
                        //
                        user={user}
                        to_user={to_user}
                        group_obj={group_obj}
                        page_obj={page_obj}
                        //
                        emoji_obj={emoji_obj}
                        user_tag_arr={user_tag_arr}
                        user_tag_rest_count={
                            user_tag_count - user_tag_arr.length
                        }
                        //

                        openTagUser={openTagUser}
                        handleAction={handleAction}
                    />
                </div>

                {is_head_to ? (
                    <div>
                        <PostTagAndEmoji
                            user_tag_arr={user_tag_arr}
                            user_tag_rest_count={
                                user_tag_count - user_tag_arr.length
                            }
                            emoji_obj={emoji_obj}
                            openTagUser={openTagUser}
                        />
                    </div>
                ) : null}

                {content_obj.content ? (
                    <div>
                        <PostText
                            bg_obj={bg_obj}
                            content_obj={content_obj}
                            seeMoreContent={on_API_MoreContent_R}
                        />
                    </div>
                ) : null}

                {vid_pic_count && vid_pics.length ? (
                    <div className="Post_pic">
                        <VidPicsPost
                            post_ix={post_ix}
                            vid_pics={vid_pics}
                            vid_pic_count={vid_pic_count}
                        />
                    </div>
                ) : null}

                <div className="Post_Info">
                    <Info
                        parent_id={id}
                        count_comment={count_comment}
                        //
                        reacted_ix_arr={reacted_ix_arr}
                        reacted_count={reacted_count}
                        user_reacted_ix={user_reacted_ix}
                        //
                        enabled_share={enabled_share}
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
                        user_reacted_ix={user_reacted_ix}
                        //
                        enabled_cmt={true}
                        count_comment={count_comment}
                        //
                        enabled_share={true}
                        count_share={count_share}
                        count_user_shared={count_user_shared}
                        //
                        changeTypeLike={changeTypeLike}
                        sharePost={sharePost}
                        handleClickBtnCmt={handleClickBtnCmt}
                    />
                </div>

                <div ref={ref_comments} className="Post_comment">
                    <CommentsWs
                        parent_id={id}
                        comments={comments}
                        count_comment={count_comment}
                        //
                        use_cmt_connect={
                            post_where == 'group' || post_where == 'page'
                        }
                        initial_open_input={is_open_input}
                    />
                </div>
            </div>
        </VirtualScroll>
    );
}

export default Post;
