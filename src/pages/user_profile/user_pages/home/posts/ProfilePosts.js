import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';

import { useScrollDownWindow } from '../../../../../_custom_hooks/useScrollDown';

import observeToDo from '../../../../../_some_function/observerToDo';
import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
//
import { initial_posts } from '../../../../../component/posts/__common/InitialPosts';

import { handle_API_ProfilePost_L } from '../../../__handle_api/ProfileHandleAPI';

import Posts from '../../../../../component/posts/_posts/_main/PostsWs';

//
ProfilePosts.propTypes = {
    name: PropTypes.string,
};

//
function ProfilePosts({name}) {
    //
    const { user } = useContext(context_api);

    //
    const id = GetIdSlug();

    //
    const ref_component = useRef(null);

    // state
    const {
        data_state: post_obj,
        getData_API_at_first: handleChangeId,
        resetStopScrollDown,
    } = useScrollDownWindow({
        initial_data_arr: initial_posts,
        handle_API_L: handle_API_ProfilePost_L,
    });

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
                            : `Write a post on ${name}'s timeline`
                    }
                    has_fetched={has_fetched}
                    is_fetching={is_fetching}
                />
            </div>
        </div>
    );
}

export default ProfilePosts;
