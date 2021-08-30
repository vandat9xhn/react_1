import React from 'react';
import PropTypes from 'prop-types';
//
import FsItemIfRSDDetailItem from '../item/FsItemIfRSDDetailItem';
//
import './FsItemIfRSDDetail.scss';

//
FsItemIfRSDDetail.propTypes = {
    shop_discount_arr: PropTypes.arrayOf(
        FsItemIfRSDDetailItem.propTypes.shop_discount_obj
    ),
    shop_picture: FsItemIfRSDDetailItem.propTypes.shop_picture,
    saveShopDiscount: PropTypes.func,
};

//
function FsItemIfRSDDetail({
    shop_discount_arr,
    shop_picture,
    saveShopDiscount,
}) {
    //
    return (
        <div className="FsItemIfRSDDetail pos-rel">
            <div className="FsItemIfRSDDetail_contain pos-rel bg-primary overflow-y-auto">
                <div className="margin-bottom-16px">
                    <div>
                        <span>Mã giảm giá của Shop</span>
                    </div>

                    <div>
                        <span className="text-third font-14px">
                            Tiết kiệm hơn khi áp dụng mã giảm giá của Shop. Liên
                            hệ với Shop nếu gặp trục trặc về mã giảm giá do Shop
                            tự tạo.
                        </span>
                    </div>
                </div>

                <div>
                    <ul className="list-none">
                        {shop_discount_arr.map((shop_discount_obj, ix) => (
                            <li key={ix} className="margin-bottom-16px">
                                <FsItemIfRSDDetailItem
                                    ix={ix}
                                    shop_discount_obj={shop_discount_obj}
                                    shop_picture={shop_picture}
                                    saveShopDiscount={saveShopDiscount}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRSDDetail;
