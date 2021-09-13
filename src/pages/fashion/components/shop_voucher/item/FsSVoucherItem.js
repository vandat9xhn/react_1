import React from 'react';
import PropTypes from 'prop-types';
//
import { getFsShopDiscountTitle } from '../../../../../_some_function/fashion/getFsShopDiscountTitle';
import { formatLocalDateString } from '../../../../../_some_function/FormatDate';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import FashionCardDiscount from '../../../components/card_discount/FashionCardDiscount';
//
import './FsSVoucherItem.scss';

//
FsSVoucherItem.propTypes = {};

//
function FsSVoucherItem({
    ix,
    shop_picture,

    min_spend,
    more_spend,
    discount_value,
    end_time,

    status_card,
    is_applied,
    is_best_choice,

    handleSaveApplyVoucher,
    handleCancelVoucher,
}) {
    //
    function onSaveApply() {
        handleSaveApplyVoucher(ix);
    }

    //
    return (
        <div className="FsSVoucherItem">
            <div className="pos-rel">
                <div className="FsSVoucherItem_card pos-rel overflow-hidden">
                    <div className="FsSVoucherItem_card_side_height pos-abs-0 trans-x--50per h-100per"></div>

                    <div className="FsSVoucherItem_card_side FsSVoucherItem_card_side-ccc pos-abs-0 trans-x--50per h-100per"></div>
                    <div className="FsSVoucherItem_card_side FsSVoucherItem_card_side-primary pos-abs-0 trans-x--50per h-100per"></div>

                    <div
                        className={`display-flex ${
                            more_spend > 0 && status_card == 'saved'
                                ? 'opacity-05'
                                : ''
                        }`}
                    >
                        <div className="FsSVoucherItem_card_left padding-18px">
                            <img
                                className="brs-50"
                                src={shop_picture}
                                alt=""
                                width="58"
                                height="58"
                            />
                        </div>

                        <div className="FsSVoucherItem_card_right flex-grow-1 padding-x-20px">
                            <FashionCardDiscount
                                title={getFsShopDiscountTitle({
                                    discount_value: discount_value,
                                    min_spend: min_spend,
                                })}
                                expiry={formatLocalDateString(end_time)}
                                status_card={status_card}
                                disabled={
                                    more_spend > 0 && status_card == 'saved'
                                }
                                is_applied={is_applied}
                                handleSave={onSaveApply}
                            />
                        </div>

                        {is_applied ? (
                            <div className="pos-abs right-0 top-0">
                                <div
                                    className="FsSVoucherItem_cancel display-flex-center bg-shadow-5 cursor-pointer"
                                    onClick={handleCancelVoucher}
                                >
                                    <IconsArrow y={400} size_icon="0.75rem" />
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>

                {is_best_choice ? (
                    <div className="pos-abs-0 padding-y-8px">
                        <div className="pos-rel fashion-value-padding bg-green text-white font-12px">
                            <span>Lựa chọn tốt nhất</span>

                            <div className="FsSVoucherItem_best_side pos-abs top-0 right-100per h-100per bg-green"></div>
                        </div>
                    </div>
                ) : null}
            </div>

            {more_spend > 0 ? (
                <div className="padding-y-8px text-secondary">
                    Mua thêm ₫{more_spend} để sử dụng voucher này
                </div>
            ) : null}
        </div>
    );
}

export default FsSVoucherItem;
