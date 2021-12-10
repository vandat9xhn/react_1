import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { initial_posts } from '../../../../../../../_initial/post/InitialPosts';
//
import { handle_API_FbPagePinnedPost_R } from '../../../../../../../_handle_api/fb_page/page_pinned_post';
//
import { useMounted } from '../../../../../../../_hooks/useMounted';
//
import Posts from '../../../../../../../component/posts/_posts/_main/Posts';

//
FbPageHomePostsPinned.propTypes = {};

//
function FbPageHomePostsPinned({ page_id }) {
    //
    const [post_state, setPostState] = useState({
        post_arr: [] || initial_posts(),
        has_fetched: false,
        is_fetching: false,
    });

    const { post_arr, has_fetched, is_fetching } = post_state;

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        getData_API_Post();
    }, []);

    // --------

    //
    async function getData_API_Post() {
        setPostState({
            ...post_state,
            post_arr: [],
            has_fetched: false,
            is_fetching: true,
        });

        const data = await handle_API_FbPagePinnedPost_R({
            page_id: page_id,
            type: 'pinned',
        });

        mounted &&
            setPostState({
                post_arr: data ? [data] : [],
                has_fetched: true,
                is_fetching: false,
            });
    }

    // -----

    //
    if (post_arr.length == 0) {
        return null;
    }

    //
    return (
        <div className="FbPageHomePostsPinned">
            <h2 className="fb-page-home-title-post">Pinned post</h2>

            <div>
                <Posts
                    posts={post_arr}
                    has_fetched={has_fetched}
                    is_fetching={is_fetching}
                />
            </div>
        </div>
    );
}

export default FbPageHomePostsPinned;
