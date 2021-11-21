import React from 'react';
import PropTypes from 'prop-types';
//
import PostHeadLayout from '../../_components/_layout/PostHeadLayout';
import PostHeadAction from '../../_components/action/_main/PostHeadAction';
//
import PostHeadUserLeft from '../left/PostHeadUserLeft';
import PostHeadUserCenterTop from '../center_top/PostHeadUserCenterTop';
import PostHeadUserCenterBottom from '../center_bottom/PostHeadUserCenterBottom';
//
import './PostHeadUser.scss';

//
PostHeadUser.propTypes = {};

//
function PostHeadUser({
    post_id,
    user,
    permission,
    updated_time,

    emoji_obj,
    user_tag_arr,
    user_tag_rest_count,

    openTagUser,
    handleAction,
}) {
    //
    return (
        <div className="PostHeadUser">
            <PostHeadLayout
                left_elm={<PostHeadUserLeft user={user} />}
                center_top_elm={
                    <PostHeadUserCenterTop
                        user={user}
                        emoji_obj={emoji_obj}
                        user_tag_arr={user_tag_arr}
                        user_tag_rest_count={user_tag_rest_count}
                        openTagUser={openTagUser}
                    />
                }
                center_bottom_elm={
                    <PostHeadUserCenterBottom
                        post_id={post_id}
                        permission={permission}
                        updated_time={updated_time}
                    />
                }
                right_elm={
                    <PostHeadAction
                        post_id={post_id}
                        post_type="friend"
                        handleAction={handleAction}
                    />
                }
            />
        </div>
    );
}

export default PostHeadUser;
