import React from 'react';
import PropTypes from 'prop-types';
// 
import ProductItem from '../../../../../../component/products/product_item/ProductItem';
// 
import './ShopProducts.scss';

// 
ShopProducts.propTypes = {
    
};

// 
function ShopProducts(props) {
    const {products} = props;

    // 
    return (
        <div className="ShopProducts margin-auto bg-primary">
            <div className="display-flex justify-content-center flex-wrap">
                {products.map((product, ix) => (
                    <div key={`ShopProducts_${ix}`}>
                        <ProductItem
                            link={`/fashion:${product.id}`}
                            img={product.vid_pics[0].vid_pic}
                            name={product.name}
                            in_stock="In stock"
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

export default ShopProducts;