import React from 'react';
import PropTypes from 'prop-types';
//
import FashionCardDiscount from '../../../../components/card_discount/FashionCardDiscount';
//
import './FsSDiscountItem.scss';

//
FsSDiscountItem.propTypes = {
    ix: PropTypes.number,
    ...FashionCardDiscount.propTypes,
};

//
function FsSDiscountItem({ ix, title, expiry, status_card, handleSave }) {
    //
    function onSave() {
        handleSave(ix);
    }

    //
    return (
        <div className="FsSDiscountItem display-flex-center pos-rel bg-fashion-heart">
            <FashionCardDiscount
                title={title}
                expiry={expiry}
                status_card={status_card}
                handleSave={onSave}
            />

            <div className="FsSDiscountItem_side pos-abs left-0 top-0 trans-x--50per h-100per"></div>
        </div>
    );
}

export default FsSDiscountItem;
