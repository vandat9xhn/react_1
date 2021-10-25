import React from 'react';
import PropTypes from 'prop-types';
//
import PostHeadUser from '../user/_main/PostHeadUser';
import PostHeadAction from '../action/_main/PostHeadAction';

//
PostHead.propTypes = {};

//
function PostHead({
    post_id,
    user,
    permission,
    emoji_obj,
    user_tag_arr,
    user_tag_rest_count,
    updated_time,

    is_poster,

    openTagUser,
    openPermissionPost,

    openHistoryPost,
    openUpdatePost,
    openDeletePost,
    openReportPost,
}) {
    //
    return (
        <div className="PostHead">
            <div className="PostHead_row flex-between-center">
                <div>
                    <PostHeadUser
                        post_id={post_id}
                        user={user}
                        permission={permission}
                        emoji_obj={emoji_obj}
                        user_tag_arr={user_tag_arr}
                        user_tag_rest_count={user_tag_rest_count}
                        updated_time={updated_time}
                        //
                        openTagUser={openTagUser}
                    />
                </div>

                <div>
                    <PostHeadAction
                        is_poster={is_poster}
                        openHistoryPost={openHistoryPost}
                        openUpdatePost={openUpdatePost}
                        openDeletePost={openDeletePost}
                        openReportPost={openReportPost}
                        openPermissionPost={openPermissionPost}
                    />
                </div>
            </div>
        </div>
    );
}

export default PostHead;
