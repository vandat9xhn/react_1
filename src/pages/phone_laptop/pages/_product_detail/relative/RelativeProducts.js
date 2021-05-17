import React from 'react';
import PropTypes from 'prop-types';

import './RelativeProducts.scss';
import ProductItem from '../../../../../component/products/product_item/ProductItem';
import image_loading from '../../../../../../image/image_loading.svg';
//
function RelativeProducts(props) {
    const {relative_products } = props;

    //
    return (
        <div className="RelativeProducts brs-5px">
            <div className="RelativeProducts_contain">
                {/* title */}
                <div className="label-field">Relative Products</div>
                <br />

                {/* main */}
                <div className="RelativeProducts_row">
                    {relative_products.map((item, index) => (
                        <div key={`RelativeProducts__${index}`} className="RelativeProducts_col">
                            <ProductItem
                                link={'/phone-laptop:' + item.id}
                                img={item.url || image_loading}
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
        </div>
    );
}

RelativeProducts.propTypes = {
    // list relative phones
    relative_products: PropTypes.array,
    // click link new phone
    onClick: PropTypes.func,
};

RelativeProducts.defaultProps = {
    relative_products: [1, 2, 3, 4, 5]
}

export default RelativeProducts;
