import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { handle_API_FbGroupSuggested_L } from '../../../../../../../_handle_api/fb_group/suggested';
//
import { useDataShowMore } from '../../../../../../../_hooks/useDataShowMore';
import { useScrollToX } from '../../../../../../../_hooks/useScrollToX';
//
import NextPrevDiv from '../../../../../../../component/some_div/next_prev_div/NextPrevDiv';
import GroupCard from '../../../../../_components/group_card/_main/GroupCard';
//
import './GroupFeedSuggested.scss';

//
GroupFeedSuggested.propTypes = {};

//
function GroupFeedSuggested({ handleReady }) {
    //
    const ref_scroll_elm = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX({
            ref_scroll_elm: ref_scroll_elm,
            getItemElm: () =>
                ref_scroll_elm.current.getElementsByClassName(
                    'GroupFeedSuggested_item'
                )[0],
        });

    //
    const { data_state, getData_API } = useDataShowMore({
        handle_API_L: (c_count) =>
            handle_API_FbGroupSuggested_L({
                c_count: c_count,
                params: {
                    size: 5,
                },
            }),
    });

    const { data_arr, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API_AtFirst();
    }, []);

    // -------

    //
    async function getData_API_AtFirst() {
        await getData_API();
        hasNextPrev();
        handleReady();
    }

    //
    return (
        <div className="GroupFeedSuggested brs-8px bg-primary box-shadow-1 text-secondary">
            <div className="GroupFeedSuggested_head padding-x-16px padding-y-20px">
                <div className="flex-between-center">
                    <h2 className="font-17px font-600">Suggested for you</h2>

                    <Link to="/group/discover">See more</Link>
                </div>

                <div>Groups you might be interested in.</div>
            </div>

            <div
                className={`GroupFeedSuggested_body padding-bottom-20px ${
                    has_fetched ? '' : 'display-none'
                }`}
            >
                <div className="pos-rel">
                    <div
                        ref={ref_scroll_elm}
                        className="wh-100 overflow-x-auto scroll-height-0"
                    >
                        <ul className="display-flex list-none">
                            {data_arr.map((item, ix) => (
                                <li
                                    key={item.id}
                                    className="GroupFeedSuggested_item w-100per flex-shrink-0"
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
                                            <div className="display-flex-center wh-100 bg-blue text-white">
                                                Join Group
                                            </div>
                                        }
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
            </div>

            {has_fetched ? null : <div className="padding-top-100per"></div>}
        </div>
    );
}

export default GroupFeedSuggested;
