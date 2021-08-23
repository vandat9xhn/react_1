import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import { getFsShopDiscountTitle } from '../../../../../../_some_function/fashion/getFsShopDiscountTitle';
import { formatLocalDateString } from '../../../../../../_some_function/FormatDate';
//
import FsIShopDiscountItem from '../item/FsIShopDiscountItem';

//
FsIShopDiscount.propTypes = {};

//
function FsIShopDiscount({}) {
    //
    const { shop_info, saveShopDiscount } = useContext(context_fashion_item);

    const { discount_arr } = shop_info;

    //
    return (
        <div className="FsIShopDiscount">
            <h2 className="font-14px text-third">Mã giảm giá của Shop</h2>

            <div className="FsIShopDiscount_contain">
                <ul className="list-none">
                    {discount_arr.map((discount_obj, ix) => (
                        <li key={ix} className="margin-bottom-1rem">
                            <FsIShopDiscountItem
                                ix={ix}
                                title={getFsShopDiscountTitle({
                                    discount_value: discount_obj.discount_value,
                                    min_spend: discount_obj.min_spend,
                                })}
                                expiry={formatLocalDateString(
                                    discount_obj.end_time
                                )}
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
