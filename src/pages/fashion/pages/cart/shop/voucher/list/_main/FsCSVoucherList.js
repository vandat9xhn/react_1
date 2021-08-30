import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
//
import { openScreenNotice } from '../../../../../../../../component/_screen_once/notice/ScreenNotice';
//
import FsInputVoucher from '../../../../../../components/input_voucher/FsInputVoucher';
import FsCSNoticeChooseProduct from '../notice_choose_product/FsCSNoticeChooseProduct';
import FsCSVoucherItem from '../item/FsCSVoucherItem';
//
import './FsCSVoucherList.scss';
import { UnitNumber } from '../../../../../../../../_some_function/UnitNumber';

//
FsCSVoucherList.propTypes = {};

//
function FsCSVoucherList({
    shop_name,
    shop_id,
    shop_picture,
    shop_discount_arr,

    shop_total_price,
    has_chosen_product,
    best_discount_ix,
    shop_discount_ix,

    handleApplyVoucherCode,
    handleSaveApplyVoucher,
    handleCancelVoucher,
}) {
    //
    const { openScreenOnce, closeScreenOnce } = useContext(context_api);

    //
    function handleClickInputVoucher() {
        if (!has_chosen_product) {
            openScreenNotice({
                openScreenOnce: openScreenOnce,
                ComponentNotice: <FsCSNoticeChooseProduct />,
            });

            setTimeout(() => {
                closeScreenOnce();
            }, 1500);
        }
    }

    //
    const shop_voucher_title = !has_chosen_product
        ? 'Chọn sản phẩm từ shop trước khi nhập mã voucher'
        : best_discount_ix == -1
        ? 'Bạn chưa thể sử dụng những voucher bên dưới.'
        : shop_discount_ix >= 0
        ? `Voucher đã chọn Đã giảm ₫${UnitNumber(
              shop_discount_arr[shop_discount_ix].discount_value
          )}`
        : '';

    //
    return (
        <div className="FsCSVoucherList bg-primary box-shadow-fb">
            <h2 className="margin-bottom-15px font-20px label-field text-secondary">
                {shop_name} Voucher
            </h2>

            <div
                className="FsCSVoucherList_input margin-bottom-15px bg-screen"
                onClick={handleClickInputVoucher}
            >
                <div
                    className={`${
                        has_chosen_product
                            ? ''
                            : 'pointer-events-none opacity-05'
                    }`}
                >
                    <FsInputVoucher
                        placeholder={
                            has_chosen_product ? 'Nhập mã voucher của shop' : ''
                        }
                        handleApplyVoucherCode={handleApplyVoucherCode}
                    />
                </div>
            </div>

            <div className="FsCSVoucherList_body padding-x-3px overflow-y-auto">
                {shop_voucher_title ? (
                    <div className="margin-bottom-15px padding-8px bg-fashion-heart text-del">
                        {shop_voucher_title}
                    </div>
                ) : null}

                <div className="display-flex flex-col">
                    {shop_discount_arr.map((shop_discount_obj, ix) => {
                        const more_spend =
                            shop_discount_obj.min_spend - shop_total_price;

                        const is_applied =
                            shop_discount_ix == ix &&
                            shop_discount_obj.status_card == 'saved' &&
                            more_spend <= 0;

                        return (
                            <div
                                key={ix}
                                className={`margin-bottom-16px ${
                                    is_applied || best_discount_ix == ix
                                        ? 'FsCSVoucherList_item-first'
                                        : ''
                                }`}
                            >
                                <FsCSVoucherItem
                                    ix={ix}
                                    shop_id={shop_id}
                                    shop_picture={shop_picture}
                                    voucher_id={shop_discount_obj.id}
                                    min_spend={shop_discount_obj.min_spend}
                                    more_spend={more_spend}
                                    discount_value={
                                        shop_discount_obj.discount_value
                                    }
                                    end_time={shop_discount_obj.end_time}
                                    //
                                    status_card={shop_discount_obj.status_card}
                                    is_best_choice={ix == best_discount_ix}
                                    is_applied={is_applied}
                                    //
                                    handleCancelVoucher={handleCancelVoucher}
                                    handleSaveApplyVoucher={
                                        handleSaveApplyVoucher
                                    }
                                />

                                {is_applied ? (
                                    <div className="margin-top-16px text-secondary">
                                        Các voucher khác
                                    </div>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FsCSVoucherList;
