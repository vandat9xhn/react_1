import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { initial_posts } from '../../../../../../_initial/post/InitialPosts';
//
import { handle_API_ProfilePost_L } from '../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { useObserverShowMore } from '../../../../../../_hooks/useObserverShowMore';
//
import GroupPageDiscussCreate from '../create/GroupPageDiscussCreate';
import GroupPageDiscussPosts from '../posts/_main/GroupPageDiscussPosts';
import GroupPageDiscussSort from '../sort/GroupPageDiscussSort';
//
import './GroupPageDiscussLeft.scss';

//
GroupPageDiscussLeft.propTypes = {};

//
function GroupPageDiscussLeft({ group_id, bg_btn }) {
    //
    const ref_fake_elm_end = useRef(null);
    const ref_sort_obj = useRef({
        name: 'new',
        title: 'New activity',
    });

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
            handle_API_ProfilePost_L({
                c_count: c_count,
                group_id: group_id,
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

    // -----

    //
    function handleChangeSort(new_sort_obj = ref_sort_obj.current) {
        if (new_sort_obj.name == ref_sort_obj.current.name) {
            return;
        }

        ref_sort_obj.current = new_sort_obj;
        refreshData_API();
    }

    //
    function handleCreatePost(...params) {
        console.log(params);
    }

    //
    return (
        <div className="GroupPageDiscussLeft">
            <div>
                <GroupPageDiscussCreate handleCreatePost={handleCreatePost} />
            </div>

            <div
                className={`margin-top-15px ${
                    is_fetching || !has_fetched ? 'pointer-events-none' : ''
                }`}
            >
                <div>
                    <GroupPageDiscussSort
                        sort_obj={ref_sort_obj.current}
                        bg_btn={bg_btn}
                        handleChangeSort={handleChangeSort}
                    />
                </div>

                <div>
                    <GroupPageDiscussPosts
                        post_arr={data_arr}
                        has_fetched={has_fetched}
                        is_fetching={is_fetching}
                    />
                </div>

                <div ref={ref_fake_elm_end} className="padding-1px"></div>

                {is_max.current ? null : (
                    <div className="GroupPageDiscussLeft_skeleton"></div>
                )}
            </div>
        </div>
    );
}

export default GroupPageDiscussLeft;
