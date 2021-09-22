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
            <div className="bg-gold">
                <h2 className="padding-y-10px text-align-center text-upper font-500 font-16px">
                    <Link className="SpecProducts_text text-white" to={link}>
                        {title}
                    </Link>
                </h2>
            </div>

            <div className="SpecProducts_list">
                <ProductContent products={products} />
            </div>
        </div>
    );
}

export default SpecProducts;
