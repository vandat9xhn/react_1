import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useScrollDown } from '../../../_custom_hooks/useScrollDown';
//
import FetchingDiv from '../../../component/some_div/fetching/FetchingDiv';
//
import { initial_posts } from '../../../component/posts/__common/InitialPosts';

import Posts from '../../../component/posts/_posts/_main/PostsWs';

import { handle_API_NewFeedPost_L } from '../__handle_api/NewFeedHandleAPI';

import NewFeedSearch from '../search/NewFeedSearch';
//
import './NewFeed.scss';
import './NewFeedRes.scss';

//
function NewFeed() {
    //
    const params_api = useRef({});

    //
    const [post_obj, setPostObj, getData_API_Post_first] = useScrollDown(
        initial_posts,
        (c_count) => handle_API_NewFeedPost_L(c_count, params_api.current)
    );

    const { data_arr: post_arr, is_fetching, has_fetched } = post_obj;

    //
    useEffect(() => {
        getData_API_Post_first();
    }, []);

    /* ---------------------- SEARCH --------------------- */

    const handleSearch = (search) => {
        params_api.current = {
            search: search,
        };
        getData_API_Post_first();
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
                            <Posts
                                posts={has_fetched ? post_arr : []}
                                has_fetched={has_fetched}
                                is_fetching={is_fetching}
                            />
                        </div>
                    </div>

                    <div className="NewFeed_col-right"></div>
                </div>
            </div>
        </div>
    );
}

NewFeed.propTypes = {};

export default NewFeed;
