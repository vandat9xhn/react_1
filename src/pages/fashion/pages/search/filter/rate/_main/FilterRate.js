import React from 'react';
import PropTypes from 'prop-types';
//
import FilterRateItem from '../item/FilterRateItem';
//
import './FilterRate.scss';

//
FilterRate.propTypes = {};

//
function FilterRate({ rate_ix, handleFilterRate }) {
    //
    return (
        <div className="FilterRate">
            <div className="font-500 text-cap">Đánh giá</div>

            <div className="SearchFilter_list">
                <div>
                    {[5, 4, 3, 2, 1].map((ix) => (
                        <div
                            key={`FilterRate_${ix}`}
                            className="FilterRate_item padding-y-8px"
                        >
                            <FilterRateItem
                                is_active={rate_ix == ix}
                                ix={ix}
                                handleFilterRate={handleFilterRate}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterRate;
