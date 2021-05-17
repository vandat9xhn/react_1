import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VoucherChoice from '../choice/VoucherChoice';

import './VoucherChoices.scss';
import ConfirmChoices from '../../../confirm_choices/ConfirmChoices';
import ScreenBlurShowMore from '../../../../../../../component/_screen_blur/_component/foot/ScreenBlurShowMore';
import CircleLoading from '../../../../../../../component/waiting/circle_loading/CircleLoading';
//
VoucherChoices.propTypes = {};

//
function VoucherChoices(props) {
    //
    const {
        amount,
        has_fetched,
        // 
        arr_voucher,
        voucher_ix,
        // 
        handleChangeVoucher,
        closeExtraBuy,
    } = props;
    //
    const [new_voucher_ix, setNewVoucherIx] = useState(voucher_ix);
    //
    function onChangeVoucherTemp(vch_ix) {
        setNewVoucherIx(vch_ix);
    }
    //
    function onChangeVoucher() {
        handleChangeVoucher(new_voucher_ix);
    }

    return (
        <div>
            <div className="VoucherChoices_contain">
                <div className="FashionChoices_title">VOUCHER</div>

                <div className="VoucherChoices_vouchers-contain scroll-thin">
                    {arr_voucher.map((vch, vch_ix) => (
                        <VoucherChoice
                            key={`VoucherChoices_${vch_ix}`}
                            can_use={amount > vch.min_amount}
                            voucher={vch}
                            voucher_ix={vch_ix}
                            is_active={new_voucher_ix == vch_ix}
                            handleChangeVoucherTemp={onChangeVoucherTemp}
                        />
                    ))}

                    <ScreenBlurShowMore
                        title="Show more"
                        is_show_more={false}
                        is_fetching={!has_fetched}
                        // 
                        handleShowMore={() => {}}
                        FetchingComponent={CircleLoading}
                    />
                </div>
            </div>

            <div className={!has_fetched ? 'display-none' : ''}>
                <ConfirmChoices
                    closeConfirmChoices={closeExtraBuy}
                    handleConfirmChoices={onChangeVoucher}
                />
            </div>
        </div>
    );
}

export default VoucherChoices;
