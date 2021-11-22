import React from 'react';
import PropTypes from 'prop-types';
//
import PostHeadLayout from '../../_components/_layout/PostHeadLayout';
import PostHeadAction from '../../_components/action/_main/PostHeadAction';
//
import PostHeadGroupLeft from '../left/PostHeadGroupLeft';
import PostHeadGroupCenterTop from '../center_top/PostHeadGroupCenterTop';
import PostHeadGroupCenterBottom from '../center_bottom/PostHeadGroupCenterBottom';
//
import './PostHeadGroup.scss';

//
PostHeadGroup.propTypes = {};

//
function PostHeadGroup({
    post_id,
    group_obj,
    user,
    // permission,
    updated_time,

    emoji_obj,
    user_tag_arr,
    user_tag_rest_count,

    openTagUser,
    handleAction,
}) {
    //
    return (
        <div className="PostHeadGroup">
            {group_obj.title_at_head ? (
                <div className="margin-x-10px padding-y-10px border-bottom-blur text-secondary">
                    {group_obj.title_at_head}
                </div>
            ) : null}

            <PostHeadLayout
                left_elm={
                    <PostHeadGroupLeft group_obj={group_obj} user={user} />
                }
                center_top_elm={
                    <PostHeadGroupCenterTop
                        group_obj={group_obj}
                        emoji_obj={emoji_obj}
                        user_tag_arr={user_tag_arr}
                        user_tag_rest_count={user_tag_rest_count}
                        openTagUser={openTagUser}
                    />
                }
                center_bottom_elm={
                    <PostHeadGroupCenterBottom
                        post_id={post_id}
                        user={user}
                        privacy={group_obj.privacy}
                        updated_time={updated_time}
                    />
                }
                right_elm={
                    <PostHeadAction
                        post_id={post_id}
                        post_type="group"
                        handleAction={handleAction}
                    />
                }
            />
        </div>
    );
}

export default PostHeadGroup;
