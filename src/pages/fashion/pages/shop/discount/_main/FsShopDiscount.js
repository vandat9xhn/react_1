import React from 'react';
import PropTypes from 'prop-types';
//
import { getFsShopDiscountTitle } from '../../../../../../_some_function/fashion/getFsShopDiscountTitle';
import { formatLocalDateString } from '../../../../../../_some_function/FormatDate';
//
import FsSDiscountItem from '../item/FsSDiscountItem';
//
import './FsShopDiscount.scss';

//
FsShopDiscount.propTypes = {};

//
function FsShopDiscount({ discount_arr, handleSave }) {
    //
    return (
        <div className="FsShopDiscount bg-primary">
            <h3 className="margin-bottom-16px text-upper font-16px font-400">
                Mã giảm giá của Shop
            </h3>

            <ul className="FsShopDiscount_row display-flex list-none">
                {discount_arr.map((discount_obj, ix) => (
                    <li
                        key={ix}
                        className={`FsShopDiscount_item flex-shrink-0 ${
                            ix == 0 ? '' : 'margin-left-15px'
                        }`}
                    >
                        <FsSDiscountItem
                            ix={ix}
                            title={getFsShopDiscountTitle({
                                discount_value: discount_obj.discount_value,
                                min_spend: discount_obj.min_spend,
                            })}
                            expiry={formatLocalDateString(
                                discount_obj.end_time
                            )}
                            status_card={discount_obj.status_card}
                            handleSave={handleSave}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FsShopDiscount;
