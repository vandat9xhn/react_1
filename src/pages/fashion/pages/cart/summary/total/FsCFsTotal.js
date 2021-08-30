import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../_some_function/FormatNum';
//
import CheckBoxCustom from '../../../../../../component/input/checkbox_custom/CheckBoxCustom';
//
import './FsCFsTotal.scss';

//
FsCFsTotal.propTypes = {};

//
function FsCFsTotal({
    item_count,
    item_checked_count,
    total_old_price,
    total_price,
    coin,

    handleSaveLiked,
    handleDeleteItemChecked,
    handleCheckedAll,
    handleGoingToBuy,
}) {
    //
    function onDeleteItemChecked() {
        if (item_checked_count) {
            handleDeleteItemChecked();
        }
    }

    //
    return (
        <div className="FsCFsTotal fs-cart-summary-part">
            <div className="FsCFsTotal_row flex-between-center">
                <div className="display-flex align-items-center font-16px">
                    <div className="margin-right-10px">
                        <CheckBoxCustom
                            checked={item_checked_count == item_count}
                            title={`Chọn tất cả (${item_count})`}
                            handleChangeChecked={handleCheckedAll}
                        />
                    </div>

                    <div
                        className={`margin-right-10px ${
                            item_checked_count
                                ? 'cursor-pointer'
                                : 'pointer-events-none opacity-05'
                        }`}
                        onClick={onDeleteItemChecked}
                    >
                        Xóa
                    </div>

                    <div
                        className="color-fashion cursor-pointer"
                        onClick={handleSaveLiked}
                    >
                        Lưu vào mục Đã thích
                    </div>
                </div>

                <div className="display-flex align-items-center">
                    <div></div>

                    <div className="margin-right-10px">
                        <div>
                            <span>
                                Tổng thanh toán ({item_checked_count} Sản phẩm):
                            </span>

                            <span className="margin-left-10px color-fashion font-24px">
                                ₫{formatNum(total_price - coin)}
                            </span>
                        </div>

                        {total_price ? (
                            <div className="text-align-end font-14px">
                                <span>Tiết kiệm</span>

                                <span className="margin-left-10px color-fashion">
                                    ₫
                                    {formatNum(
                                        total_old_price + coin - total_price
                                    )}
                                </span>
                            </div>
                        ) : null}
                    </div>

                    <button
                        type="button"
                        className="FsCFsTotal_btn_buy padding-8px btn btn-hv btn-active bg-fashion-red brs-5px text-white cursor-pointer"
                        onClick={handleGoingToBuy}
                    >
                        Mua Hàng
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FsCFsTotal;
