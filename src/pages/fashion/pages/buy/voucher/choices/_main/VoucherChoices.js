import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../../../../component/_screen_blur/_component/foot/ScreenBlurShowMore';
import CircleLoading from '../../../../../../../component/waiting/circle_loading/CircleLoading';
import ScreenBlurFootYesNo from '../../../../../../../component/_screen_blur/_component/foot_yes_no/ScreenBlurFootYesNo';
//
import VoucherChoice from '../choice/VoucherChoice';
//
import './VoucherChoices.scss';

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
        <div className="VoucherChoices">
            <div className="FashionChoices_title">FREE SHIP</div>

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
            
            <div className={!has_fetched ? 'display-none' : ''}>
                <ScreenBlurFootYesNo
                    handleConfirm={onChangeVoucher}
                    closeScreenBlur={closeExtraBuy}
                />
            </div>
        </div>
    );
}

export default VoucherChoices;
