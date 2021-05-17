import React from 'react';
import PropTypes from 'prop-types';
// 
import './ProductSItem.scss';

// 
ProductSortItem.propTypes = {};

// 
function ProductSortItem(props) {
    const { sort_ix, is_active, item, handleChooseSort } = props;

    //
    function onChooseSort() {
        handleChooseSort(sort_ix);
    }

    //
    return (
        <div className="ProductSortItem">
            <div
                className={`ProductSortItem_item label-field cursor-pointer ${
                    is_active ? 'active-color' : 'hv-opacity'
                }`}
                onClick={onChooseSort}
            >
                {item} {is_active ? '    ✓' : ''}
            </div>
        </div>
    );
}

export default ProductSortItem;
