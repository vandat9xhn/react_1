import React from 'react';
import PropTypes from 'prop-types';
//
import ProductCFTItem from '../item/ProductCFTItem';
// 
import './ProductCFType.scss';

//
ProductCFType.propTypes = {};

//
function ProductCFType(props) {
    const { current, title, current_name, arr, closeCurrentItem } = props;

    //
    return (
        <div className="ProductCFType">
            <div className="font-500">
                {title}
            </div>

            <div className="display-flex">
                {current.map((item, index) => (
                    <div
                        key={`ProductCFType_item_${index}`}
                        className="ProductCFType_item"
                    >
                        <ProductCFTItem
                            ix={index}
                            current_name={current_name}
                            arr_item={arr[item]}
                            closeCurrentItem={closeCurrentItem}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCFType;
