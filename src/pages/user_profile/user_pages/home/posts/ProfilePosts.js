import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { handle_API_Post_C } from '../../../../../_handle_api/post/HandleAPIPost';
//
import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { useObserverShowMore } from '../../../../../_hooks/useObserverShowMore';
import { useScreenFetching } from '../../../../../_hooks/UseScreenFetching';
//
import { initial_posts } from '../../../../../_initial/post/InitialPosts';
//
import { handle_API_ProfilePost_L } from '../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { handleCreateNewPost } from '../../../../../_default/post/PostHandleCreate';
//
import Posts from '../../../../../component/posts/_posts/_main/Posts';
import AddNewPost from '../../../../../component/posts/common/add_new_post/_main/AddNewPost';
//
import './ProfilePosts.scss';

//
ProfilePosts.propTypes = {
    name: PropTypes.string,
};

//
function ProfilePosts({ name }) {
    //
    const { user, closeScreenFloor } = useContext(context_api);

    //
    const id = GetIdSlug();

    //
    const ref_component = useRef(null);
    const ref_fake_elm_end = useRef(null);

    //
    const {
        data_state,
        setDataState,

        refreshData_API,
        observerShowMore,
    } = useObserverShowMore({
        initial_data_arr: initial_posts,
        handle_API_L: (c_count) => handle_API_ProfilePost_L(c_count, id),
    });

    const { data_arr: post_arr, is_fetching, has_fetched } = data_state;

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        observeToDo({
            elm: ref_component.current,
            callback: () => {
                refreshData_API();

                observerShowMore({
                    fake_elm_end: ref_fake_elm_end.current,
                    // root,
                    rootMargin: '0px 0px 1000px 0px',
                    way_scroll: 'to_bottom',
                    margin: 500,
                });
            },
        });
    }, []);

    /* ----------- CREATE ----------- */

    async function handleCreatePost(data) {
        await handleScreenFetching(() => handle_API_Post_C(data));

        // const new_data = await handle_API_Post_C({
        //     content: data.main_content,
        //     vid_pics: data.c_vid_pics.map((item) => item.vid_pic),
        //     contents: data.c_vid_pics.map((item) => item.content),
        //     user: user.id,
        // });

        const new_data = handleCreateNewPost({ data: data, user: user });

        setDataState((data_state) => ({
            ...data_state,
            data_arr: [new_data, ...data_state.data_arr],
        }));
        closeScreenFloor();
    }

    //
    return (
        <div className="ProfilePosts" ref={ref_component}>
            <div className="ProfilePosts_new">
                <AddNewPost handleCreatePost={handleCreatePost} />
            </div>

            <div>
                <Posts
                    posts={has_fetched ? post_arr : []}
                    title_add_new={
                        user.id == id
                            ? 'Post a status update'
                            : `Write a post on ${name}'s timeline`
                    }
                    has_fetched={has_fetched}
                    is_fetching={is_fetching}
                />
            </div>

            <div ref={ref_fake_elm_end} className="padding-1px"></div>
        </div>
    );
}

export default ProfilePosts;
