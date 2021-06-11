import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import ProductContent from '../../../components/content/ProductContent';
//
import './SpecProducts.scss';

// 
SpecProducts.propTypes = {
    products: PropTypes.array,
};

//
function SpecProducts({ products, title, link }) {
    //
    return (
        <div className="SpecProducts">
            <div className="SpecProducts_title">
                <h3 className="App_title margin-0">
                    <Link className="SpecProducts_text normal-text" to={link}>
                        {title}
                    </Link>
                </h3>
            </div>

            <div className="SpecProducts_list">
                <ProductContent products={products} />
            </div>
        </div>
    );
}

export default SpecProducts;
