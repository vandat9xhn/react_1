import React from 'react';
import PropTypes from 'prop-types';
//
import PLProduct from '../../../../component/pl_product/_main/PLProduct';
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
                {products.map((product_obj, index) => (
                    <div
                        key={product_obj.id || index}
                        className="ProductContent_item border-blur"
                    >
                        <PLProduct product_obj={product_obj} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductContent;
