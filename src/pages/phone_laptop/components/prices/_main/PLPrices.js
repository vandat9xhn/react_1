import React from 'react';
import PropTypes from 'prop-types';
//
import PLPriceItem from '../item/PLPriceItem';
// 
import './PLPrices.scss';

//
PLPrices.propTypes = {
    price_arr: PropTypes.array,
    price_ix: PropTypes.array,
    handleChoosePrice: PropTypes.func,
};

//
function PLPrices({ price_arr, price_ix, handleChoosePrice }) {
    //
    return (
        <div className="PLPrices">
            <div className="PLPrices_row">
                {['All', ...price_arr].map((price_str, ix) => (
                    <div key={ix} className="PLPrices_item">
                        <PLPriceItem
                            ix={ix}
                            price_str={price_str}
                            is_active={ix == price_ix}
                            handleChoosePrice={handleChoosePrice}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PLPrices;
