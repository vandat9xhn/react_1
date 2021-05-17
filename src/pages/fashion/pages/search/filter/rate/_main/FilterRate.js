import React from 'react';
import PropTypes from 'prop-types';
//
import { search_rate_props } from '../../__prop-types/FilterPropTypes';
import FilterRateItem from '../item/FilterRateItem';
// 
import './FilterRate.scss';

//
FilterRate.propTypes = {
    ...search_rate_props,
};

//
function FilterRate(props) {
    const { active_rate_ix, handleFilterRate } = props;

    //
    return (
        <div className="FilterRate">

            <div className="SearchFilter_title label-field">Rate</div>

            <div className="SearchFilter_list">
                <div>
                    {[5, 4, 3, 2, 1].map((ix) => (
                        <div key={`FilterRate_${ix}`} className="SearchFilter_item">
                            <FilterRateItem
                                is_active={active_rate_ix == ix}
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
