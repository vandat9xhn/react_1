import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';
//
import { UnitNumber } from '../../../../../../../../_some_function/UnitNumber';
//
import { useModelAppear } from '../../../../../../../../_hooks/useModelAppear';
//
import { openScreenNotice } from '../../../../../../../../component/_screen_once/notice/ScreenNotice';
//
import ModelAppearMb from '../../../../../../../../component/model_appear_mb/ModelAppearMb';
//
import FsCSVcLIconClose from '../icon_close/FsCSVcLIconClose';
import FsInputVoucher from '../../../../../../components/input_voucher/FsInputVoucher';
import FsCSNoticeChooseProduct from '../notice_choose_product/FsCSNoticeChooseProduct';
import FsCSVoucherItem from '../item/FsCSVoucherItem';
//
import './FsCSVoucherList.scss';

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
    handleClose,
}) {
    //
    const { openScreenOnce, closeScreenOnce } = useContext(context_api);

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
    const { ref_pos_elm, ref_main_elm, onClose } = useModelAppear({});

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
    function onHandleClose() {
        onClose(handleClose);
    }

    //
    return (
        <ModelAppearMb
            ref_pos_elm={ref_pos_elm}
            ref_main_elm={ref_main_elm}
            class_main={`FsCSVoucherList ${
                IS_MOBILE ? 'FsCSVoucherList-mb' : 'FsCSVoucherList-pc brs-5px'
            }`}
            handleClose={onHandleClose}
        >
            <React.Fragment>
                <h2
                    className={`label-field text-secondary ${
                        IS_MOBILE
                            ? 'margin-bottom-10px font-16px '
                            : 'margin-bottom-15px font-20px '
                    }`}
                >
                    {shop_name} Voucher
                </h2>

                {IS_MOBILE ? (
                    <FsCSVcLIconClose handelClose={onHandleClose} />
                ) : null}

                <div
                    className="FsCSVoucherList_input screen-input-voucher margin-bottom-15px bg-screen"
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
                                has_chosen_product
                                    ? 'Nhập mã voucher của shop'
                                    : ''
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
                                        status_card={
                                            shop_discount_obj.status_card
                                        }
                                        is_best_choice={ix == best_discount_ix}
                                        is_applied={is_applied}
                                        //
                                        handleCancelVoucher={
                                            handleCancelVoucher
                                        }
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
            </React.Fragment>
        </ModelAppearMb>
    );
}

export default FsCSVoucherList;
