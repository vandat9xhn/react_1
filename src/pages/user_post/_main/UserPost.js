import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_Post_RD } from '../../../api/api_django/user/user_post/UserPost';

import { useMounted } from '../../../_custom_hooks/useMounted';
//
import Posts from '../../../component/posts/_posts/_main/PostsWs';
//
import './UserPost.scss';

//
UserPost.propTypes = {};

//
function UserPost(props) {
    const [post_state, setPostState] = useState({
        post: [],
        has_fetched: false,
    });

    const { post, has_fetched } = post_state;

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        getData_API_Post();
    }, []);

    //
    async function getData_API_Post() {
        const res = await API_Post_RD(1, 'GET');
        mounted &&
            setPostState({
                post: [res.data],
                has_fetched: true,
            });
    }

    //
    return (
        <div className="UserPost">
            <div className="UserPost_contain bg-fb">
                <div className="UserPost_posts">
                    <Posts
                        posts={post}
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
