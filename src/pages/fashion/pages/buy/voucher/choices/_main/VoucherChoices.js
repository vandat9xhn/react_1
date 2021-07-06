import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_FashionVoucher_L } from '../../../../../../../api/api_django/fashion/APIFashionToken';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import ScreenBlurShowMore from '../../../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
import ScreenBlurFootYesNo from '../../../../../../../component/_screen/components/part/foot_yes_no/ScreenBlurFootYesNo';
//
import './VoucherChoices.scss';
//
import VoucherChoice from '../choice/VoucherChoice';

//
VoucherChoices.propTypes = {
    amount: PropTypes.number,
    handleVoucher: PropTypes.func,
    closeVoucher: PropTypes.func,
};

//
function VoucherChoices({ amount, handleVoucher, closeVoucher }) {
    //
    const [voucher_state, setVoucherState] = useState({
        voucher_arr: [],
        voucher_ix: 0,
        voucher_ix_temp: 0,
        has_fetched: false,
    });

    const { voucher_arr, voucher_ix, voucher_ix_temp, has_fetched } =
        voucher_state;

    //
    const ref_voucher = useRef(null);

    //
    useEffect(() => {
        observeToDo(ref_voucher.current, getData_Voucher, 0);
    }, []);

    /* ---------------- GET API -------------- */

    async function getData_Voucher() {
        const res = await API_FashionVoucher_L({
            page: 1,
            size: 6,
        });

        setVoucherState({
            ...voucher_state,
            voucher_arr: res.data.data,
            has_fetched: true,
        });
    }

    //
    function onChangeVoucher(new_voucher_ix) {
        setVoucherState({
            ...voucher_state,
            voucher_ix_temp: new_voucher_ix,
        });
    }

    //
    function onVoucher() {
        setVoucherState({
            ...voucher_state,
            voucher_ix: voucher_ix_temp,
        });
        handleVoucher(voucher_arr[voucher_ix_temp], voucher_ix_temp);
    }

    //
    function onCloseVoucher() {
        setVoucherState({
            ...voucher_state,
            voucher_ix_temp: voucher_ix,
        });
        closeVoucher();
    }

    //
    return (
        <div ref={ref_voucher} className="VoucherChoices">
            <h2 className="FashionChoices_title margin-0 text-secondary">
                FREE SHIP
            </h2>

            <div className="VoucherChoices_vouchers-contain scroll-thin">
                {voucher_arr.map((vch, vch_ix) => (
                    <VoucherChoice
                        key={`VoucherChoices_${vch.id || vch_ix}`}
                        voucher={vch}
                        voucher_ix={vch_ix}
                        disabled={amount < vch.min_amount}
                        is_active={voucher_ix_temp == vch_ix}
                        handleChangeVoucher={onChangeVoucher}
                    />
                ))}

                <ScreenBlurShowMore
                    is_show_more={false}
                    is_fetching={!has_fetched}
                    //
                    handleShowMore={() => {}}
                />
            </div>

            <div className={!has_fetched ? 'display-none' : ''}>
                <ScreenBlurFootYesNo
                    handleConfirm={onVoucher}
                    closeScreenBlur={onCloseVoucher}
                />
            </div>
        </div>
    );
}

export default VoucherChoices;
