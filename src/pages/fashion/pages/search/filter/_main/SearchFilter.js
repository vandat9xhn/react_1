import React from 'react';
import PropTypes from 'prop-types';
//
import FilterArea from '../area/_main/FilterArea';
import FilterRate from '../rate/_main/FilterRate';
import FilterSort from '../sort/_main/FilterSort';
//
import './SearchFilter.scss';

//
SearchFilter.propTypes = {
    ...FilterArea.propTypes,
    ...FilterRate.propTypes,
    ...FilterSort.propTypes,
};

//
function SearchFilter({
    area_arr,
    rate_ix,
    sort_by,

    handleAreaChecked,
    handleFilterRate,
    handleFilterSort,
}) {
    //
    return (
        <div className="SearchFilter bg-primary brs-5px box-shadow-1">
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
