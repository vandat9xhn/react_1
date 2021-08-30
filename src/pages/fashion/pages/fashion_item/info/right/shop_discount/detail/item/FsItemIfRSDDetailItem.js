import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateString } from '../../../../../../../../../_some_function/FormatDate';
import { getFsShopDiscountTitle } from '../../../../../../../../../_some_function/fashion/getFsShopDiscountTitle';
//
import FashionCardDiscount from '../../../../../../../components/card_discount/FashionCardDiscount';
//
import './FsItemIfRSDDetailItem.scss';

//
FsItemIfRSDDetailItem.propTypes = {
    shop_discount_obj: PropTypes.shape({
        // id: PropTypes.number,
        discount: PropTypes.string,
        discount_value: PropTypes.number,
        end_time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        status_card: PropTypes.string,
    }),
    shop_picture: PropTypes.string,
};

//
function FsItemIfRSDDetailItem({
    ix,
    shop_discount_obj,
    shop_picture,
    saveShopDiscount,
}) {
    //
    function onSaveShopDiscount() {
        saveShopDiscount(ix);
    }

    //
    return (
        <div className="FsItemIfRSDDetailItem box-shadow-1">
            <div className="display-flex align-items-center">
                <div className="padding-16px">
                    <img
                        className="brs-50"
                        src={shop_picture}
                        alt=""
                        width="58"
                        height="58"
                    />
                </div>

                <FashionCardDiscount
                    title={getFsShopDiscountTitle({
                        discount_value: shop_discount_obj.discount_value,
                        min_spend: shop_discount_obj.min_spend,
                    })}
                    expiry={formatLocalDateString(shop_discount_obj.end_time)}
                    status_card={shop_discount_obj.status_card}
                    handleSave={onSaveShopDiscount}
                />
            </div>
        </div>
    );
}

export default FsItemIfRSDDetailItem;
