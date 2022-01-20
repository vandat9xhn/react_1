import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_WatchPost_L } from '../../../../../../_handle_api/fb_watch/posts';
// 
import { useObserverShowMore } from '../../../../../../_hooks/useObserverShowMore';
//
import Posts from '../../../../../../component/posts/_posts/_main/Posts';
// 
import './WatchHomePosts.scss';

//
WatchHomePosts.propTypes = {};

//
function WatchHomePosts(props) {
    //
    const ref_fake_elm = useRef(null);

    //
    const { data_state, getData_API, observerShowMore } = useObserverShowMore({
        initial_arr: [],
        handle_API_L: (c_count) => handle_API_WatchPost_L({ c_count: c_count }),
    });

    const { data_arr, has_fetched, is_fetching } = data_state;

    //
    useEffect(() => {
        getData_API();
        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '800px 0px',
            way_scroll: 'to_bottom',
            margin: 800,
        });
    }, []);

    //
    return (
        <div className="WatchHomePosts watch-home-part">
            <Posts
                posts={data_arr}
                has_fetched={has_fetched}
                is_fetching={is_fetching}
                // open_input_id_arr={open_input_id_arr}
                // interleaved_elm_arr={interleaved_elm_arr}
            />

            <div ref={ref_fake_elm} className="w-1px"></div>
        </div>
    );
}

export default WatchHomePosts;
