import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
//
import { handle_API_FashionRate_L } from '../../../../../../_handle_api/fashion/FashionItemRateHandleAPI';
//
import { useMultiPages } from '../../../../../../_hooks/useMultiPages';
//
import ComponentSkeleton from '../../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
import Pagination from '../../../../../../component/pagination/_main/Pagination';
//
import FashionRateSkeleton from '../skeleton/FashionRateSkeleton';
import FashionRateList from '../list/_main/FashionRateList';
import FsIRateOverview from '../overview/_main/FsIRateOverview';
//
import './FashionRate.scss';

//
FashionRate.propTypes = {};

//
function FashionRate({ id }) {
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

    const { page_obj, page, pages, is_fetching, has_fetched } = state_obj;

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
        <div className="FashionRate padding-16px bg-primary" ref={ref_main_elm}>
            <h2 className="margin-bottom-1rem font-18px text-secondary label-field">
                ĐÁNH GIÁ SẢN PHẨM
            </h2>

            <div>
                <FsIRateOverview
                    filter_ix={ref_filter_ix.current}
                    handleFilterRate={handleFilterRate}
                />
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
                    <div className="text-align-center text-third label-field">
                        Chưa có đánh giá nào
                    </div>
                ) : (
                    <React.Fragment>
                        <FashionRateList rate_page_arr={page_obj[page]} />

                        <Pagination
                            count={pages}
                            num_side_center={2}
                            current={page}
                            is_fetching={is_fetching}
                            handleChangePage={onChangePage}
                        />
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}

export default FashionRate;
