import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';

import { is_api_fake } from '../../../../api/_ConstAPI';

import { useForceUpdate } from '../../../../_hooks/UseForceUpdate';
import { useScreenFetching } from '../../../../_hooks/UseScreenFetching';
//
import { openScreenPostVidPic } from '../../../_screen/type/vid_pics_post/ZoomVidPicPost';
//
import ContextPost from '../../../../_context/post/ContextPost';
//
import ComponentSkeleton from '../../../skeleton/component_skeleton/ComponentSkeleton';
import FetchingDiv from '../../../some_div/fetching/FetchingDiv';
import AddNewPost from '../../common/add_new_post/AddNewPost';
import NewFeedStory from '../../../../pages/new_feed/story/NewFeedStory';
//
import {
    handle_API_Like_L,
    handle_API_Post_C,
    handle_API_Share_L,
} from '../../../../_handle_api/post/HandleAPIPost';

import {
    handle_API_Cmt_C,
    handle_API_Cmt_L,
    handle_API_Cmt_U,
    handle_API_HistoryCmt_L,
    handle_API_LikeCmt_L,
    handle_API_MoreContentCmt_R,
    handle_API_MoreContentHisCmt_R,
} from '../../../../_handle_api/post/HandleAPICmt';

import {
    handle_API_HistorySub_L,
    handle_API_LikeSub_L,
    handle_API_MoreContentHisSub_R,
    handle_API_MoreContentSub_R,
    handle_API_Sub_C,
    handle_API_Sub_L,
    handle_API_Sub_U,
} from '../../../../_handle_api/post/HandleAPISub';

import { handleCreateNewPost } from '../../../../_default/post/PostHandleCreate';
//
import Post from '../../_post/_main_post/PostWs';
import PostSkeleton from '../../_post/skeleton/PostSkeleton';
import './Posts.scss';

//
Posts.propTypes = {
    posts: PropTypes.array,
    has_fetched: PropTypes.bool,
    is_fetching: PropTypes.bool,

    title_add_new: PropTypes.string,
    has_add_new: PropTypes.bool,
    has_story: PropTypes.bool,
};
Posts.defaultProps = {
    has_fetched: false,
    is_fetching: false,

    has_add_new: true,
    has_story: false,
};

//
function Posts({
    posts,
    has_fetched,
    is_fetching,
    
    has_add_new,
    has_story,
    title_add_new,
}) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    const ws = useRef(null);
    const c_zoom_post = useRef(-1);

    //
    const forceUpdate = useForceUpdate();
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        ws.current =
            localStorage.is_login && !is_api_fake ? new WebSocket('') : null;

        ws.current != null &&
            (ws.current.onopen = () => {
                console.log('open');
            });
    }, []);

    //
    function handle_fake_ws_send(data) {
        console.log(data);
    }

    /* ----------- VID_PIC ------------ */

    //
    function zoomVidPicPost(index, post_ix) {
        const { id: photo_id } = posts[post_ix].vid_pics[index];
        c_zoom_post.current = index;

        openScreenPostVidPic({
            openScreenFloor: openScreenFloor,
            show_screen_title: true,
            handleDeleteVidPicPost: handleDeleteVidPicPost,
            closeScreen: closeScreenTitle,
        });

        history.pushState('', '', '/post/photos/' + photo_id);
    }

    //
    function closeScreenTitle() {
        c_zoom_post.current = -1;
        closeScreenFloor();

        history.back();
    }

    //
    function handleDeleteVidPicPost(del_vid_pic_ix) {
        console.log(del_vid_pic_ix, posts[c_zoom_post.current].vid_pics);
    }

    /* ----------- CREATE ----------- */

    async function handleCreatePost(data) {
        await handleScreenFetching(() => handle_API_Post_C(data));

        // const new_data = await handle_API_Post_C({
        //     content: data.main_content,
        //     'vid_pics[]': files,
        //     'contents[]': data.vid_pics.map(item => item.content),
        //      'is_friend_wall': location.pathname.search('/profile') >= 0 && user.id =! id,
        // });
        const new_data = handleCreateNewPost(
            data.main_content,
            data.c_vid_pics
        );

        posts.unshift(new_data);

        forceUpdate();
        closeScreenFloor();
    }

    //
    return (
        <div className="Posts">
            <div className="Posts_head">
                {has_story && (
                    <div className="Posts_story">
                        <NewFeedStory />
                    </div>
                )}

                {has_add_new && (
                    <div className="Posts_new">
                        <AddNewPost
                            title={title_add_new}
                            handleCreatePost={handleCreatePost}
                        />
                    </div>
                )}
            </div>

            <div>
                <ContextPost
                    ws_send={ws.current ? ws.current.send : handle_fake_ws_send}
                    ws_type_post="post"
                    ws_type_cmt="cmt"
                    ws_type_sub="sub"
                    zoomVidPicPost={zoomVidPicPost}
                    handle_API_Like_L={handle_API_Like_L}
                    handle_API_Share_L={handle_API_Share_L}
                    //
                    handle_API_MoreContentCmt_R={handle_API_MoreContentCmt_R}
                    handle_API_Cmt_L={handle_API_Cmt_L}
                    handle_API_Cmt_C={handle_API_Cmt_C}
                    handle_API_Cmt_U={handle_API_Cmt_U}
                    handle_API_LikeCmt_L={handle_API_LikeCmt_L}
                    handle_API_HistoryCmt_L={handle_API_HistoryCmt_L}
                    handle_API_MoreContentHisCmt_R={
                        handle_API_MoreContentHisCmt_R
                    }
                    //
                    handle_API_MoreContentSub_R={handle_API_MoreContentSub_R}
                    handle_API_Sub_L={handle_API_Sub_L}
                    handle_API_Sub_C={handle_API_Sub_C}
                    handle_API_Sub_U={handle_API_Sub_U}
                    handle_API_LikeSub_L={handle_API_LikeSub_L}
                    handle_API_HistorySub_L={handle_API_HistorySub_L}
                    handle_API_MoreContentHisSub_R={
                        handle_API_MoreContentHisSub_R
                    }
                >
                    <ComponentSkeleton
                        has_fetched={has_fetched}
                        component={<PostSkeleton />}
                        num={1}
                    />

                    {posts.map((post, index) => (
                        <div key={`Posts_${post.id}`} className="Posts_item">
                            <Post post={post} post_ix={index} />
                        </div>
                    ))}

                    <div className="width-fit-content margin-auto">
                        <FetchingDiv is_fetching={is_fetching && has_fetched} />
                    </div>
                </ContextPost>
            </div>
        </div>
    );
}

export default Posts;
