import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import CloseDiv from '../../../../../../../component/some_div/close_div/CloseDiv';
//
import FsBSVoucherList from '../list/FsbSVoucherList';
//
import './FsBShopVoucher.scss';

//
FsBShopVoucher.propTypes = {};

//
function FsBShopVoucher({
    shop_id,
    shop_name,
    shop_picture,
    shop_discount_arr,
    shop_discount_value,

    shop_total_price,
    shop_discount_ix,

    handleApplyVoucherCode,
    handleApplyVoucher,
    handleCancelVoucher,
}) {
    //
    const [state_obj, setStateObj] = useState({
        is_open: false,
    });

    const { is_open } = state_obj;

    // --------

    //
    function toggleOpen() {
        setStateObj({
            ...state_obj,
            is_open: !is_open,
        });
    }

    //
    function handleClose() {
        is_open &&
            setStateObj({
                ...state_obj,
                is_open: false,
            });
    }

    //
    return (
        <div className="FsBShopVoucher font-14px">
            <div className="FsBShopVoucher_row display-flex align-items-center">
                <div className="FsBShopVoucher_left text-align-end">
                    Voucher của shop
                </div>

                <div className="FsBShopVoucher_right pos-rel text-align-end">
                    <CloseDiv makeDivHidden={handleClose}>
                        <React.Fragment>
                            <div
                                className={`cursor-pointer ${
                                    shop_discount_value
                                        ? 'text-red'
                                        : 'text-blue'
                                }`}
                                onClick={toggleOpen}
                            >
                                {shop_discount_value
                                    ? `Voucher giảm ${shop_discount_value}`
                                    : 'Chọn voucher của shop'}
                            </div>

                            <div
                                className={`text-align-left ${
                                    is_open ? '' : 'display-none'
                                } ${
                                    IS_MOBILE
                                        ? ''
                                        : 'pos-abs x-center top-100per z-index-lv1'
                                }`}
                            >
                                <FsBSVoucherList
                                    shop_name={shop_name}
                                    shop_id={shop_id}
                                    shop_picture={shop_picture}
                                    shop_discount_arr={shop_discount_arr}
                                    //
                                    shop_total_price={shop_total_price}
                                    shop_discount_ix={shop_discount_ix}
                                    //
                                    handleApplyVoucherCode={
                                        handleApplyVoucherCode
                                    }
                                    handleSaveApplyVoucher={handleApplyVoucher}
                                    handleCancelVoucher={handleCancelVoucher}
                                    handleClose={handleClose}
                                />
                            </div>
                        </React.Fragment>
                    </CloseDiv>
                </div>
            </div>
        </div>
    );
}

export default FsBShopVoucher;
