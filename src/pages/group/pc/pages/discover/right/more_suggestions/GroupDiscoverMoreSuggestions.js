import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbGroupSuggested_L } from '../../../../../../../_handle_api/fb_group/suggested';
//
import { useObserverShowMore } from '../../../../../../../_hooks/useObserverShowMore';
//
import GroupCard from '../../../../../_components/group_card/_main/GroupCard';
//
import './GroupDiscoverMoreSuggestions.scss';

//
GroupDiscoverMoreSuggestions.propTypes = {};

//
function GroupDiscoverMoreSuggestions({}) {
    //
    const ref_main_elm = useRef(null);
    const ref_fake_elm = useRef(null);

    //
    const { data_state, is_max, observerShowMore, getData_API } =
        useObserverShowMore({
            handle_API_L: (c_count) =>
                handle_API_FbGroupSuggested_L({
                    c_count: c_count,
                    params: {
                        size: 5,
                        type: 'more_suggestions',
                    },
                }),
        });

    const { data_arr, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API_AtFirst();
    }, []);

    // ----

    //
    async function getData_API_AtFirst() {
        await getData_API();

        if (!is_max.current) {
            observerShowMore({
                fake_elm_end: ref_fake_elm.current,
                rootMargin: '0px 0px 500px 0px',
                way_scroll: 'to_bottom',
                margin: 500,
            });
        }
    }

    //
    return (
        <div
            ref={ref_main_elm}
            className="GroupDiscoverMoreSuggestions pos-rel"
        >
            <h2 className="margin-bottom-16px padding-x-3px font-20px font-700">
                More suggestions
            </h2>

            <ul className="display-flex flex-wrap list-none">
                {data_arr.map((item, ix) => (
                    <li
                        key={item.id}
                        className="GroupDiscoverMoreSuggestions_item w-50per padding-3px flex-shrink-0"
                    >
                        <GroupCard
                            id={item.id}
                            name={item.name}
                            picture={item.picture}
                            //
                            count_member={item.count_member}
                            post_count={item.post_count}
                            post_unit={item.post_unit}
                            //
                            friend_arr={item.friend_arr}
                            friend_count={item.friend_count}
                            has_more_friend={item.has_more_friend}
                            //
                            BtnElm={
                                <div className="display-flex-center wh-100 bg-ccc">
                                    Join Group
                                </div>
                            }
                            // removeGroupCard
                        />
                    </li>
                ))}
            </ul>

            {is_max.current ? null : (
                <div className="GroupDiscoverMoreSuggestions_not_fetched"></div>
            )}

            <div ref={ref_fake_elm} className="padding-1px"></div>
        </div>
    );
}

export default GroupDiscoverMoreSuggestions;
