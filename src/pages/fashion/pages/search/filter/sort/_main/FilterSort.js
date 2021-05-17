import React from 'react';
import PropTypes from 'prop-types';
//
import FilterSortItem from '../item/FilterSortItem';
import { search_sort_props } from '../../__prop-types/FilterPropTypes';
// 
import './FilterSort.scss';

//
const arr_sort = [
    { title: 'Price up', sort_by: '-price' },
    { title: 'Price down', sort_by: 'price' },
    { title: 'New product', sort_by: '-created_time' },
    { title: 'Old product', sort_by: 'created_time' },
];

//
FilterSort.propTypes = {
    ...search_sort_props,
};

//
function FilterSort(props) {
    const {cur_sort_by, handleFilterSort} = props;

    // 
    return (
        <div className="FilterSort">
            <div className="SearchFilter_title label-field">Sort by</div>

            <div className="SearchFilter_list">
                <div>
                    {arr_sort.map((item, ix) => (
                        <div key={`FilterSort_${ix}`} className="SearchFilter_item">
                            <FilterSortItem
                                title={item.title}
                                sort_by={item.sort_by}
                                is_active={item.sort_by == cur_sort_by}
                                handleFilterSort={handleFilterSort}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FilterSort;
