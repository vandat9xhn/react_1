import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
import ContextPost from '../../../../_context/post/ContextPost';
//
import { is_api_fake } from '../../../../api/_ConstAPI';
//
import { openScreenPostVidPic } from '../../../_screen/type/vid_pics_post/ZoomVidPicPost';
//
import {
    handle_API_Like_L,
    handle_API_Share_L,
} from '../../../../_handle_api/post/HandleAPIPost';

import {
    handle_API_Cmt_C,
    handle_API_Cmt_L,
    handle_API_Cmt_U,
    handle_API_MoreContentCmt_R,
    //
    handle_API_LikeCmt_L,
    handle_API_CmtReactedInfo_L,
    //
    handle_API_HistoryCmt_L,
    handle_API_MoreContentHisCmt_R,
} from '../../../../_handle_api/post/HandleAPICmt';

import {
    handle_API_MoreContentSub_R,
    handle_API_Sub_C,
    handle_API_Sub_L,
    handle_API_Sub_U,
    //
    handle_API_LikeSub_L,
    handle_API_SubReactedInfo_L,
    //
    handle_API_HistorySub_L,
    handle_API_MoreContentHisSub_R,
} from '../../../../_handle_api/post/HandleAPISub';
//
import ComponentSkeleton from '../../../skeleton/component_skeleton/ComponentSkeleton';
import FetchingDiv from '../../../some_div/fetching/FetchingDiv';
import ListInterLeavedElms from '../../../list_interleaved_elms/_main/ListInterLeavedElms';
//
import Post from '../../_post/_main_post/Post';
import PostSkeleton from '../../_post/skeleton/PostSkeleton';
//
import './Posts.scss';

//
function PostItem({ item, ix, open_input_id_arr }) {
    return (
        <div className="Posts_item">
            <Post
                post={item}
                post_ix={ix}
                is_open_input={open_input_id_arr.includes(item.id)}
            />
        </div>
    );
}

//
Posts.propTypes = {
    posts: PropTypes.array,
    has_fetched: PropTypes.bool,
    is_fetching: PropTypes.bool,
    open_input_id_arr: PropTypes.arrayOf(PropTypes.number),

    interleaved_elm_arr: ListInterLeavedElms.propTypes.interleaved_elm_arr,
};

Posts.defaultProps = {
    has_fetched: false,
    is_fetching: false,
    open_input_id_arr: [],
};

//
function Posts({
    posts,
    has_fetched,
    is_fetching,
    open_input_id_arr,

    interleaved_elm_arr,
}) {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    const ws = useRef(null);
    const c_zoom_post = useRef(-1);
    const ref_posts = useRef(null);

    //
    useEffect(() => {
        ws.current =
            localStorage.is_login && !is_api_fake ? new WebSocket('') : null;

        // ws.current != null &&
        //     (ws.current.onopen = () => {
        //         console.log('open');
        //     });
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

    //
    return (
        <div ref={ref_posts} className="Posts">
            <ContextPost
                ws_send={ws.current ? ws.current.send : handle_fake_ws_send}
                ws_type_post="post"
                ws_type_cmt="cmt"
                ws_type_sub="sub"
                //
                ref_posts={ref_posts}
                //
                zoomVidPicPost={zoomVidPicPost}
                handle_API_Like_L={handle_API_Like_L}
                handle_API_Share_L={handle_API_Share_L}
                //
                handle_API_MoreContentCmt_R={handle_API_MoreContentCmt_R}
                handle_API_Cmt_L={handle_API_Cmt_L}
                handle_API_Cmt_C={handle_API_Cmt_C}
                handle_API_Cmt_U={handle_API_Cmt_U}
                handle_API_LikeCmt_L={handle_API_LikeCmt_L}
                handle_API_CmtReactedInfo_L={handle_API_CmtReactedInfo_L}
                handle_API_HistoryCmt_L={handle_API_HistoryCmt_L}
                handle_API_MoreContentHisCmt_R={handle_API_MoreContentHisCmt_R}
                //
                handle_API_MoreContentSub_R={handle_API_MoreContentSub_R}
                handle_API_Sub_L={handle_API_Sub_L}
                handle_API_Sub_C={handle_API_Sub_C}
                handle_API_Sub_U={handle_API_Sub_U}
                handle_API_LikeSub_L={handle_API_LikeSub_L}
                handle_API_SubReactedInfo_L={handle_API_SubReactedInfo_L}
                handle_API_HistorySub_L={handle_API_HistorySub_L}
                handle_API_MoreContentHisSub_R={handle_API_MoreContentHisSub_R}
            >
                <ComponentSkeleton
                    has_fetched={has_fetched}
                    component={<PostSkeleton />}
                    num={1}
                />
                {has_fetched && (
                    <ListInterLeavedElms
                        data_arr={posts}
                        ItemComponent={PostItem}
                        item_props={{ open_input_id_arr: open_input_id_arr }}
                        interleaved_elm_arr={interleaved_elm_arr}
                        elm_class="Posts_item"
                    />
                )}

                <div className="display-flex-center">
                    <FetchingDiv is_fetching={is_fetching && has_fetched} />
                </div>
            </ContextPost>
        </div>
    );
}

export default Posts;
