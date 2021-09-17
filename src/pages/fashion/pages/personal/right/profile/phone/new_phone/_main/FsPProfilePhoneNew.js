import React from 'react';
import PropTypes from 'prop-types';
//
import FsPerUpdateInput from '../../../../../_component/update_input/FsPerUpdateInput';
import FsPerBtnConfirm from '../../../../../_component/btn_confirm/FsPerBtnConfirm';

//
FsPProfilePhoneNew.propTypes = {};

//
function FsPProfilePhoneNew({
    new_phone,
    phone_error,

    changePhone,
    confirmPhone,
}) {
    //
    function handleKeyDown(e) {
        const key_code = e.keyCode;

        if (key_code < 48 || key_code > 57) {
            if (key_code != 8) {
                e.preventDefault();
            }
        }
    }

    //
    return (
        <form className="FsPProfilePhoneNew">
            <div className="FsPPrEmailNew_pass margin-bottom-20px">
                <FsPerUpdateInput
                    label="Số điện thoại"
                    value={new_phone}
                    type="tel"
                    error_message={phone_error}
                    handleChange={changePhone}
                    input_props={{
                        onKeyDown: handleKeyDown,
                    }}
                />
            </div>

            <div className="FsPPrEmailConfirmPass_btn fs-personal-update-confirms">
                <FsPerBtnConfirm handleConfirm={confirmPhone} />
            </div>
        </form>
    );
}

export default FsPProfilePhoneNew;
