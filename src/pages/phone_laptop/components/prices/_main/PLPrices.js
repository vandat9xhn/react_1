import React from 'react';
import PropTypes from 'prop-types';
//
import PLPriceItem from '../item/PLPriceItem';
// 
import './PLPrices.scss';

//
PLPrices.propTypes = {
    price_arr: PropTypes.array,
    handleChoosePrice: PropTypes.func,
};

//
function PLPrices({ price_arr, handleChoosePrice }) {
    //
    return (
        <div className="PLPrices padding-5px">
            <div className="PLPrices_row display-flex flex-wrap">
                {price_arr.map((price_obj, ix) => (
                    <div key={ix} className="PLPrices_item padding-5px">
                        <PLPriceItem
                            ix={ix}
                            title={price_obj.title}
                            checked={price_obj.checked}
                            handleChoosePrice={handleChoosePrice}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PLPrices;
