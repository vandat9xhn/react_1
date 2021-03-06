import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../_constant/Constant';
//
import { useObserverShowMore } from '../../../_hooks/useObserverShowMore';
import { useScreenFetching } from '../../../_hooks/UseScreenFetching';
//
import { initial_posts } from '../../../_initial/post/InitialPosts';
//
import { handle_API_NewFeedPost_L } from '../../../_handle_api/new_feed/NewFeedHandleAPI';
import { handle_API_Post_C } from '../../../_handle_api/post/HandleAPIPost';
import { handleCreateNewPost } from '../../../_default/post/PostHandleCreate';
//
import './NewFeedCommon.scss';
//
import NewFeedLeft from '../left/_main/NewFeedLeft';
import NewFeedCenter from '../center/_main/NewFeedCenter';
import NewFeedRight from '../right/_main/NewFeedRight';
//
import './NewFeed.scss';
import './NewFeedRes.scss';

//
NewFeed.propTypes = {};

//
function NewFeed() {
    //
    const { user, closeScreenFloor } = useContext(context_api);

    //
    const ref_fake_elm_end = useRef(null);

    //
    const {
        data_state,
        setDataState,

        refreshData_API,
        observerShowMore,
    } = useObserverShowMore({
        initial_data_arr: initial_posts(),
        handle_API_L: (c_count) =>
            handle_API_NewFeedPost_L({
                c_count: c_count,
            }),
    });

    const { data_arr, is_fetching, has_fetched } = data_state;

    //
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        refreshData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm_end.current,
            rootMargin: '0px 0px 1000px 0px',
            way_scroll: 'to_bottom',
            margin: 1000,
        });
    }, []);

    /* ----------- CREATE ----------- */

    async function handleCreatePost(data) {
        await handleScreenFetching(() => handle_API_Post_C(data));

        // const new_data = await handle_API_Post_C({
        //     content: data.main_content,
        //     vid_pics: data.c_vid_pics.map((item) => item.vid_pic),
        //     contents: data.c_vid_pics.map((item) => item.content),
        //     user: user.id,
        // });

        const new_post = handleCreateNewPost({ data: data, user: user });

        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr.unshift(new_post);

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
        
        closeScreenFloor();
    }

    //
    return (
        <div className="NewFeed bg-fb">
            <div className="NewFeed_row display-flex space-between">
                {IS_MOBILE ? null : (
                    <div className="NewFeed_left flex-shrink-0 w-300px margin-right-10px">
                        <div className="pos-sticky-from-header">
                            <NewFeedLeft />
                        </div>
                    </div>
                )}

                <div className="NewFeed_center flex-grow-1 flex-basis-1rem padding-y-20px">
                    <NewFeedCenter
                        // title_add_new={title_add_new}
                        post_arr={data_arr}
                        has_fetched={has_fetched}
                        is_fetching={is_fetching}
                        handleCreatePost={handleCreatePost}
                    />

                    <div ref={ref_fake_elm_end} className="padding-1px"></div>
                </div>

                {IS_MOBILE ? null : (
                    <div className="NewFeed_right flex-shrink-0 w-300px margin-left-10px">
                        <div className="NewFeed_right_contain pos-sticky-from-header scroll-thin overflow-y-auto padding-y-10px">
                            <NewFeedRight />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NewFeed;
