import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import FilterRate from '../rate/_main/FilterRate';
import FilterSort from '../sort/_main/FilterSort';
import FsSearchFilterChecked from '../checked/_main/FsSearchFilterChecked';
import FsScPriceMinMax from '../price_min_max/FsScPriceMinMax';
//
import './SearchFilter.scss';

//
SearchFilter.propTypes = {
    ...FilterRate.propTypes,
    ...FilterSort.propTypes,
};

//
function SearchFilter({
    filter_arr,
    sort_arr,

    min_price,
    max_price,
    rate_ix,
    sort_ix,

    handleFilterChecked,
    handleFilterRate,
    handleApplyPriceMinMax,
    handleSort,
    handleClearFilter,
}) {
    //
    return (
        <div className="SearchFilter primary-08 font-14px">
            <div className="margin-bottom-20px text-upper font-700 font-15px">
                Bộ lọc tìm kiếm
            </div>

            <div className="display-flex flex-col">
                {filter_arr.map((filter_obj, filter_ix) => (
                    <div
                        key={filter_ix}
                        className="SearchFilter_part margin-bottom-15px"
                        style={{ order: filter_obj.order }}
                    >
                        <FsSearchFilterChecked
                            filter_ix={filter_ix}
                            title={filter_obj.title}
                            arr={filter_obj.arr}
                            handleFilterChecked={handleFilterChecked}
                        />
                    </div>
                ))}

                <div className="SearchFilter_part margin-bottom-15px">
                    <FilterRate
                        rate_ix={rate_ix}
                        handleFilterRate={handleFilterRate}
                    />
                </div>

                <div className="SearchFilter_part margin-bottom-15px">
                    <FsScPriceMinMax
                        default_min_price={min_price}
                        default_max_price={max_price}
                        handleApplyPriceMinMax={handleApplyPriceMinMax}
                    />
                </div>

                {IS_MOBILE ? (
                    <div className="SearchFilter_part margin-bottom-15px">
                        <FilterSort
                            sort_arr={sort_arr}
                            sort_ix={sort_ix}
                            handleSort={handleSort}
                        />
                    </div>
                ) : null}
            </div>

            <div className="padding-x-5px">
                <button
                    className="btn btn-hv btn-active w-100per padding-y-5px bg-fashion-red brs-3px text-white text-upper cursor-pointer"
                    type="button"
                    onClick={handleClearFilter}
                >
                    Xóa tất cả
                </button>
            </div>
        </div>
    );
}

export default SearchFilter;
