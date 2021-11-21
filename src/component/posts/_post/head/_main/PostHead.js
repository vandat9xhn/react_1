import React from 'react';
import PropTypes from 'prop-types';
//
import PostHeadUser from '../user/_main/PostHeadUser';
import PostHeadPage from '../page/_main/PostHeadPage';
import PostHeadGroup from '../group/_main/PostHeadGroup';
import PostHeadToUser from '../to_user/_main/PostHeadToUser';

//
PostHead.propTypes = {};

//
function PostHead({
    post_id,
    post_where,
    permission,
    updated_time,

    user,
    to_user,
    group_obj,

    emoji_obj,
    user_tag_arr,
    user_tag_rest_count,

    openTagUser,
    handleAction,
}) {
    //
    return (
        <div className="PostHead">
            {post_where == 'group' ? (
                <PostHeadGroup
                    post_id={post_id}
                    user={user}
                    group_obj={group_obj}
                    permission={permission}
                    updated_time={updated_time}
                    //
                    emoji_obj={emoji_obj}
                    user_tag_arr={user_tag_arr}
                    user_tag_rest_count={user_tag_rest_count}
                    //
                    openTagUser={openTagUser}
                    handleAction={handleAction}
                />
            ) : post_where == 'page' ? (
                <PostHeadPage
                    post_id={post_id}
                    page_obj={user}
                    permission={permission}
                    emoji_obj={emoji_obj}
                    updated_time={updated_time}
                    //
                    handleAction={handleAction}
                />
            ) : to_user ? (
                <PostHeadToUser
                    post_id={post_id}
                    user={user}
                    to_user={to_user}
                    //
                    permission={permission}
                    updated_time={updated_time}
                    //
                    handleAction={handleAction}
                />
            ) : (
                <PostHeadUser
                    post_id={post_id}
                    user={user}
                    //
                    permission={permission}
                    updated_time={updated_time}
                    //
                    emoji_obj={emoji_obj}
                    user_tag_arr={user_tag_arr}
                    user_tag_rest_count={user_tag_rest_count}
                    //
                    openTagUser={openTagUser}
                    handleAction={handleAction}
                />
            )}
        </div>
    );
}

export default PostHead;
