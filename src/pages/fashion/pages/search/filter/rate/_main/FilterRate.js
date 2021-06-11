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
            <h3 className="SearchFilter_title margin-0">Rate</h3>

            <div className="SearchFilter_list">
                <div>
                    {[5, 4, 3, 2, 1].map((ix) => (
                        <div
                            key={`FilterRate_${ix}`}
                            className="SearchFilter_item"
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
