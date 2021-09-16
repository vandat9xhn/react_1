import React from 'react';
import PropTypes from 'prop-types';
//
import FsPPrUpdateInput from '../../_component/update_input/FsPPrUpdateInput';
import FsPPrBtnConfirm from '../../_component/btn_confirm/FsPPrBtnConfirm';

//
FsPPrEmailConfirmPass.propTypes = {};

//
function FsPPrEmailConfirmPass({
    password,
    pass_error,

    changePassword,
    confirmPassword,
}) {
    //
    return (
        <form className="FsPPrEmailConfirmPass">
            <div className="FsPPrEmailNew_pass margin-bottom-20px">
                <FsPPrUpdateInput
                    label="Mật khẩu"
                    value={password}
                    type="password"
                    error_message={pass_error}
                    handleChange={changePassword}
                />
            </div>

            <div className="FsPPrEmailConfirmPass_btn fs-profile-update-confirms">
                <FsPPrBtnConfirm handleConfirm={confirmPassword} />
            </div>
        </form>
    );
}

export default FsPPrEmailConfirmPass;
