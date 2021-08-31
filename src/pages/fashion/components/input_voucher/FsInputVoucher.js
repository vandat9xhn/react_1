import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './FsInputVoucher.scss';

//
FsInputVoucher.propTypes = {};

//
function FsInputVoucher({ placeholder, handleApplyVoucherCode }) {
    //
    const [state_obj, setStateObj] = useState({
        value: '',
    });

    const { value } = state_obj;

    //
    function handleChange(e) {
        setStateObj({
            ...state_obj,
            value: e.target.value,
        });
    }

    //
    function onApplyVoucher() {
        value.trim() && handleApplyVoucherCode(value);
    }

    //
    function clearInput() {
        setStateObj({
            ...state_obj,
            value: '',
        });
    }

    //
    return (
        <div className="FsInputVoucher">
            <div className="FsInputVoucher_row display-flex align-items-center">
                <div className="FsInputVoucher_left margin-right-10px">
                    Mã Voucher
                </div>

                <div className="FsInputVoucher_input pos-rel flex-grow-1">
                    <input
                        className="FsInputVoucher_input_item w-100per padding-6px"
                        value={value}
                        onChange={handleChange}
                        type="text"
                        placeholder={placeholder}
                    />

                    <div
                        className={`FsInputVoucher_clear pos-abs right-0 top-50per ${
                            value ? '' : 'display-none'
                        }`}
                    >
                        <div
                            className="FsInputVoucher_clear_contain display-flex-center bg-ccc brs-50 cursor-pointer"
                            onClick={clearInput}
                        >
                            <IconsArrow y={400} size_icon="0.75rem" />
                        </div>
                    </div>
                </div>

                <button
                    className={`FsInputVoucher_btn margin-left-10px padding-5px btn text-nowrap ${
                        value.trim()
                            ? 'btn-hv btn-active cursor-pointer'
                            : 'opacity-05'
                    }`}
                    type="button"
                    onClick={onApplyVoucher}
                    disabled={!value.trim()}
                >
                    ÁP DỤNG
                </button>
            </div>
        </div>
    );
}

export default FsInputVoucher;
