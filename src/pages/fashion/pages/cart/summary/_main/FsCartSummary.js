import React from 'react';
import PropTypes from 'prop-types';
//
import {
    getFsCartTotalOldPrice,
    getFsCartTotalPrice,
} from '../../../../../../_some_function/fashion/getFsCartTotalPrice';
//
import './FsCartSummaryCommon.scss';
//
import FsCFsVoucher from '../fashion_voucher/_main/FsCFsVoucher';
import FsCFsCoin from '../coin/FsCFsCoin';
import FsCFsTotal from '../total/FsCFsTotal';
//
import './FsCartSummary.scss';

//
FsCartSummary.propTypes = {};

//
function FsCartSummary({
    voucher_name,

    item_count,
    item_checked_count,

    checked_coin,
    coin,
    cart_shop_arr,

    handleChooseVoucher,
    handleCheckedCoin,
    handleSaveLiked,
    handleDeleteItemChecked,
    handleCheckedAll,
    handleGoingToBuy,
}) {
    const total_price = item_checked_count
        ? getFsCartTotalPrice(cart_shop_arr)
        : 0;
    const total_old_price = item_checked_count
        ? getFsCartTotalOldPrice(cart_shop_arr)
        : 0;

    // console.log(total_price, total_old_price);

    //
    return (
        <div className="FsCartSummary bg-primary box-shadow-1">
            <div className="FsCartSummary_row">
                <div className="FsCartSummary_voucher">
                    <FsCFsVoucher
                        voucher_name={voucher_name}
                        handleChooseVoucher={handleChooseVoucher}
                    />
                </div>

                <div
                    className={`FsCartSummary_coin ${
                        total_price && coin
                            ? ''
                            : 'pointer-events-none opacity-05'
                    }`}
                >
                    <FsCFsCoin
                        coin={coin}
                        checked_coin={checked_coin}
                        handleCheckedCoin={handleCheckedCoin}
                    />
                </div>

                <div>
                    <FsCFsTotal
                        item_count={item_count}
                        item_checked_count={item_checked_count}
                        total_price={total_price}
                        total_old_price={total_old_price}
                        coin={total_price && checked_coin ? coin : 0}
                        //
                        handleSaveLiked={handleSaveLiked}
                        handleDeleteItemChecked={handleDeleteItemChecked}
                        handleCheckedAll={handleCheckedAll}
                        handleGoingToBuy={handleGoingToBuy}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsCartSummary;
