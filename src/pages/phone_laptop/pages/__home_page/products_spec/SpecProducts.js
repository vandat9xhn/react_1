import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './SpecProducts.scss';
import ProductContent from '../../../components/content/ProductContent';

//
function SpecProducts(props) {
    const {products, title, link} = props;

    return (
        <div className="SpecProducts">
            <div className="SpecProducts_title box-shadow-1">
                <div className="App_title">
                    <Link className="SpecProducts_text normal-text" to={link}>
                        {title}
                    </Link>
                </div>
            </div>

            <div className="SpecProducts_list">
                <ProductContent products={products}/>
            </div>
            
        </div>
    );
}


SpecProducts.propTypes = {
    products: PropTypes.array,
};

export default SpecProducts;