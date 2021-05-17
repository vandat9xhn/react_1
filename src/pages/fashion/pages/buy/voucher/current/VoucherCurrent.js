import React from 'react';
import PropTypes from 'prop-types';

import './VoucherCurrent.scss';
import { formatNum } from '../../../../../../_some_function/FormatNum';
//
VoucherCurrent.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    handleChooseExtraBuy: PropTypes.func,
    doNotUseVoucher: PropTypes.func,
};

function VoucherCurrent(props) {
    const { name, price, handleChooseExtraBuy, doNotUseVoucher } = props;
    //
    function onChooseExtraBuy() {
        handleChooseExtraBuy('voucher');
    }

    //
    return (
        <div className="VoucherCurrent">
            <div className="FashionChoiceCurrent_contain">
                <div className="FashionChoiceCurrent_row">
                    <div className="FashionChoiceCurrent_title label-field">
                        Voucher
                    </div>

                    <div className="FashionChoiceCurrent_right">
                        <div className="label-field">{name}</div>
                        <div className="text-blue">{formatNum(price)}</div>
                        <div>
                            <span
                                className={
                                    name
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
                                Change
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VoucherCurrent;
