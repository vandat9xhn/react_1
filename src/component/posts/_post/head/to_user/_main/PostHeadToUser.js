import React from 'react';
import PropTypes from 'prop-types';
//
import PostHeadLayout from '../../_components/_layout/PostHeadLayout';
import PostHeadAction from '../../_components/action/_main/PostHeadAction';
import UserToUser from '../../../../common/name_to_name/user/UserToUser';
//
import PostHeadToUserLeft from '../left/PostHeadToUserLeft';
import PostHeadToUserCenterBottom from '../center_bottom/PostHeadToUserCenterBottom';
//
import './PostHeadToUser.scss';

//
PostHeadToUser.propTypes = {};

//
function PostHeadToUser({
    post_id,
    user,
    to_user,

    permission,
    updated_time,

    handleAction,
}) {
    //
    return (
        <div className="PostHeadToUser">
            <PostHeadLayout
                left_elm={<PostHeadToUserLeft user={user} />}
                center_top_elm={<UserToUser user={user} to_user={to_user} />}
                center_bottom_elm={
                    <PostHeadToUserCenterBottom
                        post_id={post_id}
                        permission={permission}
                        updated_time={updated_time}
                    />
                }
                //
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

export default PostHeadToUser;
