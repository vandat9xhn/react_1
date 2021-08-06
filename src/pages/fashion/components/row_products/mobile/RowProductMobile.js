import React from 'react';
import PropTypes from 'prop-types';
// 
import ProductItem from '../../../../../component/products/product_item/ProductItem';

// 
RowProductMobile.propTypes = {
    
};

// 
function RowProductMobile({products}) {
    return (
        <div className="max-w-100per overflow-x-auto snap-x-mandatory">
            <div className="RowProduct_row display-flex">
                    {products.map((product, ix) => (
                        <div
                            key={`${product.id || ix}`}
                            className="snap-align-end"
                        >
                            <ProductItem
                                link={`/fashion:${product.id}`}
                                img={product.vid_pics[0].vid_pic}
                                name={product.name}
                                new_price={product.new_price}
                                old_price={product.old_price}
                                discount={product.discount}
                            />
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default RowProductMobile;