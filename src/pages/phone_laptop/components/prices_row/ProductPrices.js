import React from 'react';
import PropTypes from 'prop-types';


import './ProductPrices.scss';
//
function ProductPrices(props) {
    const {current_prices, arr_prices, handleChoosePrice, handleChooseAllPrice} = props;

    return (
        <div className="ProductPrices">
            <div className="ProductPrices_row">
                    {/* prices */}
                    <div className="ProductPrices_prices">
                        {/* title */}
                        <div className="ProductPrices__block">
                            <div
                                className={`ProductPrices__item brs-5px label-field ${current_prices.length == 0 ? 'ProductPrices__item-active' : ''}`}
                                onClick={handleChooseAllPrice}
                                title="All prices"
                            >
                                All prices:
                            </div>
                        </div>

                        {/* item */}
                        {arr_prices.map((item, index) => (
                            <div
                                key={`ProductPrices_${index}`}
                                className="ProductPrices__block"
                            >
                                <div 
                                    className={`ProductPrices__item brs-5px active-color ${current_prices.includes(index) ? 'ProductPrices__item-active' : ''}`}
                                    onClick={() => handleChoosePrice(index)}
                                >
                                    {item}
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
        </div>
    );
}

ProductPrices.propTypes = {
    current_prices: PropTypes.array,
    arr_prices: PropTypes.array,
    // func
    handleChoosePrice: PropTypes.func,
    handleChooseAllPrice: PropTypes.func,
};

export default ProductPrices;