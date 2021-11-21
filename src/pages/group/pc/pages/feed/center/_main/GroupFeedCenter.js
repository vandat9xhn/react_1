import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_PostGroup_L } from '../../../../../../../_handle_api/fb_group/post';
//
import { useObserverShowMore } from '../../../../../../../_hooks/useObserverShowMore';
//
import Posts from '../../../../../../../component/posts/_posts/_main/Posts';

//
GroupFeedCenter.propTypes = {};

//
function GroupFeedCenter(props) {
    //
    const ref_fake_elm_end = useRef(null);

    //
    const {
        data_state,
        setDataState,

        is_max,

        getData_API,
        observerShowMore,
    } = useObserverShowMore({
        initial_data_arr: [],
        handle_API_L: (c_count) =>
            handle_API_PostGroup_L({
                c_count: c_count,
                params: {},
            }),
    });

    const { data_arr, is_fetching, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm_end.current,
            rootMargin: '0px 0px 500px 0px',
            way_scroll: 'to_bottom',
            margin: 500,
        });
    }, []);

    //
    return (
        <div className="GroupFeedCenter">
            <h2 className="padding-y-12px font-600 font-15px text-555">
                More from groups
            </h2>

            <div>
                <Posts
                    posts={data_arr}
                    has_fetched={has_fetched}
                    is_fetching={is_fetching}
                    open_input_id_arr={[]}
                />
            </div>

            {is_max.current ? null : <div className="h-250px"></div>}

            <div ref={ref_fake_elm_end} className="padding-1px"></div>
        </div>
    );
}

export default GroupFeedCenter;
