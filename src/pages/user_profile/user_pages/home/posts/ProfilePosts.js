import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';

import { useMounted } from '../../../../../_custom_hooks/useMounted';

import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
import { WindowScrollDownBool } from '../../../../../_some_function/ScrollDown';
//
import FetchingDiv from '../../../../../component/some_div/fetching/FetchingDiv';
//
import { handle_API_ProfilePost_L } from '../../../__handle_api/ProfileHandleAPI';

import Posts from '../../../../../component/posts/_posts/_main/PostsWs';

//
ProfilePosts.propTypes = {
    profile: PropTypes.object,
};

//
function ProfilePosts(props) {
    //
    const id = GetIdSlug();

    //
    const { user } = useContext(context_api);

    //
    const { last_name } = props;

    // state
    const [post_obj, setPostObj] = useState({
        post_arr: [],
        count: 0,
        is_fetching: false,
        has_fetched: false,
    });

    //
    const { has_fetched, post_arr, is_fetching } = post_obj;

    // ref
    const pos = useRef(0);
    const just_fetching = useRef(true);
    const is_max = useRef(false);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //
    useEffect(() => {
        has_fetched && handleBeforeChangeId();
        getData_API_Post();
    }, [id]);

    /* ----------------------- COMMON ---------------------- */

    //
    function handleScroll() {
        if (
            WindowScrollDownBool(
                pos.current,
                just_fetching.current,
                is_max.current,
                0.7
            )
        ) {
            pos.current = window.pageYOffset;
            just_fetching.current = true;
            getData_API_Post();
        }
    }

    //
    function handleBeforeChangeId() {
        pos.current = 0;
        setPostObj((post_obj) => ({
            ...post_obj,
            has_fetched: false,
            post_arr: [],
        }));
    }

    /*---------------------------- GET API ---------------------------------*/

    // get post
    function getData_API_Post() {
        setPostObj(async (post_obj) => {
            try {
                const { has_fetched, post_arr, count } = post_obj;

                setPostObj({
                    ...post_obj,
                    is_fetching: true,
                });
                //
                const [data, new_count] = await handle_API_ProfilePost_L(
                    post_arr.length
                );

                has_fetched && (is_max.current = post_arr.length >= count);

                mounted &&
                    setPostObj({
                        post_arr: [...post_obj.post_arr, ...data],
                        count: has_fetched ? count : new_count,
                        is_fetching: false,
                        has_fetched: true,
                    });
            } catch (e) {
                console.log(e);
            } finally {
                just_fetching.current = false;
            }
        });
    }

    //
    return (
        <div className="ProfilePosts">
            <div>
                <Posts
                    posts={has_fetched ? post_arr : [{}]}
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
        </div>
    );
}

export default ProfilePosts;
