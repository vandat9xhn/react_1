import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { handle_API_FashionHomeSearch_L } from '../../../../../_handle_api/fashion/trend_mall_searching_home';
//
import { useScrollToX } from '../../../../../_hooks/useScrollToX';
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import NextPrevDiv from '../../../../../component/some_div/next_prev_div/NextPrevDiv';
//
import FashionTopSearchItem from '../../../components/top_search/FashionTopSearchItem';
import FashionSeeMoreOnTitle from '../../../components/see_more/on_title/FashionSeeMoreOnTitle';
//
import top_search from '../../../../../../image/top_search.png';
import './FashionHomeTopSearch.scss';
import FashionSeeMoreLastRow from '../../../components/see_more/last_row/FashionSeeMoreLastRow';

//
FashionHomeTopSearch.propTypes = {};

//
function FashionHomeTopSearch(props) {
    //
    const ref_main_elm = useRef(null);
    const ref_scroll_elm = useRef(null);

    //
    const { data_state, getData_API } = useDataShowMore({
        handle_API_L: handle_API_FashionHomeSearch_L,
    });

    const { data_arr } = data_state;

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX(ref_scroll_elm);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () =>
                getData_API({
                    handleWhenFinally: handleWhenFinally,
                }),
        });
    }, []);

    //
    function handleWhenFinally() {
        hasNextPrev();
    }

    //
    return (
        <div ref={ref_main_elm} className="FashionHomeTopSearch bg-primary">
            <div className="FashionHomeTopSearch_head fashion-head-padding flex-between-center">
                <div>
                    <h2 className="font-16px label-field color-fashion">
                        TÌM KIẾM HÀNG ĐẦU
                    </h2>
                </div>

                <div>
                    <FashionSeeMoreOnTitle
                        link_to="/fashion/top_search"
                        title="Xem tất cả"
                    />
                </div>
            </div>

            <div className="pos-rel">
                <div
                    ref={ref_scroll_elm}
                    className="overflow-x-auto scroll-height-0"
                >
                    <ul className="display-flex list-none">
                        <li className="FashionHomeTopSearch_item">
                            <FashionTopSearchItem
                                link_to={`/fashion/top_search`}
                                type="innisfree - Top Bán Chạy"
                                image={top_search}
                                use_sold={false}
                            />
                        </li>

                        {data_arr.map((item, ix) => (
                            <li
                                key={`${item.keyword}_${ix}`}
                                className="FashionHomeTopSearch_item"
                            >
                                <FashionTopSearchItem
                                    link_to={`/fashion/top_search?q=${item.type}`}
                                    type={item.type}
                                    sold_month={item.sold_month}
                                    image={item.image}
                                />
                            </li>
                        ))}

                        {IS_MOBILE ? (
                            <li className="FashionHomeTopSearch_item">
                                <FashionSeeMoreLastRow
                                    link_to="/fashion/top_search"
                                    title="Xem tất cả"
                                />
                            </li>
                        ) : null}
                    </ul>
                </div>

                {IS_MOBILE ? null : (
                    <NextPrevDiv
                        is_btn_circle={true}
                        is_has_next={is_has_next}
                        is_has_prev={is_has_prev}
                        size_icon="1.5rem"
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                )}
            </div>
        </div>
    );
}

export default FashionHomeTopSearch;
