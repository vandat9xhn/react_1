import React from 'react';
import PropTypes from 'prop-types';
//
import './PLPriceItem.scss';

//
PLPriceItem.propTypes = {};

//
function PLPriceItem({ ix, title, checked, handleChoosePrice }) {
    //
    function onChoosePrice() {
        handleChoosePrice(ix);
    }

    //
    return (
        <div
            className={`PLPriceItem padding-x-8px padding-y-5px brs-5px cursor-pointer ${
                checked ? 'border-blue text-blue' : 'border-blur'
            }`}
            onClick={onChoosePrice}
        >
            {title}
        </div>
    );
}

export default PLPriceItem;
