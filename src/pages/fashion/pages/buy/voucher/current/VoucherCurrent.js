import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../_some_function/FormatNum';
//
import './VoucherCurrent.scss';

//
VoucherCurrent.propTypes = {
    name: PropTypes.string,
    info: PropTypes.string,
    cost: PropTypes.number,
    has_choose: PropTypes.bool,
    handleExtraBuy: PropTypes.func,
    doNotUseVoucher: PropTypes.func,
};

function VoucherCurrent({
    name,
    cost,
    info,
    has_choose,
    handleExtraBuy,
    doNotUseVoucher,
}) {
    //
    function onChooseExtraBuy() {
        handleExtraBuy('voucher');
    }

    //
    return (
        <div className="VoucherCurrent">
            <div className="FashionChoiceCurrent_row flex-between-center">
                <h3 className="margin-0">Free Ship</h3>

                <div className="FashionChoiceCurrent_right">
                    <div className={`${has_choose ? '' : 'display-none'}`}>
                        <div className="label-field">{name}</div>

                        <div className="text-blue">{formatNum(cost)}</div>
                    </div>

                    <div>
                        <span
                            className={
                                has_choose
                                    ? 'VoucherCurrent_not-use FashionChoiceCurrent_change'
                                    : 'display-none'
                            }
                            onClick={doNotUseVoucher}
                        >
                            Not use
                        </span>

                        <span
                            className="FashionChoiceCurrent_change"
                            onClick={onChooseExtraBuy}
                        >
                            {has_choose ? 'Change' : 'Choose'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VoucherCurrent;
