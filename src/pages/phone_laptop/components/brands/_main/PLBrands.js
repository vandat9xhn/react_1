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
function PLBrands({ brand_arr, handleChooseBrand }) {
    //
    return (
        <div className="PLBrands">
            <div className="PLBrands_row display-flex align-items-center flex-wrap">
                {brand_arr.map((brand_obj, ix) => (
                    <div key={ix} className="PLBrands_item margin-5px">
                        <ProductBrandItem
                            ix={ix}
                            checked={brand_obj.checked}
                            title={brand_obj.title}
                            handleChooseBrand={handleChooseBrand}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PLBrands;
