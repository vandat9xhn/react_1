import React from 'react';
import PropTypes from 'prop-types';
//
import FashionCardDiscount from '../../../../components/card_discount/FashionCardDiscount';

//
FsIShopDiscountItem.propTypes = {
    ix: PropTypes.number,
    title: PropTypes.string,
    expiry: PropTypes.string,
    handleSave: PropTypes.func,
};

//
function FsIShopDiscountItem({ ix, title, expiry, handleSave }) {
    //
    function onSave() {
        handleSave(ix);
    }

    //
    return (
        <div className="FsIShopDiscountItem">
            <FashionCardDiscount
                title={title}
                expiry={expiry}
                handleSave={onSave}
            />
        </div>
    );
}

export default FsIShopDiscountItem;
