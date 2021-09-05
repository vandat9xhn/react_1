import React from 'react';
import PropTypes from 'prop-types';

//
ProductBrandItem.propTypes = {};

//
function ProductBrandItem({ item, ix, is_active, handleChooseBrand }) {
    //
    function onChooseBrand() {
        handleChooseBrand(ix);
    }

    //
    return (
        <div
            className={`ProductBrands__elm font-500 brs-5px ${
                is_active ? 'ProductBrands_active' : 'ProductBrands_item'
            }`}
            onClick={onChooseBrand}
        >
            {item}
        </div>
    );
}

export default ProductBrandItem;
