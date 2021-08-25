import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../../_context/fashion/item/context_fashion_item';
//
import { UnitNumber } from '../../../../../../../../_some_function/UnitNumber';
//
import FsItemIfRSDDetail from '../detail/_main/FsItemIfRSDDetail';
//
import './FsItemIfRShopDiscount.scss';

//
FsItemIfRShopDiscount.propTypes = {
    // shop_discount_arr: FsItemIfRSDDetail.propTypes.shop_discount_arr,
    // shop_picture: FsItemIfRSDDetail.propTypes.shop_picture,
    // saveShopDiscount: PropTypes.func,
};

//
function FsItemIfRShopDiscount({}) {
    //
    const { shop_info, saveShopDiscount } = useContext(context_fashion_item);

    const { picture, discount_arr } = shop_info;

    if (discount_arr.length == 0) {
        return null;
    }

    //
    return (
        <div className="FsItemIfRShopDiscount pos-rel">
            <div className="fashion-item-row">
                <div className="fashion-item-label">
                    <span className="text-third">Mã Giảm Giá Của Shop</span>
                </div>

                <div>
                    <ul className="display-flex flex-wrap list-none">
                        {discount_arr.map((shop_discount_obj, ix) => (
                            <li key={ix} className="FsItemIfRShopDiscount_item">
                                <div className="fashion-value-padding bg-fashion-heart">
                                    <span className="color-fashion font-14px">
                                        GIẢM ₫
                                        {UnitNumber(
                                            shop_discount_obj.discount_value
                                        )}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="FsItemIfRShopDiscount_detail display-none pos-abs top-100per left-0 w-100per z-index-lv1">
                <FsItemIfRSDDetail
                    shop_discount_arr={discount_arr}
                    shop_picture={picture}
                    saveShopDiscount={saveShopDiscount}
                />
            </div>
        </div>
    );
}

export default FsItemIfRShopDiscount;
