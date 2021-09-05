import React from 'react';
import PropTypes from 'prop-types';
//
import FsBShopHead from '../head/_main/FsBShopHead';
import FsBShopVoucher from '../voucher/_main/FsBShopVoucher';
import FsBuyItem from '../../../../components/buy_item/_main/FsBuyItem';
import FsBShopMessageBuy from '../message_buy/_main/FsBShopMessageBuy';
//
import './FsBuyShop.scss';
import FsBShopTotal from '../total/FsBShopTotal';
import FsBShopTransport from '../transport/_main/FsBShopTransport';

//
function getShopItemLabelDeal(item_info, ix) {
    return item_info.type == 'hot_deal' && !item_info.is_main
        ? 'Deal Sốc'
        : item_info.type == 'gift' && !item_info.is_main
        ? 'Quà Tặng'
        : '';
}

//
FsBuyShop.propTypes = {};

//
function FsBuyShop({
    shop_ix,
    shop_info,
    item_info_arr,
    transport,
    total_price,

    handleApplyVoucherCode,
    handleApplyVoucher,
    handleCancelVoucher,
    handleChangeTransport,
}) {
    //
    const {
        id,
        name,
        picture,
        discount_arr,
        discount_ix,
    } = shop_info;

    //
    function onApplyVoucherCode() {
        handleApplyVoucherCode();
    }

    //
    function onApplyVoucher() {
        handleApplyVoucher();
    }

    //
    function onCancelVoucher() {
        handleCancelVoucher();
    }

    //
    function onChangeTransport() {
        handleChangeTransport();
    }

    //
    return (
        <div className="FsBuyShop bg-primary">
            <div className="FsBuyShop_head margin-bottom-20px">
                <FsBShopHead shop_id={id} shop_name={name} />
            </div>

            <div className="FsBuyShop_list">
                {item_info_arr.map((item_info, ix) => (
                    <div
                        key={ix}
                        className={`FsBuyShop_item ${
                            item_info.is_main ? 'FsBuyShop_item-main' : ''
                        }`}
                    >
                        <div key={ix} className="margin-bottom-15px">
                            <FsBuyItem
                                img={item_info.vid_pics[0]}
                                name={item_info.name}
                                label_deal={getShopItemLabelDeal(item_info, ix)}
                                model_name={item_info.model_name}
                                new_price={
                                    item_info.type == 'gift' &&
                                    !item_info.is_main
                                        ? 0
                                        : item_info.new_price
                                }
                                total_add_cart={item_info.total_add_cart}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <FsBShopVoucher
                    shop_id={id}
                    shop_name={name}
                    shop_picture={picture}
                    shop_discount_arr={discount_arr}
                    shop_discount_value={
                        discount_ix >= 0
                            ? discount_arr[discount_ix].discount_value
                            : 0
                    }
                    shop_total_price={total_price}
                    shop_discount_ix={discount_ix}
                    //
                    handleApplyVoucherCode={onApplyVoucherCode}
                    handleApplyVoucher={onApplyVoucher}
                    handleCancelVoucher={onCancelVoucher}
                />
            </div>

            <div className="FsBuyShop_mess_trans font-14px">
                <div className="FsBuyShop_mess_trans_row display-flex">
                    <div className="FsBuyShop_mess">
                        <FsBShopMessageBuy />
                    </div>

                    <div className="FsBuyShop_trans">
                        <FsBShopTransport
                            transport={transport}
                            handleChangeTransport={onChangeTransport}
                        />
                    </div>
                </div>
            </div>

            <div>
                <FsBShopTotal
                    total_price={total_price}
                    item_count={item_info_arr.length}
                />
            </div>
        </div>
    );
}

export default FsBuyShop;
