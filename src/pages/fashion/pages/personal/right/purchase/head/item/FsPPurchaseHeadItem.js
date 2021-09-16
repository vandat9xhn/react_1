import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPPurchaseHeadItem.scss';

//
FsPPurchaseHeadItem.propTypes = {};

//
function FsPPurchaseHeadItem({
    ix,
    is_active,
    
    title,
    count_new,

    handleChoose,
}) {
    //
    function onChoose() {
        !is_active && handleChoose(ix);
    }

    //
    return (
        <div
            className={`FsPPurchaseHeadItem padding-10px text-align-center font-16px cursor-pointer ${
                is_active ? 'FsPPurchaseHeadItem-active color-fashion' : ''
            }`}
            onClick={onChoose}
        >
            {title} {count_new ? `(${count_new})` : ''}
        </div>
    );
}

export default FsPPurchaseHeadItem;
