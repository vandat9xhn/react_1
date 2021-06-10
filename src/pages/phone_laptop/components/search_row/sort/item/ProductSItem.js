import React from 'react';
import PropTypes from 'prop-types';
//
import './ProductSItem.scss';

//
ProductSortItem.propTypes = {};

//
function ProductSortItem({ sort_ix, is_active, item, handleChooseSort }) {
    //
    function onChooseSort() {
        handleChooseSort(sort_ix);
    }

    //
    return (
        <div
            className="ProductSortItem hv-bg-blur cursor-pointer"
            onClick={onChooseSort}
        >
            <h4
                className={`ProductSortItem_item margin-0 ${
                    is_active ? 'text-blue' : ''
                }`}
            >
                {item} {is_active ? '    ✓' : ''}
            </h4>
        </div>
    );
}

export default ProductSortItem;
