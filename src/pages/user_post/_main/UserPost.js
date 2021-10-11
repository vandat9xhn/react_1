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
        post_arr: initial_posts,
        has_fetched: false,
    });

    const { post_arr, has_fetched } = post_state;

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        getData_API_Post();
    }, [id]);

    //
    async function getData_API_Post() {
        setPostState({
            post_arr: [],
            has_fetched: false,
        });

        const res = await API_Post_RD(id, 'GET');

        mounted &&
            setPostState({
                post_arr: [res.data],
                has_fetched: true,
            });
    }

    //
    return (
        <div className="UserPost">
            <div className="UserPost_contain bg-fb">
                <div className="UserPost_posts">
                    <Posts
                        posts={post_arr}
                        has_add_new={false}
                        has_fetched={has_fetched}
                        is_fetching={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserPost;
