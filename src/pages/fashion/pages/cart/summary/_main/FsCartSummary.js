import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import {
    getFsCartTotalOldPrice,
    getFsCartTotalPrice,
} from '../../../../../../_some_function/fashion/getFsCartTotalPrice';
import { getFsCartGiftChosenCount } from '../../../../../../_some_function/fashion/getFsCartGiftChosenCount';
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
    free_ship_obj,

    item_count,
    item_checked_count,

    is_done,
    checked_coin,
    coin,
    cart_shop_arr,

    handleChooseFreeShip,
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
    const gift_chosen_count = item_checked_count
        ? getFsCartGiftChosenCount(cart_shop_arr)
        : 0;

    // console.log(gift_chosen_count);

    //
    return (
        <div className="FsCartSummary pos-rel box-shadow-1">
            <div className="FsCartSummary_row">
                <div
                    className={`FsCartSummary_head bg-primary ${
                        IS_MOBILE
                            ? 'FsCartSummary_head-mb pos-abs bottom-100per left-0 w-100per'
                            : ''
                    } ${
                        IS_MOBILE && !is_done ? 'trans-y-100per opacity-0' : ''
                    }`}
                >
                    <div className="FsCartSummary_voucher">
                        <FsCFsVoucher
                            id={free_ship_obj.id}
                            name={free_ship_obj.name}
                            handleChooseFreeShip={handleChooseFreeShip}
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
                </div>

                <div className="pos-rel bg-primary">
                    <FsCFsTotal
                        item_count={item_count + gift_chosen_count}
                        item_checked_count={
                            item_checked_count + gift_chosen_count
                        }
                        total_price={total_price}
                        total_old_price={total_old_price}
                        coin={total_price && checked_coin ? coin : 0}
                        free_ship_cost={total_price ? free_ship_obj.cost : 0}
                        //
                        is_done={is_done}
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
