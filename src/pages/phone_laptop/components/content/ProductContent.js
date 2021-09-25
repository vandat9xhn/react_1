import React from 'react';
import PropTypes from 'prop-types';
//
import ProductItem from '../../../../component/products/product_item/ProductItem';
//
import './ProductContent.scss';

ProductContent.propTypes = {
    products: PropTypes.array,
};
//
function ProductContent({ products }) {
    //
    return (
        <div className="ProductContent bg-primary">
            <div className="ProductContent_row display-flex flex-wrap">
                {products.map((item, index) => (
                    <div key={index} className="ProductContent_item padding-8px border-blur">
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

export default ProductContent;
