import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { openScreenUserAdd } from '../../../../../../_screen/type/user_add/_main/ScreenUserAdd';
//
import { handle_API_FbUserTagDetail_L } from '../../../../../../../_handle_api/post/cu_user_tag';
//
import PostHead from '../../../../../../posts/_post/head/_main/PostHead';
import PostTagAndEmoji from '../../../../../../posts/_post/tag_emoji/_main/PostTagAndEmoji';
import PostText from '../../../../../../posts/_post/text/_main/PostText';
//
import FbScPagePostItemContent from '../content/FbScPagePostItemContent';
import FbScPagePostItemInfo from '../info/_main/FbScPagePostItemInfo';
//
import './FbScPagePostItem.scss';

//
FbScPagePostItem.propTypes = {};

//
function FbScPagePostItem({ post }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const {
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

        count_comment,

        permission_post,
        updated_time,
    } = post;

    //
    const ref_link_content = useRef(null);

    // -----

    //
    function handleClickBtnCmt() {
        ref_link_content.current.click();
    }

    //
    function handleAction(action_name = '') {
        console.log(action_name);
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

    //
    return (
        <div className="FbScPagePostItem fb-search-page-right-item-contain brs-8px bg-primary box-shadow-1">
            <div className="FbScPagePostItem_head padding-16px border-bottom-blur">
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
                    user_tag_rest_count={user_tag_count - user_tag_arr.length}
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

            <div className="FbScPagePostItem_content padding-x-16px padding-top-16px padding-bottom-10px">
                <div className="margin-bottom-12px">
                    <Link
                        ref={ref_link_content}
                        className="display-block pos-rel color-inherit"
                        to={`/posts/${id}`}
                    >
                        {bg_obj && bg_obj.bg ? (
                            <PostText
                                bg_obj={bg_obj}
                                content_obj={content_obj}
                            />
                        ) : (
                            <FbScPagePostItemContent
                                content={content_obj.content}
                                vid_pics={vid_pics}
                                vid_pic_count={vid_pic_count}
                                permission={permission_post}
                                updated_time={updated_time}
                            />
                        )}

                        <div className="pos-abs-100"></div>
                    </Link>
                </div>

                <div>
                    <FbScPagePostItemInfo
                        post_id={id}
                        count_comment={count_comment}
                        reacted_ix_arr={reacted_ix_arr}
                        reacted_count={reacted_count}
                        user_reacted_ix={user_reacted_ix}
                        handleClickBtnCmt={handleClickBtnCmt}
                    />
                </div>
            </div>
        </div>
    );
}

export default FbScPagePostItem;
