import React from 'react';
import PropTypes from 'prop-types';
//
import FsItemIfRSDDetail from '../detail/_main/FsItemIfRSDDetail';
// 
import './FsItemIfRShopDiscount.scss';

//
FsItemIfRShopDiscount.propTypes = {
    shop_discount_arr: FsItemIfRSDDetail.propTypes.shop_discount_arr,
    shop_picture: FsItemIfRSDDetail.propTypes.shop_picture,
    saveShopDiscount: PropTypes.func,
};

//
function FsItemIfRShopDiscount({
    shop_picture,
    shop_discount_arr,
    saveShopDiscount,
}) {
    //
    return (
        <div className="FsItemIfRShopDiscount pos-rel">
            <div className="display-flex">
                <div>
                    <span className="text-secondary font-14px">
                        Mã Giảm Giá Của Shop
                    </span>
                </div>

                <div>
                    <ul className="display-flex list-none">
                        {shop_discount_arr.map((shop_discount_obj, ix) => (
                            <li key={ix}>
                                <div className="bg-heart-through">
                                    <span className="color-fashion">
                                        {shop_discount_obj.discount} GIẢM
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="FsItemIfRShopDiscount_detail pos-abs top-100per x-center w-100per display-none">
                <FsItemIfRSDDetail
                    shop_discount_arr={shop_discount_arr}
                    shop_picture={shop_picture}
                    saveShopDiscount={saveShopDiscount}
                />
            </div>
        </div>
    );
}

export default FsItemIfRShopDiscount;
