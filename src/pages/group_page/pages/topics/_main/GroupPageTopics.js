import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbGroupTopic_L } from '../../../../../_handle_api/fb_group/topics';
//
import { useObserverShowMore } from '../../../../../_hooks/useObserverShowMore';
//
import GPTopicsSettings from '../settings/_main/GPTopicsSettings';
import GroupPageTopicsFilter from '../filter/_main/GroupPageTopicsFilter';
import GroupPageTopic from '../item/GroupPageTopic';
//
import './GroupPageTopics.scss';

//
GroupPageTopics.propTypes = {};

//
function GroupPageTopics({ group_id, is_admin }) {
    //
    const ref_fake_elm = useRef(null);

    //
    const {
        data_state,
        setDataState,

        is_max,

        refreshData_API,
        observerShowMore,
    } = useObserverShowMore({
        handle_API_L: (c_count) =>
            handle_API_FbGroupTopic_L({
                group_id: group_id,
                c_count: c_count,
            }),
    });

    const { data_arr, count, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API_AtFirst();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '0px',
            way_scroll: 'to_bottom',
            margin: 0,
        });
    }, []);

    // ------

    //
    async function getData_API_AtFirst() {
        await refreshData_API();
    }

    // ------

    //
    function handleAction({ ix = 0, action_name = '' }) {
        if (['hide', 'unhide'].includes(action_name)) {
            setDataState((data_state) => {
                const new_data_arr = [...data_state.data_arr];
                new_data_arr[ix].is_hidden = !new_data_arr[ix].is_hidden;

                return {
                    ...data_state,
                    data_arr: new_data_arr,
                };
            });
        }
    }

    //
    return (
        <div className="GroupPageTopics margin-auto padding-y-16px w-680px max-w-100per">
            {is_admin ? (
                <div className="GroupPageTopics_contain margin-bottom-16px">
                    <GPTopicsSettings />
                </div>
            ) : null}

            <div className="GroupPageTopics_contain">
                <div className="flex-between-center">
                    <h2 className="GroupPageTopics_title">Group topics</h2>

                    <div>
                        <GroupPageTopicsFilter />
                    </div>
                </div>

                <div className="margin-top-10px">
                    <ul className="list-none">
                        {data_arr.map((item, ix) => (
                            <li key={item.id} className="GroupPageTopics_item">
                                <GroupPageTopic
                                    ix={ix}
                                    group_id={group_id}
                                    is_admin={is_admin}
                                    //
                                    hash_tag={item.hash_tag}
                                    post_count={item.post_count}
                                    is_hidden={item.is_hidden}
                                    pinned={item.pinned}
                                    //
                                    handleAction={handleAction}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                <div ref={ref_fake_elm} className="h-1px"></div>

                {is_max.current ? (
                    count == 0 ? (
                        <div className="padding-y-20px text-align-center font-20px font-700 text-secondary">
                            No hash tag
                        </div>
                    ) : null
                ) : (
                    <div className="h-250px"></div>
                )}
            </div>
        </div>
    );
}

export default GroupPageTopics;
