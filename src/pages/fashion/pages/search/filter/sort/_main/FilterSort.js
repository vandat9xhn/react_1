import React from 'react';
import PropTypes from 'prop-types';
//
import FilterSortItem from '../item/FilterSortItem';
//
import './FilterSort.scss';

//
FilterSort.propTypes = {
    ...FilterSortItem.propTypes,
};

//
function FilterSort({ sort_arr, sort_ix, handleSort }) {
    //
    return (
        <div className="FilterSort">
            <div className="font-500 text-cap">Sắp xếp theo</div>

            <div className="SearchFilter_list">
                <ul className="list-none">
                    {sort_arr.map((item, ix) => (
                        <li
                            key={`${ix}`}
                            className="FilterSort_item padding-y-8px"
                        >
                            <FilterSortItem
                                title={item}
                                sort_ix={ix}
                                is_active={ix == sort_ix}
                                handleSort={handleSort}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FilterSort;
