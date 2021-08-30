import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { getFsShopDiscountTitle } from '../../../../../../_some_function/fashion/getFsShopDiscountTitle';
import { formatLocalDateString } from '../../../../../../_some_function/FormatDate';
//
import FsIShopDiscountItem from '../item/FsIShopDiscountItem';
//
import './FsIShopDiscount.scss';

//
FsIShopDiscount.propTypes = {};

//
function FsIShopDiscount({}) {
    //
    const { shop_info, saveShopDiscount } = useContext(context_fashion_item);

    const { discount_arr } = shop_info;

    //
    return (
        <div className="FsIShopDiscount bg-primary padding-8px">
            <h2
                className={`text-upper font-14px margin-bottom-16px label-field text-third ${
                    IS_MOBILE ? '' : 'padding-y-8px'
                }`}
            >
                Mã giảm giá của Shop
            </h2>

            <div className="FsIShopDiscount_contain overflow-y-auto">
                <ul className="list-none">
                    {discount_arr.map((discount_obj, ix) => (
                        <li key={ix} className="margin-bottom-16px">
                            <FsIShopDiscountItem
                                ix={ix}
                                title={getFsShopDiscountTitle({
                                    discount_value: discount_obj.discount_value,
                                    min_spend: discount_obj.min_spend,
                                })}
                                expiry={formatLocalDateString(
                                    discount_obj.end_time
                                )}
                                status_card={discount_obj.status_card}
                                handleSave={saveShopDiscount}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FsIShopDiscount;
