import React from 'react';
import PropTypes from 'prop-types';
//
import FsPPrUpdateInput from '../../../_component/update_input/FsPPrUpdateInput';
import FsPPrBtnConfirm from '../../../_component/btn_confirm/FsPPrBtnConfirm';

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
                <FsPPrUpdateInput
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

            <div className="FsPPrEmailConfirmPass_btn fs-profile-update-confirms">
                <FsPPrBtnConfirm handleConfirm={confirmPhone} />
            </div>
        </form>
    );
}

export default FsPProfilePhoneNew;
