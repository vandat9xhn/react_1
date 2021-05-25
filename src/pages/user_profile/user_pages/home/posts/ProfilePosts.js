import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';

import { useScrollDown } from '../../../../../_custom_hooks/useScrollDown';

import observeToDo from '../../../../../_some_function/observerToDo';
import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
//
import FetchingDiv from '../../../../../component/some_div/fetching/FetchingDiv';
//
import { initial_posts } from '../../../../../component/posts/__common/InitialPosts';

import { handle_API_ProfilePost_L } from '../../../__handle_api/ProfileHandleAPI';

import Posts from '../../../../../component/posts/_posts/_main/PostsWs';
import PostSkeleton from '../../../../../component/posts/_post/skeleton/PostSkeleton';
import ComponentSkeleton from '../../../../../component/skeleton/component_skeleton/ComponentSkeleton';

//
ProfilePosts.propTypes = {
    last_name: PropTypes.string,
};

//
function ProfilePosts(props) {
    //
    const id = GetIdSlug();

    //
    const { user } = useContext(context_api);

    //
    const { last_name } = props;

    //
    const ref_component = useRef(null);

    // state
    const [post_obj, setPostObj, handleChangeId, resetStopScrollDown] =
        useScrollDown(initial_posts, handle_API_ProfilePost_L);

    const { data_arr: post_arr, is_fetching, has_fetched } = post_obj;

    //
    useEffect(() => {
        resetStopScrollDown();
        observeToDo(ref_component.current, handleChangeId, 0);
    }, [id]);

    //
    return (
        <div className="ProfilePosts" ref={ref_component}>
            <div>
                <Posts
                    posts={has_fetched ? post_arr : []}
                    title_add_new={
                        user.id == id
                            ? 'Post a status update'
                            : `Write a post on ${last_name}'s timeline`
                    }
                />
            </div>

            <div className="width-fit-content margin-auto">
                <FetchingDiv open_fetching={has_fetched && is_fetching} />
            </div>

            <ComponentSkeleton
                component={<PostSkeleton />}
                has_fetched={has_fetched}
            />
        </div>
    );
}

export default ProfilePosts;
