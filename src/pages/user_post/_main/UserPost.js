import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_Post_RD } from '../../../api/api_django/user/user_post/UserPost';

import { initial_posts } from '../../../_initial/post/InitialPosts';
//
import { useMounted } from '../../../_hooks/useMounted';
//
import Posts from '../../../component/posts/_posts/_main/Posts';
//
import './UserPost.scss';

//
UserPost.propTypes = {};

//
function UserPost(props) {
    //
    const { id } = props.match.params;

    //
    const [post_state, setPostState] = useState({
        post_arr: initial_posts(),
        has_fetched: false,
        open_input_id_arr: [],
    });

    const { post_arr, has_fetched, open_input_id_arr } = post_state;

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        getData_API_Post();
    }, [id]);

    // --------

    //
    async function getData_API_Post() {
        setPostState({
            ...post_state,
            post_arr: [],
            has_fetched: false,
        });

        const res = await API_Post_RD(id, 'GET');

        mounted &&
            setPostState({
                post_arr: [res.data],
                has_fetched: true,
                open_input_id_arr: [res.data.id],
            });
    }

    //
    return (
        <div className="UserPost">
            <div className="UserPost_contain bg-fb">
                <div className="UserPost_posts">
                    <Posts
                        posts={post_arr}
                        has_fetched={has_fetched}
                        is_fetching={false}
                        open_input_id_arr={open_input_id_arr}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserPost;
