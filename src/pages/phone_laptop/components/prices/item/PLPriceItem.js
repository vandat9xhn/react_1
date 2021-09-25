import React from 'react';
import PropTypes from 'prop-types';
//
import './PLPriceItem.scss';

//
PLPriceItem.propTypes = {};

//
function PLPriceItem({ ix, price_str, is_active, handleChoosePrice }) {
    //
    function onChoosePrice() {
        handleChoosePrice(ix);
    }

    //
    return (
        <div
            className={`PLPriceItem padding-5px border-blur brs-5px ${
                is_active ? 'PLPriceItem-active text-blue' : ''
            }`}
            onClick={onChoosePrice}
        >
            {price_str}
        </div>
    );
}

export default PLPriceItem;
