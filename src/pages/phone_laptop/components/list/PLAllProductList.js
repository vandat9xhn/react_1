import React from 'react';
import PropTypes from 'prop-types';
//
import PLProduct from '../../../../component/pl_product/_main/PLProduct';
//
import './PLAllProductList.scss';

// 
PLAllProductList.propTypes = {
    products: PropTypes.array,

};
//
function PLAllProductList({ products }) {
    //
    return (
        <div className="PLAllProductList bg-primary">
            <div className="PLAllProductList_row display-flex flex-wrap">
                {products.map((product_obj, index) => (
                    <div
                        key={product_obj.id || index}
                        className="PLAllProductList_item border-blur"
                    >
                        <PLProduct product_obj={product_obj} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PLAllProductList;
