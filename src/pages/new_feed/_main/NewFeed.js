import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { useScrollDownWindow } from '../../../_hooks/useScrollDown';
import { useScreenFetching } from '../../../_hooks/UseScreenFetching';
//
import { initial_posts } from '../../../_initial/post/InitialPosts';
//
import { handle_API_NewFeedPost_L } from '../../../_handle_api/new_feed/NewFeedHandleAPI';
import { handle_API_Post_C } from '../../../_handle_api/post/HandleAPIPost';
//
import { handleCreateNewPost } from '../../../_default/post/PostHandleCreate';
//
import './NewFeedCommon.scss';
//
import NewFeedSearch from '../search/NewFeedSearch';
import NewFeedLeft from '../left/_main/NewFeedLeft';
import NewFeedCenter from '../center/_main/NewFeedCenter';
import NewFeedRight from '../right/_main/NewFeedRight';
//
import './NewFeed.scss';
import './NewFeedRes.scss';

//
function NewFeed() {
    //
    const { user, closeScreenFloor } = useContext(context_api);

    //
    const params_api = useRef({});

    //
    const {
        data_state,
        getData_API_at_first: getData_API_Post_first,
        setDataState,
    } = useScrollDownWindow({
        initial_data_arr: initial_posts,
        handle_API_L: (c_count) =>
            handle_API_NewFeedPost_L({
                c_count: c_count,
                params: params_api.current,
            }),
    });

    const { data_arr, is_fetching, has_fetched } = data_state;

    // 
    const handleScreenFetching = useScreenFetching()

    //
    useEffect(() => {
        document.title = 'New Feed';
        getData_API_Post_first();
    }, []);

    /* ----------- SEARCH ---------- */

    const handleSearch = (search) => {
        params_api.current = {
            search: search,
        };

        getData_API_Post_first();
    };

    /* ----------- CREATE ----------- */

    async function handleCreatePost(data) {
        await handleScreenFetching(() => handle_API_Post_C(data));

        // const new_data = await handle_API_Post_C({
        //     content: data.main_content,
        //     vid_pics: data.c_vid_pics.map((item) => item.vid_pic),
        //     contents: data.c_vid_pics.map((item) => item.content),
        //     user: user.id,
        // });

        const new_data = handleCreateNewPost(
            data.main_content,
            data.c_vid_pics
        );

        setDataState((data_state) => ({
            ...data_state,
            data_arr: [new_data, ...data_state.data_arr],
        }));
        closeScreenFloor();
    }

    // console.log(post_arr);
    //
    return (
        <div className="NewFeed">
            <div className="NewFeed_contain bg-fb">
                <div className="NewFeed_search">
                    <NewFeedSearch handleSearch={handleSearch} />
                </div>

                <div className="NewFeed_row display-flex space-between">
                    <div className="NewFeed_col-left">
                        <div className="pos-sticky-from-header">
                            <NewFeedLeft />
                        </div>
                    </div>

                    <div className="NewFeed_col-center flex-grow-1">
                        <NewFeedCenter
                            // title_add_new={title_add_new}
                            handleCreatePost={handleCreatePost}
                            post_arr={has_fetched ? data_arr : []}
                            has_fetched={has_fetched}
                            is_fetching={is_fetching}
                        />
                    </div>

                    <div className="NewFeed_col-right">
                        <div className="pos-sticky-from-header">
                            <NewFeedRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

NewFeed.propTypes = {};

export default NewFeed;
