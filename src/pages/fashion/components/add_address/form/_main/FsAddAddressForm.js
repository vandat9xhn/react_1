import React from 'react';
import PropTypes from 'prop-types';
//
import FsInputValid from '../../../../components/input_valid/FsInputValid';
import FsAddAddressFull from '../address/FsAddAddressFull';
//
import './FsAddAddressForm.scss';

//
const name_errors = [
    '',
    'Tên quá ngắn, ít nhất cần 2 kí tự',
    'Vui lòng điền Họ & Tên',
];

//
function getPhoneError(is_error = false) {
    return is_error ? 'Số điện thoại không hợp lệ' : '';
}

//
function getSpecificError(is_error = false) {
    return is_error ? 'Địa chỉ không khả dụng' : '';
}

//
FsAddAddressForm.propTypes = {};

//
function FsAddAddressForm({
    user_name,
    phone,
    specific,
    address_str_arr,

    num_error_name,
    is_phone_ok,
    is_specific_ok,

    handleChangeName,
    handleChangePhone,
    handleChangeSpecific,
    handleSelectFullAddress,
}) {
    //
    return (
        <div className="FsAddAddressForm">
            <div className="FsAddAddressForm_name_phone display-flex space-between margin-bottom-15px">
                <div className="FsAddAddressForm_name">
                    <FsInputValid
                        value={user_name}
                        name="name"
                        type="text"
                        placeholder="Họ và tên"
                        is_error={num_error_name > 0}
                        error_message={name_errors[num_error_name]}
                        handleChange={handleChangeName}
                    />
                </div>

                <div className="FsAddAddressForm_phone">
                    <FsInputValid
                        value={phone}
                        name="phone"
                        type="text"
                        placeholder="Số điện thoại"
                        is_error={!is_phone_ok}
                        error_message={getPhoneError(!is_phone_ok)}
                        handleChange={handleChangePhone}
                    />
                </div>
            </div>

            <div className="margin-bottom-15px">
                <FsAddAddressFull
                    address_str_arr={address_str_arr}
                    handleSelectFullAddress={handleSelectFullAddress}
                />
            </div>

            <div>
                <FsInputValid
                    value={specific}
                    name="specific"
                    type="text"
                    placeholder="Địa chỉ cụ thể"
                    is_error={!is_specific_ok}
                    error_message={getSpecificError(!is_specific_ok)}
                    handleChange={handleChangeSpecific}
                />
            </div>
        </div>
    );
}

export default FsAddAddressForm;
