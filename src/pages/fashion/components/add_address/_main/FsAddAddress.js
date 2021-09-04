import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import FsAddAddressType from '../type/FsAddAddressType';
import CheckBoxCustom from '../../../../../component/input/checkbox_custom/CheckBoxCustom';
import FsAddAddressForm from '../form/_main/FsAddAddressForm';
import FsAddAddressConfirm from '../confirm/FsAddAddressConfirm';
//
import './FsAddAddress.scss';

//
function getNumErrorName(user_name = '') {
    return user_name.trim().length < 2
        ? 1
        : user_name.trim().search(' ') == -1
        ? 2
        : 0;
}

//
function getIsPhoneOk(phone = '') {
    return /^(0\d{9}|\(\+84\) \d{9})$/.test(phone);
}

//
function getIsSpecificOk(specific = '') {
    return !!specific.trim();
}

//
FsAddAddress.propTypes = {
    title: PropTypes.string,

    old_user_name: PropTypes.string,
    old_phone: PropTypes.string,
    old_specific: PropTypes.string,
    old_type: PropTypes.string,
    old_current_address: PropTypes.string,
    is_default: PropTypes.bool,

    handleBack: PropTypes.func,
    handleComplete: PropTypes.func,
};

FsAddAddress.defaultProps = {
    title: '',

    old_user_name: '',
    old_phone: '',
    old_specific: '',
    old_type: '',
    old_current_address: '',
    is_default: false,
};

//
function FsAddAddress({
    title,

    old_user_name,
    old_phone,
    old_specific,
    old_type,
    old_current_address = '',
    is_default,

    handleBack,
    handleComplete,
}) {
    //
    const [state_obj, setStateObj] = useState({
        user_name: old_user_name,
        phone: old_phone,
        address_str_arr: old_current_address.split(', '),
        specific: old_specific,
        type: old_type,

        num_error_name: getNumErrorName(old_user_name),
        is_specific_ok: getIsSpecificOk(old_specific),
        is_phone_ok: getIsPhoneOk(old_phone),
        checked_default: false,

        name_changed: false,
        phone_changed: false,
        specific_changed: false,
    });

    const {
        user_name,
        phone,
        address_str_arr,
        specific,
        type,

        num_error_name,
        is_phone_ok,
        is_specific_ok,
        checked_default,

        name_changed,
        phone_changed,
        specific_changed,
    } = state_obj;

    const has_change =
        checked_default ||
        address_str_arr.join(', ') != old_current_address ||
        old_user_name != user_name ||
        old_phone != phone ||
        old_specific != specific ||
        old_type != type;

    // --------

    //
    function handleChangeName(e) {
        const new_user_name = e.target.value;

        setStateObj({
            ...state_obj,
            user_name: new_user_name,
            name_changed: true,
            num_error_name: getNumErrorName(new_user_name),
        });
    }

    //
    function handleChangePhone(e) {
        const new_phone = e.target.value;

        setStateObj({
            ...state_obj,
            phone: new_phone,
            phone_changed: true,
            is_phone_ok: getIsPhoneOk(new_phone),
        });
    }

    //
    function handleChangeSpecific(e) {
        const new_specific = e.target.value;

        setStateObj({
            ...state_obj,
            specific: new_specific,
            specific_changed: true,
            is_specific_ok: getIsSpecificOk(new_specific),
        });
    }

    //
    function handleSelectFullAddress({ new_address_str_arr }) {
        setStateObj({
            ...state_obj,
            address_str_arr: new_address_str_arr,
        });
    }

    //
    function chooseType(new_type) {
        setStateObj({
            ...state_obj,
            type: new_type,
        });
    }

    //
    function handleSetDefault() {
        setStateObj({
            ...state_obj,
            checked_default: !checked_default,
        });
    }

    //
    function onComplete() {
        if (
            !has_change ||
            !is_phone_ok ||
            0 ||
            num_error_name != 0 ||
            !is_specific_ok ||
            type == ''
        ) {
            return;
        }

        handleComplete({
            user_name,
            phone,
            specific,
            type,
            address_str_arr,
            checked_default,
        });
    }

    //
    return (
        <div className="FsAddAddress margin-auto bg-primary box-shadow-fb brs-8px font-for-fashion">
            <h2 className="margin-bottom-20px font-400 font-20px">{title}</h2>

            <div className="margin-bottom-15px">
                <FsAddAddressForm
                    user_name={user_name}
                    phone={phone}
                    specific={specific}
                    address_str_arr={address_str_arr}
                    //
                    num_error_name={!name_changed ? 0 : num_error_name}
                    is_phone_ok={!phone_changed || is_phone_ok}
                    is_specific_ok={!specific_changed || is_specific_ok}
                    //
                    handleChangeName={handleChangeName}
                    handleChangePhone={handleChangePhone}
                    handleChangeSpecific={handleChangeSpecific}
                    handleSelectFullAddress={handleSelectFullAddress}
                />
            </div>

            <div>{/* map */}</div>

            <div className="margin-bottom-15px">
                <FsAddAddressType chooseType={chooseType} type={type} />
            </div>

            {is_default ? null : (
                <div className="margin-bottom-15px">
                    <CheckBoxCustom
                        checked={checked_default}
                        title="Đặt làm địa chỉ mặc định"
                        handleChangeChecked={handleSetDefault}
                    />
                </div>
            )}

            <div>
                <FsAddAddressConfirm
                    has_change={has_change}
                    handleBack={handleBack}
                    handleComplete={onComplete}
                />
            </div>
        </div>
    );
}

export default FsAddAddress;
