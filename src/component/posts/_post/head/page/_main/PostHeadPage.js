import React from 'react';
import PropTypes from 'prop-types';
//
import PostHeadLayout from '../../_components/_layout/PostHeadLayout';
import PostHeadAction from '../../_components/action/_main/PostHeadAction';
// 
import PostHeadPageLeft from '../left/PostHeadPageLeft';
import PostHeadPageCenterTop from '../center_top/PostHeadPageCenterTop';
import PostHeadPageCenterBottom from '../center_bottom/PostHeadPageCenterBottom';
//
import './PostHeadPage.scss';

//
PostHeadPage.propTypes = {};

//
function PostHeadPage({
    post_id,
    page_obj,
    emoji_obj,
    permission,
    updated_time,

    handleAction,
}) {
    //
    return (
        <div className="PostHeadPage">
            <PostHeadLayout
                left_elm={<PostHeadPageLeft page_obj={page_obj} />}
                center_top_elm={
                    <PostHeadPageCenterTop
                        page_obj={page_obj}
                        emoji_obj={emoji_obj}
                    />
                }
                center_bottom_elm={
                    <PostHeadPageCenterBottom
                        post_id={post_id}
                        permission={permission}
                        updated_time={updated_time}
                    />
                }
                right_elm={
                    <PostHeadAction
                        post_id={post_id}
                        post_type="page"
                        handleAction={handleAction}
                    />
                }
            />
        </div>
    );
}

export default PostHeadPage;
