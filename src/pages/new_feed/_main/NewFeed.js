import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
//
import { handle_API_NewFeedPost_L } from '../__handle_api/NewFeedHandleAPI';
import { WindowScrollDownBool } from '../../../_some_function/ScrollDown';
import { useMounted } from '../../../_custom_hooks/useMounted';
//
import FetchingDiv from '../../../component/some_div/fetching/FetchingDiv';
//
import Posts from '../../../component/posts/_posts/_main/PostsWs';
import NewFeedSearch from '../search/NewFeedSearch';
import AddNewPost from '../../../component/posts/common/add_new_post/AddNewPost';
//
import './NewFeed.scss';
import './NewFeedRes.scss';

//
function NewFeed() {
    // state
    const [post_obj, setPostObj] = useState({
        post_arr: [],
        count: 0,
        is_fetching: false,
        has_fetched: false,
    });

    const { has_fetched, post_arr, is_fetching } = post_obj;

    // ref
    const pos = useRef(0);
    const just_fetching = useRef(true);
    const is_max = useRef(false);
    
    //
    const mounted = useMounted();

    //
    useEffect(() => {
        getData_API_Post();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            just_fetching.current = true;
            pos.current = window.pageYOffset;
            getData_API_Post();
        }
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
                const [data, new_count] = await handle_API_NewFeedPost_L(
                    post_arr.length
                );

                if (mounted) {
                    setPostObj({
                        ...post_obj,
                        post_arr: [...post_arr, ...data],
                        is_fetching: false,
                        has_fetched: true,
                        count: has_fetched ? count : new_count,
                    });
                    has_fetched && (is_max.current = post_arr.length >= count);
                }
            } catch (e) {
                console.log(e);
            } finally {
                just_fetching.current = false;
            }
        });
    }

    /* ---------------------- SEARCH --------------------- */

    const handleSearch = (search) => {
        console.log(search);
    };

    //
    return (
        <div className="NewFeed">
            <div className="NewFeed_contain bg-fb">
                <div className="NewFeed_search">
                    <NewFeedSearch handleSearch={handleSearch} />
                </div>

                <div className="NewFeed_row">
                    <div className="NewFeed_col-left"></div>

                    <div className="NewFeed_col-center">
                        <div>
                            <Posts posts={has_fetched ? post_arr : [{}]} />
                        </div>

                        <div className="width-fit-content margin-auto">
                            <FetchingDiv open_fetching={is_fetching} />
                        </div>
                    </div>

                    <div className="NewFeed_col-right"></div>
                </div>
            </div>

            {/* add new post */}
            {/* <AddNewPost createNewPost={createNewPost} /> */}
        </div>
    );
}

NewFeed.propTypes = {};

export default NewFeed;
