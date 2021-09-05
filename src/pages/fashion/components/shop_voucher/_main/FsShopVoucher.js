import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { useModelAppear } from '../../../../../_hooks/useModelAppear';
//
import ModelAppearMb from '../../../../../component/model_appear_mb/ModelAppearMb';
//
import FsSVcLIconClose from '../icon_close/FsSVcIconClose';
import FsInputVoucher from '../../input_voucher/FsInputVoucher';
import FsSVoucherItem from '../item/FsSVoucherItem';

//
import './FsShopVoucher.scss';

//
FsShopVoucher.propTypes = {};

//
function FsShopVoucher({
    shop_name,
    shop_id,
    shop_picture,
    shop_discount_arr,

    shop_voucher_title,
    shop_total_price,
    has_chosen_product,
    best_discount_ix,
    shop_discount_ix,

    handleClickInputVoucher,
    handleApplyVoucherCode,
    handleSaveApplyVoucher,
    handleCancelVoucher,
    handleClose,
}) {
    //
    const { ref_pos_elm, ref_main_elm, onClose } = useModelAppear({});

    //
    function onHandleClose() {
        onClose(handleClose);
    }

    //
    return (
        <ModelAppearMb
            ref_pos_elm={ref_pos_elm}
            ref_main_elm={ref_main_elm}
            class_main={`FsShopVoucher ${
                IS_MOBILE ? 'FsShopVoucher-mb' : 'FsShopVoucher-pc brs-5px'
            }`}
            handleClose={onHandleClose}
        >
            <React.Fragment>
                <h2
                    className={`font-500 text-secondary ${
                        IS_MOBILE
                            ? 'margin-bottom-10px font-16px '
                            : 'margin-bottom-15px font-20px '
                    }`}
                >
                    {shop_name} Voucher
                </h2>

                {IS_MOBILE ? (
                    <FsSVcLIconClose handelClose={onHandleClose} />
                ) : null}

                <div
                    className="FsShopVoucher_input screen-input-voucher margin-bottom-15px bg-screen"
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

                <div className="FsShopVoucher_body padding-x-3px overflow-y-auto">
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
                                            ? 'FsShopVoucher_item-first'
                                            : ''
                                    }`}
                                >
                                    <FsSVoucherItem
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

                                    {is_applied &&
                                    shop_discount_arr.length >= 2 ? (
                                        <div className="margin-top-16px text-secondary">
                                            Các voucher khác
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}

                        {shop_discount_arr.length == 0 ? (
                            <div className="padding-y-20px text-align-center text-third font-500 font-16px">
                                Chưa có voucher nào
                            </div>
                        ) : null}
                    </div>
                </div>
            </React.Fragment>
        </ModelAppearMb>
    );
}

export default FsShopVoucher;
