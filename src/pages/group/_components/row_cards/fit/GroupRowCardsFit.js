import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbGroupSuggested_L } from '../../../../../_handle_api/fb_group/suggested';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
import { useScrollToX } from '../../../../../_hooks/useScrollToX';
//
import NextPrevDiv from '../../../../../component/some_div/next_prev_div/NextPrevDiv';
import GroupCard from '../../group_card/_main/GroupCard';
//
import './GroupRowCardsFit.scss';

//
GroupRowCardsFit.propTypes = {};

//
function GroupRowCardsFit({ params_api, BtnElm, handleFetched }) {
    //
    const ref_scroll_elm = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX({
            ref_scroll_elm: ref_scroll_elm,
            getItemElm: () =>
                ref_scroll_elm.current.getElementsByClassName(
                    'GroupRowCardsFit_item'
                )[0],
        });

    //
    const { data_state, getData_API } = useDataShowMore({
        handle_API_L: (c_count) =>
            handle_API_FbGroupSuggested_L({
                c_count: c_count,
                params: {
                    size: 5,
                    ...params_api,
                },
            }),
    });

    const { data_arr } = data_state;

    //
    useEffect(() => {
        getData_API_AtFirst();
    }, []);

    // -------

    //
    async function getData_API_AtFirst() {
        await getData_API();
        handleFetched();
        hasNextPrev();
    }

    //
    return (
        <div className="GroupRowCardsFit pos-rel">
            <div
                ref={ref_scroll_elm}
                className="wh-100 overflow-x-auto scroll-height-0"
            >
                <ul className="display-flex list-none">
                    {data_arr.map((item, ix) => (
                        <li
                            key={item.id}
                            className="GroupRowCardsFit_item w-100per flex-shrink-0"
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
                                BtnElm={BtnElm}
                                // removeGroupCard
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <div className="text-secondary">
                <NextPrevDiv
                    is_btn_circle={true}
                    is_has_next={is_has_next}
                    is_has_prev={is_has_prev}
                    // size_icon
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            </div>
        </div>
    );
}

export default GroupRowCardsFit;
