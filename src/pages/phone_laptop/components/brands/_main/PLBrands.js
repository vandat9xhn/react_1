import React from 'react';
import PropTypes from 'prop-types';
//
import ProductBrandItem from '../item/PLBrandItem';
//
import './PLBrands.scss';

//
PLBrands.propTypes = {
    brand_arr: PropTypes.array,
    brand_ix: PropTypes.number,
    handleChooseBrand: PropTypes.func,
};

//
function PLBrands({ brand_arr, brand_ix, handleChooseBrand }) {
    //
    return (
        <div className="PLBrands">
            <div className="PLBrands_row display-flex align-items-center flex-wrap">
                {['All', ...brand_arr].map((name, index) => (
                    <div
                        key={`${index}`}
                        className="PLBrands_item margin-5px"
                    >
                        <ProductBrandItem
                            ix={index}
                            is_active={brand_ix.includes(index)}
                            name={name}
                            handleChooseBrand={handleChooseBrand}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PLBrands;
