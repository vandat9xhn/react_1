import React from 'react';
import PropTypes from 'prop-types';

import RadioCustom from '../../../../../../../component/input/radio_custom/RadioCustom';
import './VoucherChoice.scss';
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
VoucherChoice.propTypes = {};

//
function VoucherChoice({
    disabled,
    voucher,
    voucher_ix,
    is_active,
    handleChangeVoucher,
}) {
    //
    const { img, name, cost, expires, link_condition } = voucher;

    //
    function onChangeVoucher() {
        if (!disabled) {
            handleChangeVoucher(voucher_ix);
        }
    }

    return (
        <div
            className="VoucherChoice position-rel cursor-pointer hv-bg-blur"
            onClick={onChangeVoucher}
        >
            <div
                className={`VoucherChoice_row display-flex align-items-center ${
                    !disabled ? '' : 'opacity-5 pointer-events-none'
                }`}
            >
                <div className="VoucherChoice_img">
                    <img src={img} alt="" width="50px" height="50px" />
                </div>

                <div className="VoucherChoice_detail flex-grow-1">
                    <div className="label-field">{name}</div>

                    <div>Cost: {formatNum(cost)} vnd</div>
                </div>

                <div className="VoucherChoice_radio display-flex-center">
                    <div>
                        <RadioCustom is_active={is_active} />
                    </div>
                </div>
            </div>

            <div className="VoucherChoice_time">
                <div className="font-italic font-12px">2 days</div>
            </div>

            <div className="VoucherChoice_condition">
                <a
                    href={`/fashion/condition?type=${link_condition}`}
                    target="_blank"
                >
                    <div className="font-italic">Condition</div>
                </a>
            </div>
        </div>
    );
}

export default VoucherChoice;
