import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
// 
import './FsPVoucherInput.scss';

//
FsPVoucherInput.propTypes = {};

//
function FsPVoucherInput({ saveVoucherCode }) {
    //
    const [value, setValue] = useState('');

    // -------

    //
    function handleChange(e) {
        setValue(e.target.value);
    }

    //
    function onSaveVoucherCode() {
        value && saveVoucherCode(value);
    }

    //
    return (
        <div className="FsPVoucherInput bg-screen font-14px">
            <div className="FsPVoucherInput_row display-flex-center">
                {IS_MOBILE ? null : <div className="font-16px">Mã voucher</div>}

                <input
                    className="FsPVoucherInput_input margin-left-10px margin-right-10px padding-13px border-blur brs-3px outline-none"
                    value={value}
                    type="text"
                    placeholder="Nhập mã voucher tại đây"
                    onChange={handleChange}
                />

                <button
                    className={`FsPVoucherInput_btn btn btn-hv btn-active brs-3px text-white ${
                        value
                            ? 'bg-fashion-red cursor-pointer'
                            : 'bg-blur pointer-events-none'
                    }`}
                    type="button"
                    onClick={onSaveVoucherCode}
                >
                    Lưu
                </button>
            </div>
        </div>
    );
}

export default FsPVoucherInput;
