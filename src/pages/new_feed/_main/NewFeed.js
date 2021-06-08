import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useScrollDownWindow } from '../../../_custom_hooks/useScrollDown';
//
import { initial_posts } from '../../../component/posts/__common/InitialPosts';

import Posts from '../../../component/posts/_posts/_main/PostsWs';
// 
import { handle_API_NewFeedPost_L } from '../__handle_api/NewFeedHandleAPI';
// 
import './NewFeedCommon.scss';
import './NewFeed.scss';
import './NewFeedRes.scss';
// 
import NewFeedSearch from '../search/NewFeedSearch';
import NewFeedRight from '../right/_main/NewFeedRight';
import NewFeedLeft from '../left/_main/NewFeedLeft';
//

//
function NewFeed() {
    //
    const params_api = useRef({});

    //
    const {
        data_state: post_obj,
        getData_API_at_first: getData_API_Post_first,
    } = useScrollDownWindow({
        initial_data_arr: initial_posts,
        handle_API_L: (c_count) =>
            handle_API_NewFeedPost_L({
                c_count: c_count,
                params: params_api.current,
            }),
    });

    const { data_arr: post_arr, is_fetching, has_fetched } = post_obj;

    //
    useEffect(() => {
        document.title = 'New Feed'
        getData_API_Post_first();
    }, []);

    /* ---------------------- SEARCH --------------------- */

    const handleSearch = (search) => {
        params_api.current = {
            search: search,
        };

        getData_API_Post_first();
    };

    // console.log(post_arr);
    //
    return (
        <div className="NewFeed">
            <div className="NewFeed_contain bg-fb">
                <div className="NewFeed_search">
                    <NewFeedSearch handleSearch={handleSearch} />
                </div>

                <div className="NewFeed_row">
                    <div className="NewFeed_col-left">
                        <NewFeedLeft />
                    </div>

                    <div className="NewFeed_col-center">
                        <div>
                            <Posts
                                posts={has_fetched ? post_arr : []}
                                has_fetched={has_fetched}
                                is_fetching={is_fetching}
                            />
                        </div>
                    </div>

                    <div className="NewFeed_col-right">
                        <NewFeedRight />
                    </div>
                </div>
            </div>
        </div>
    );
}

NewFeed.propTypes = {};

export default NewFeed;
