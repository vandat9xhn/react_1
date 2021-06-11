import React from 'react';
import PropTypes from 'prop-types';
//
import ProductBrandItem from '../item/ProductBrandItem';
// 
import './ProductBrands.scss';

//
ProductBrands.propTypes = {
    arr_brands: PropTypes.array,
    current_brands: PropTypes.array,
    //
    handleChooseBrand: PropTypes.func,
    handleChooseAllBrand: PropTypes.func,
};

//
function ProductBrands({arr_brands,
    current_brands,
    handleChooseBrand,
    handleChooseAllBrand,}) {
   

        // 
    return (
        <div className="ProductBrands">
            <div className="ProductBrands_row display-flex align-items-center">
                <div className="ProductBrands__item">
                    <div
                        className={`ProductBrands__all-brand ProductBrands__elm label-field brs-5px ${
                            current_brands.length == 0
                                ? 'ProductBrands_active'
                                : 'ProductBrands_item'
                        }`}
                        onClick={handleChooseAllBrand}
                    >
                        All brands
                    </div>
                </div>

                {arr_brands.map((item, index) => (
                    <div
                        key={`ProductBrands_${index}`}
                        className="ProductBrands__item"
                    >
                        <ProductBrandItem
                            ix={index}
                            is_active={current_brands.includes(index)}
                            item={item}
                            handleChooseBrand={handleChooseBrand}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductBrands;
