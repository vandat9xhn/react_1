import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { initial_posts } from '../../../../../../_initial/post/InitialPosts';
//
import { handle_API_FbPagePost_L } from '../../../../../../_handle_api/fb_page/page_posts';
// 
import { useObserverShowMore } from '../../../../../../_hooks/useObserverShowMore';
//
import './FbPageHomeRightCommon.scss';
// 
import FPHomeCreate from '../create/FPHomeCreate';
import FPHomePosts from '../posts/FPHomePosts';
import FbPageHomePostsPinned from '../posts_pinned/_main/FbPageHomePostsPinned';
//
import './FbPageHomeRight.scss';

//
FbPageHomeRight.propTypes = {};

//
function FbPageHomeRight({ page_id }) {
    //
    const ref_fake_elm_end = useRef(null);

    //
    const {
        data_state,
        setDataState,

        is_max,

        refreshData_API,
        observerShowMore,
    } = useObserverShowMore({
        initial_data_arr: initial_posts(),
        handle_API_L: (c_count) =>
            handle_API_FbPagePost_L({
                c_count: c_count,
                page_id: page_id,
            }),
    });

    const { data_arr, is_fetching, has_fetched } = data_state;

    //
    useEffect(() => {
        refreshData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm_end.current,
            rootMargin: '0px 0px 500px 0px',
            way_scroll: 'to_bottom',
            margin: 500,
        });
    }, []);

    //
    return (
        <div className="FbPageHomeRight">
            <div className="FbPageHomeRight_part">
                <FPHomeCreate />
            </div>

            <div>
                <FbPageHomePostsPinned page_id={page_id} />
            </div>

            <div>
                <FPHomePosts
                    post_arr={data_arr}
                    has_fetched={has_fetched}
                    is_fetching={is_fetching}
                />
            </div>

            <div ref={ref_fake_elm_end} className="h-1px"></div>

            {is_max.current ? null : <div className="h-360px"></div>}
        </div>
    );
}

export default FbPageHomeRight;
