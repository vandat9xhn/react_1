import React from 'react';
import PropTypes from 'prop-types';

//
ProductBrandItem.propTypes = {};

//
function ProductBrandItem(props) {
    const { item, ix, is_active, handleChooseBrand } = props;

    //
    function onChooseBrand() {
        handleChooseBrand(ix);
    }

    //
    return (
        <div>
            <div
                className={`ProductBrands__elm label-field brs-5px ${
                    is_active ? 'ProductBrands_active' : 'ProductBrands_item'
                }`}
                onClick={onChooseBrand}
                title={item}
            >
                {item}
            </div>
        </div>
    );
}

export default ProductBrandItem;
