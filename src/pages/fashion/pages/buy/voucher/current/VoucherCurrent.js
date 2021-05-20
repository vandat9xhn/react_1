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
    handleChooseExtraBuy: PropTypes.func,
    doNotUseVoucher: PropTypes.func,
};

function VoucherCurrent(props) {
    const { name, cost, info, handleChooseExtraBuy, doNotUseVoucher } = props;

    //
    function onChooseExtraBuy() {
        handleChooseExtraBuy('voucher');
    }

    //
    return (
        <div className="VoucherCurrent">
            <div className="FashionChoiceCurrent_row">
                <div className="FashionChoiceCurrent_title label-field">
                    Free Ship
                </div>

                <div className="FashionChoiceCurrent_right">
                    <div className="label-field">{name}</div>

                    <div className="text-blue">{formatNum(cost)}</div>

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
    );
}

export default VoucherCurrent;
