import React from 'react';
import PropTypes from 'prop-types';
//
import { getFsShopDiscountTitle } from '../../../../../../../../_some_function/fashion/getFsShopDiscountTitle';
import { formatLocalDateString } from '../../../../../../../../_some_function/FormatDate';
//
import IconsArrow from '../../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import FashionSeeMoreOnTitle from '../../../../../../components/see_more/on_title/FashionSeeMoreOnTitle';
import FashionCardDiscount from '../../../../../../components/card_discount/FashionCardDiscount';
//
import './FsCSVoucherItem.scss';

//
FsCSVoucherItem.propTypes = {};

//
function FsCSVoucherItem({
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
        <div className="FsCSVoucherItem">
            <div className="pos-rel">
                <div className="FsCSVoucherItem_card pos-rel overflow-hidden">
                    <div className="FsCSVoucherItem_card_side_height pos-abs-0 trans-x--50per h-100per"></div>

                    <div className="FsCSVoucherItem_card_side FsCSVoucherItem_card_side-ccc pos-abs-0 trans-x--50per h-100per"></div>
                    <div className="FsCSVoucherItem_card_side FsCSVoucherItem_card_side-primary pos-abs-0 trans-x--50per h-100per"></div>

                    <div
                        className={`display-flex ${
                            more_spend > 0 && status_card == 'saved'
                                ? 'opacity-05'
                                : ''
                        }`}
                    >
                        <div className="padding-18px">
                            <img
                                className="brs-50"
                                src={shop_picture}
                                alt=""
                                width="58"
                                height="58"
                            />
                        </div>

                        <div className="FsCSVoucherItem_card_right flex-grow-1 padding-x-20px">
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
                                    className="FsCSVoucherItem_cancel display-flex-center bg-film cursor-pointer"
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

                            <div className="FsCSVoucherItem_best_side pos-abs top-0 right-100per h-100per bg-green"></div>
                        </div>
                    </div>
                ) : null}
            </div>

            {more_spend > 0 ? (
                <div className="padding-y-8px text-secondary">
                    Mua thêm ₫{more_spend} để sử dụng voucher này
                </div>
            ) : null}

            {/* <div>
                    <FashionSeeMoreOnTitle
                        title="Xem thêm"
                        link_to={`/fashion/search?shop_id=${shop_id}&voucher_id=${voucher_id}`}
                    />
                </div> */}
        </div>
    );
}

export default FsCSVoucherItem;
