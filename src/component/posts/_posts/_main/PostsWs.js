import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';

import { is_api_fake } from '../../../../api/_ConstAPI';

import { useMounted } from '../../../../_hooks/useMounted';
import { useForceUpdate } from '../../../../_hooks/UseForceUpdate';
//
import ContextPost from '../../__context_post/ContextPost';
// 
import ComponentSkeleton from '../../../skeleton/component_skeleton/ComponentSkeleton';
import FetchingDiv from '../../../some_div/fetching/FetchingDiv';
import AddNewPost from '../../common/add_new_post/AddNewPost';
import ZoomVidPicItem from '../../_zoom_post/zoom_vid_pic/_main/ZoomVidPicItem';
// 
import {
    handle_API_Cmt_C,
    handle_API_Cmt_L,
    handle_API_Cmt_U,
    handle_API_HistoryCmt_L,
    handle_API_HistorySub_L,
    handle_API_LikeCmt_L,
    handle_API_LikeSub_L,
    handle_API_Like_L,
    handle_API_MoreContentCmt_R,
    handle_API_MoreContentHisCmt_R,
    handle_API_MoreContentHisSub_R,
    handle_API_MoreContentSub_R,
    handle_API_Post_C,
    handle_API_Share_L,
    handle_API_Sub_C,
    handle_API_Sub_L,
    handle_API_Sub_U,
} from '../../__handle_api/PostHandleAPI';

import { handleCreateNewPost } from '../../__handle_create/PostHandleCreate';
//
import './Posts.scss';
import Post from '../../_post/_main_post/PostWs';
import PostSkeleton from '../../_post/skeleton/PostSkeleton';
import { useScreenFetching } from '../../../../_hooks/UseScreenFetching';

//
Posts.propTypes = {
    posts: PropTypes.array,
    has_add_new: PropTypes.bool,
    title_add_new: PropTypes.string,
    has_fetched: PropTypes.bool,
    is_fetching: PropTypes.bool,
};
Posts.defaultProps = {
    has_add_new: true,
    has_fetched: false,
    is_fetching: false,
};

//
function Posts({
    posts,
    has_fetched,
    is_fetching,
    has_add_new,
    title_add_new,
}) {
    //
    const {
        // user,
        closeScreenUpdate,
    } = useContext(context_api);

    //
    const [show_zoom_vid_pic, setShowZoomVidPic] = useState(false);

    //
    const ws = useRef(null);
    const c_zoom_post = useRef(-1);

    //
    const mounted = useMounted();
    const forceUpdate = useForceUpdate();
    const handleScreenFetching = useScreenFetching()

    //
    useEffect(() => {
        window.addEventListener('popstate', handlePopstate);

        ws.current =
            localStorage.is_login && !is_api_fake ? new WebSocket('') : null;

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);

    //
    function handlePopstate() {
        mounted && setShowZoomVidPic(false);
    }

    //
    function handle_fake_ws_send(data) {
        console.log(data);
    }

    /* -------------------------------- VID_PIC --------------------------------- */

    //
    function zoomVidPicPost(index, post_ix) {
        const { id: photo_id } = posts[post_ix].vid_pics[index];
        c_zoom_post.current = index

        history.pushState('', '', '/post/photos/' + photo_id);
        setShowZoomVidPic(true);
    }

    //
    function closeScreenTitle() {
        c_zoom_post.current = -1
        setShowZoomVidPic(false);
        history.back();
    }

    // 
    function handleDeleteVidPicPost(del_vid_pic_ix) {
        console.log(del_vid_pic_ix, posts[c_zoom_post.current].vid_pics);
    }

    /* -------------------------------- CREATE --------------------------------- */

    async function handleCreatePost(data) {
        await handleScreenFetching(() => handle_API_Post_C(data))

        // const new_data = await handle_API_Post_C({
        //     content: data.main_content,
        //     'vid_pics[]': files,
        //     'contents[]': data.vid_pics.map(item => item.content),
        //      'is_friend_wall': location.pathname.search('/profile') >= 0 && user.id =! id,
        // });
        const new_data = handleCreateNewPost(data.main_content, data.c_vid_pics);

        posts.unshift(new_data);
        
        forceUpdate();
        closeScreenUpdate(true);
    }

    //
    return (
        <div className="Posts">
            <div
                className={`Posts_contain ${
                    show_zoom_vid_pic ? 'display-none' : ''
                }`}
            >
                {has_add_new && (
                    <div className="Posts_new">
                        <AddNewPost
                            title={title_add_new}
                            handleCreatePost={handleCreatePost}
                        />
                    </div>
                )}

                <div>
                    <ContextPost
                        ws_send={
                            ws.current ? ws.current.send : handle_fake_ws_send
                        }
                        ws_type_post="post"
                        ws_type_cmt="cmt"
                        ws_type_sub="sub"
                        zoomVidPicPost={zoomVidPicPost}
                        handle_API_Like_L={handle_API_Like_L}
                        handle_API_Share_L={handle_API_Share_L}
                        //
                        handle_API_MoreContentCmt_R={
                            handle_API_MoreContentCmt_R
                        }
                        handle_API_Cmt_L={handle_API_Cmt_L}
                        handle_API_Cmt_C={handle_API_Cmt_C}
                        handle_API_Cmt_U={handle_API_Cmt_U}
                        handle_API_LikeCmt_L={handle_API_LikeCmt_L}
                        handle_API_HistoryCmt_L={handle_API_HistoryCmt_L}
                        handle_API_MoreContentHisCmt_R={
                            handle_API_MoreContentHisCmt_R
                        }
                        //
                        handle_API_MoreContentSub_R={
                            handle_API_MoreContentSub_R
                        }
                        handle_API_Sub_L={handle_API_Sub_L}
                        handle_API_Sub_C={handle_API_Sub_C}
                        handle_API_Sub_U={handle_API_Sub_U}
                        handle_API_LikeSub_L={handle_API_LikeSub_L}
                        handle_API_HistorySub_L={handle_API_HistorySub_L}
                        handle_API_MoreContentHisSub_R={
                            handle_API_MoreContentHisSub_R
                        }
                    >
                        {posts.map((post, index) => (
                            <Post
                                key={`Posts_${post.id}`}
                                post={post}
                                post_ix={index}
                            />
                        ))}

                        <ComponentSkeleton
                            has_fetched={has_fetched}
                            component={<PostSkeleton />}
                        />

                        <div className="width-fit-content margin-auto">
                            <FetchingDiv
                                is_fetching={is_fetching && has_fetched}
                            />
                        </div>
                    </ContextPost>
                </div>
            </div>

            {location.pathname.search('/post/photos/') >= 0 && (
                <ZoomVidPicItem
                    show_screen_title={true}
                    closeScreenTitle={closeScreenTitle}
                    handleDeleteVidPicPost={handleDeleteVidPicPost}
                />
            )}
        </div>
    );
}

export default Posts;
