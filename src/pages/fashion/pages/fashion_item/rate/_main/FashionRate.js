import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import { handle_API_FashionRate_L } from '../../../../../../_handle_api/fashion/FashionItemRateHandleAPI';
//
import { useMultiPages } from '../../../../../../_hooks/useMultiPages';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import ComponentSkeleton from '../../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
import StarsRate from '../../../../../../component/stars_rate/_main/StarsRate';
import Pagination from '../../../../../../component/pagination/_main/Pagination';
//
import FashionRateSkeleton from '../skeleton/FashionRateSkeleton';
import FashionRateList from '../list/_main/FashionRateList';
import FsIRateOverview from '../overview/_main/FsIRateOverview';
//
import './FashionRate.scss';
import FsIRateOverviewMb from '../overview_mb/FsIRateOverviewMb';

//
FashionRate.propTypes = {};

//
function FashionRate({ id }) {
    //
    const { item_info } = useContext(context_fashion_item);

    //
    const ref_main_elm = useRef(null);
    const ref_filter_ix = useRef(0);

    //
    const { state_obj, getData_API, refreshData_API, handleChangePage } =
        useMultiPages({
            initial_page: 1,
            handle_API_L: (new_page) =>
                handle_API_FashionRate_L({
                    product_model: id,
                    params: {
                        page: new_page,
                        size: 10,
                        filter_ix: ref_filter_ix.current,
                    },
                }),
        });

    const { page_obj, page, pages, count, is_fetching, has_fetched } =
        state_obj;

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () => getData_API(1),
        });
    }, []);

    //
    function handleFilterRate(ix) {
        ref_filter_ix.current = ix;

        refreshData_API({
            new_page: 1,
        });
    }

    //
    function onChangePage(new_page) {
        ref_main_elm.current.scrollIntoView();

        handleChangePage(new_page);
    }

    //
    return (
        <div className="FashionRate bg-primary" ref={ref_main_elm}>
            <div
                className={`${
                    IS_MOBILE ? 'FashionRate_head-mb padding-8px' : ''
                }`}
            >
                <h2
                    className={`font-500 ${
                        IS_MOBILE
                            ? 'font-14px'
                            : 'margin-bottom-16px padding-16px font-18px text-secondary'
                    }`}
                >
                    ĐÁNH GIÁ SẢN PHẨM
                </h2>

                <div
                    className={`${
                        IS_MOBILE
                            ? 'FashionRate_overview-mb'
                            : 'padding-x-16px margin-bottom-16px'
                    }`}
                >
                    {IS_MOBILE ? (
                        <FsIRateOverviewMb
                            rate_avg={item_info.rate_avg}
                            rate_count={item_info.rate_count}
                        />
                    ) : (
                        <FsIRateOverview
                            filter_ix={ref_filter_ix.current}
                            handleFilterRate={handleFilterRate}
                        />
                    )}
                </div>
            </div>

            <ComponentSkeleton
                component={<FashionRateSkeleton />}
                has_fetched={!is_fetching}
            />

            <div
                className={`FashionRate_list ${
                    is_fetching ? 'display-none' : ''
                }`}
            >
                {has_fetched && page_obj[page].length == 0 ? (
                    <div className="text-align-center text-third font-500">
                        Chưa có đánh giá nào
                    </div>
                ) : (
                    <div
                        className={`${
                            IS_MOBILE ? 'padding-x-8px' : 'padding-x-16px'
                        }`}
                    >
                        <FashionRateList
                            rate_page_arr={page_obj[page].slice(
                                0,
                                IS_MOBILE ? 4 : undefined
                            )}
                        />

                        {IS_MOBILE ? (
                            <div className="FashionRate_foot_all padding-y-8px text-align-center">
                                <Link
                                    to={`/fashion/rate?product_id=${id}`}
                                    className="color-fashion"
                                >
                                    <span className="margin-right-5px">
                                        Xem Tất Cả ({count})
                                    </span>

                                    <IconsArrow x={200} size_icon="14px" />
                                </Link>
                            </div>
                        ) : (
                            <Pagination
                                count={pages}
                                num_side_center={2}
                                current={page}
                                is_fetching={is_fetching}
                                handleChangePage={onChangePage}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default FashionRate;
