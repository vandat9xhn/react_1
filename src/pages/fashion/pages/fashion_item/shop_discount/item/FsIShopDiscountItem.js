import React from 'react';
import PropTypes from 'prop-types';
//
import FashionCardDiscount from '../../../../components/card_discount/FashionCardDiscount';
//
import './FsIShopDiscountItem.scss';

//
FsIShopDiscountItem.propTypes = {
    ix: PropTypes.number,
    ...FashionCardDiscount.propTypes,
};

//
function FsIShopDiscountItem({ ix, title, expiry, status_card, handleSave }) {
    //
    function onSave() {
        handleSave(ix);
    }

    //
    return (
        <div className="FsIShopDiscountItem display-flex-center pos-rel bg-fashion-heart">
            <FashionCardDiscount
                title={title}
                expiry={expiry}
                status_card={status_card}
                handleSave={onSave}
            />

            <div className="FsIShopDiscountItem_side pos-abs left-0 top-0 trans-x--50per h-100per"></div>
        </div>
    );
}

export default FsIShopDiscountItem;
