import React from 'react';
import PropTypes from 'prop-types';
//
import ProductItem from '../../../../component/products/product_item/ProductItem';
//
import './ProductContent.scss';

//
function ProductContent(props) {
    const {products} = props;

    // 
    return (
        <div className="ProductContent">
            <div className="ProductContent_row">
                {products.map((item, index) => (
                    <div key={index} className="ProductContent_item">
                        <ProductItem
                            link={'/phone-laptop:' + item.id}
                            img={item.url}
                            name={item.name}
                            in_stock={item.in_stock}
                            new_price={item.new_price}
                            old_price={item.old_price}
                            discount={item.discount}
                            installment={item.installment}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

ProductContent.propTypes = {
    products: PropTypes.array,
};

export default ProductContent;
