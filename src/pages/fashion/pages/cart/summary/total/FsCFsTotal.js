import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
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
    free_ship_cost,

    is_done,

    handleSaveLiked,
    handleDeleteItemChecked,
    handleCheckedAll,
    handleGoingToBuy,
}) {
    //
    const last_total = `₫ ${formatNum(total_price - coin - free_ship_cost)}`;
    const saved = `₫ ${formatNum(
        total_old_price + coin + free_ship_cost - total_price
    )}`;

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
                <div
                    className={`FsCFsTotal_left display-flex align-items-center font-16px ${
                        !is_done ? 'FsCFsTotal_left-not-done' : ''
                    }`}
                >
                    <div className="FsCFsTotal_left_check display-flex margin-right-10px text-nowrap">
                        <CheckBoxCustom
                            checked={item_checked_count == item_count}
                            title=""
                            handleChangeChecked={handleCheckedAll}
                        />

                        <div
                            className={`margin-left-5px text-nowrap cursor-pointer ${
                                item_checked_count == item_count
                                    ? 'font-500 color-fashion'
                                    : ''
                            }`}
                            onClick={handleCheckedAll}
                        >
                            Chọn tất cả ({item_count})
                        </div>
                    </div>

                    <div
                        className={`text-nowrap ${
                            is_done && IS_MOBILE
                                ? 'display-none'
                                : 'display-flex align-items-center'
                        }`}
                    >
                        <div
                            className={`${
                                IS_MOBILE
                                    ? 'margin-left-10px'
                                    : 'margin-right-10px'
                            } ${
                                item_checked_count
                                    ? 'cursor-pointer'
                                    : 'pointer-events-none opacity-05'
                            }`}
                            onClick={onDeleteItemChecked}
                        >
                            Xóa
                        </div>

                        <div
                            className={`color-fashion cursor-pointer text-nowrap ${
                                IS_MOBILE ? 'order--1' : ''
                            }`}
                            onClick={handleSaveLiked}
                        >
                            {IS_MOBILE
                                ? 'Chuyển đến mục ưa thích'
                                : 'Lưu vào mục đã thích'}
                        </div>
                    </div>
                </div>

                <div
                    className={`${
                        !is_done && IS_MOBILE ? 'display-none' : ''
                    } ${IS_MOBILE ? '' : 'display-flex align-items-center'}`}
                >
                    <div className="margin-right-10px text-nowrap">
                        <div className={`${IS_MOBILE ? 'text-align-end' : ''}`}>
                            <span className={`${IS_MOBILE ? 'font-14px' : ''}`}>
                                Tổng thanh toán
                                {IS_MOBILE
                                    ? ':'
                                    : `(${item_checked_count} Sản phẩm:)`}
                            </span>

                            <span
                                className={`margin-left-5px color-fashion ${
                                    IS_MOBILE ? 'font-16px' : 'font-24px'
                                }`}
                            >
                                {last_total}
                            </span>
                        </div>

                        <div
                            className={`text-align-end ${
                                total_price ? '' : 'display-none'
                            } ${IS_MOBILE ? 'font-12px' : 'font-14px'}`}
                        >
                            <span>Tiết kiệm</span>

                            <span className="margin-left-5px color-fashion">
                                {saved}
                            </span>
                        </div>
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
