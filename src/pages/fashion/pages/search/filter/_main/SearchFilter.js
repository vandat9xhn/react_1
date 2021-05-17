import React from 'react';
import PropTypes from 'prop-types';
//
import {
    search_area_props,
    search_rate_props,
    search_sort_props,
} from '../__prop-types/FilterPropTypes';

import FilterArea from '../area/_main/FilterArea';
import FilterRate from '../rate/_main/FilterRate';
import FilterSort from '../sort/_main/FilterSort';
//
import './SearchFilter.scss';

//
SearchFilter.propTypes = {
    ...search_area_props,
    ...search_rate_props,
    ...search_sort_props,
};

//
function SearchFilter(props) {
    const {
        area_arr,
        handleAreaChecked,
        //
        rate_ix,
        handleFilterRate,
        //
        sort_by,
        handleFilterSort,
    } = props;

    //
    return (
        <div className="SearchFilter brs-5px box-shadow-1">
            <div className="SearchFilter_row">
                <div className="SearchFilter_col">
                    <FilterArea
                        area_arr={area_arr}
                        handleAreaChecked={handleAreaChecked}
                    />
                </div>

                <div className="SearchFilter_col">
                    <FilterRate
                        rate_ix={rate_ix}
                        handleFilterRate={handleFilterRate}
                    />
                </div>

                <div className="SearchFilter_col">
                    <FilterSort
                        sort_by={sort_by}
                        handleFilterSort={handleFilterSort}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchFilter;
