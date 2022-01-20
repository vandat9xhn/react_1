import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { handle_API_WatchNew_L } from '../../../../../../_handle_api/fb_watch/new';
//
import { useScrollToX } from '../../../../../../_hooks/useScrollToX';
import { useObserverShowMore } from '../../../../../../_hooks/useObserverShowMore';
//
import NextPrevDiv from '../../../../../../component/some_div/next_prev_div/NextPrevDiv';
//
import WatchHomeNewItem from '../item/_main/WatchHomeNewItem';
//
import './WatchHomeNew.scss';

//
WatchHomeNew.propTypes = {};

//
function WatchHomeNew(props) {
    //
    const ref_scroll_elm = useRef(null);
    const ref_fake_elm = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX({
            ref_scroll_elm: ref_scroll_elm,
            getItemElm: getItemElm,
        });

    //
    const { data_state, is_max, getData_API, observerShowMore } =
        useObserverShowMore({
            initial_arr: [],
            handle_API_L: (c_count) =>
                handle_API_WatchNew_L({ c_count: c_count }),
        });

    const { data_arr, count, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    useEffect(() => {
        has_fetched &&
            !is_max.current &&
            observerShowMore({
                fake_elm_end: ref_fake_elm.current,
                root: ref_scroll_elm.current,
                rootMargin: '0px 500px',
                way_scroll: 'to_right',
                margin: 800,
            });
    }, [has_fetched]);

    //
    useEffect(() => {
        hasNextPrev();
    }, [data_arr.length]);

    // ----

    //
    function getItemElm() {
        return ref_scroll_elm.current.getElementsByTagName('li')[0];
    }

    // ----

    //
    if (!has_fetched || count == 0) {
        return null;
    }

    //
    return (
        <div className="WatchHomeNew watch-home-part padding-y-16px brs-8px-pc bg-primary box-shadow-1">
            <div className="WatchHomeNew_title margin-bottom-8px padding-x-16px font-20px font-700">
                New for you · {count}
            </div>

            <div className="WatchHomeNew_list pos-rel padding-x-16px">
                <ul
                    ref={ref_scroll_elm}
                    className="display-flex list-none overflow-x-auto scroll-height-0"
                >
                    {data_arr.map((item, ix) => (
                        <li
                            key={item.id}
                            className="WatchHomeNew_item flex-shrink-0 w-50per"
                        >
                            <WatchHomeNewItem item={item} />
                        </li>
                    ))}

                    <div ref={ref_fake_elm} className="w-1px"></div>
                </ul>

                {IS_MOBILE ? null : (
                    <div className="text-third">
                        <NextPrevDiv
                            is_btn_circle={true}
                            is_has_next={is_has_next}
                            is_has_prev={is_has_prev}
                            // size_icon={}
                            handleNext={handleNext}
                            handlePrev={handlePrev}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default WatchHomeNew;
