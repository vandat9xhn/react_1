import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { handle_API_FbGroupSuggested_L } from '../../../../../../_handle_api/fb_group/suggested';
//
import { useDataShowMore } from '../../../../../../_hooks/useDataShowMore';
import { useScrollToXCenter } from '../../../../../../_hooks/useScrollToXCenter';
//
import NextPrevDiv from '../../../../../../component/some_div/next_prev_div/NextPrevDiv';
import GroupCard from '../../../group_card/_main/GroupCard';
//
import './GroupFeedCardsCenter.scss';

//
GroupFeedCardsCenter.propTypes = {};

//
function GroupFeedCardsCenter({ params_api, BtnElm, handleFetched }) {
    //
    const {
        ref_scroll_elm,
        ref_first_item,

        is_has_next,
        is_has_prev,

        changeItemSideWidth,

        handleNext,
        handlePrev,
        hasNextPrev,
    } = useScrollToXCenter({ count_item_center: 1 });

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

        handleFetched && handleFetched();
        hasNextPrev();

        ref_first_item.current = !ref_scroll_elm.current
            ? null
            : ref_scroll_elm.current.getElementsByClassName(
                  'GroupFeedCardsCenter_item'
              )[0];
        changeItemSideWidth();
    }

    //
    return (
        <div className="GroupFeedCardsCenter pos-rel">
            <div
                ref={ref_scroll_elm}
                className="GroupFeedCardsCenter_contain wh-100 overflow-x-auto scroll-height-0"
            >
                <ul className="display-flex list-none">
                    {data_arr.map((item, ix) => (
                        <li
                            key={item.id}
                            className="GroupFeedCardsCenter_item flex-shrink-0"
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

            {IS_MOBILE ? null : (
                <React.Fragment>
                    <div
                        className={`GroupFeedCardsCenter_side left-0 ${
                            !is_has_next
                                ? 'GroupFeedCardsCenter_side-left-only'
                                : ''
                        } ${
                            !is_has_prev
                                ? 'GroupFeedCardsCenter_side-left-none'
                                : ''
                        }`}
                        onClick={handlePrev}
                    ></div>

                    <div
                        className={`GroupFeedCardsCenter_side right-0 ${
                            !is_has_prev
                                ? 'GroupFeedCardsCenter_side-right-only'
                                : ''
                        } ${
                            !is_has_next
                                ? 'GroupFeedCardsCenter_side-right-none'
                                : ''
                        }`}
                        onClick={handleNext}
                    ></div>

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
                </React.Fragment>
            )}
        </div>
    );
}

export default GroupFeedCardsCenter;
