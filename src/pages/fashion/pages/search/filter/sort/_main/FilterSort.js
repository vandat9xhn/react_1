import React from 'react';
import PropTypes from 'prop-types';
//
import FilterSortItem from '../item/FilterSortItem';
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
    ...FilterSortItem.propTypes,
};

//
function FilterSort(props) {
    const {sort_by, handleFilterSort} = props;

    // 
    return (
        <div className="FilterSort">
            <h3 className="SearchFilter_title margin-0">Sort by</h3>

            <div className="SearchFilter_list">
                <div>
                    {arr_sort.map((item, ix) => (
                        <div key={`FilterSort_${ix}`} className="SearchFilter_item">
                            <FilterSortItem
                                title={item.title}
                                sort_by={item.sort_by}
                                is_active={item.sort_by == sort_by}
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
