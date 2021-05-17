import React from 'react';
import PropTypes from 'prop-types';
// 
import ProductItem from '../../../../../component/products/product_item/ProductItem';

// 
SearchProducts.propTypes = {
    products: PropTypes.array,
};

// 
function SearchProducts(props) {
    const {products} = props;

    // 
    return (
        <div>
            <div className="display-flex justify-content-center flex-wrap">
                {products.map((product, ix) =>(
                    <div key={`SearchProduct_${ix}`}>
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

export default SearchProducts;