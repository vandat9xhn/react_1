import React from 'react';
import PropTypes from 'prop-types';
//
import ProductSortItem from '../item/ProductSItem';
//
import './ProductSort.scss';

//
ProductSort.propTypes = {};

//
function ProductSort({ arr_sorts, current_sort, handleChooseSort }) {
    //
    return (
        <div className="ProductSort padding-8px">
            <h4 className="ProductSort_title margin-0 text-secondary">
                Sort by
            </h4>

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
