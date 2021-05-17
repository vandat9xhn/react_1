import React from 'react';
import PropTypes from 'prop-types';
// 
import ProductSortItem from '../item/ProductSItem';
// 
import './ProductSort.scss';

//
ProductSort.propTypes = {};

//
function ProductSort(props) {
    const { arr_sorts, current_sort, handleChooseSort } = props;

    //
    return (
        <div className="ProductSort">
            <div className="ProductSort_title label-field">Sort by</div>

            <div>
                {arr_sorts.map((item, index) => (
                    <div
                        className="display-flex"
                        key={`ProductSearch_sort_${index}`}
                    >
                        <ProductSortItem
                            sort_ix={index}
                            is_active={current_sort == index}
                            item={item}
                            handleChooseSort={handleChooseSort}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductSort;
