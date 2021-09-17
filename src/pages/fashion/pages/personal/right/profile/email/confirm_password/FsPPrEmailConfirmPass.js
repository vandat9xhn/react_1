import React from 'react';
import PropTypes from 'prop-types';
//
import FsPerUpdateInput from '../../../../_component/update_input/FsPerUpdateInput';
import FsPerBtnConfirm from '../../../../_component/btn_confirm/FsPerBtnConfirm';

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
                <FsPerUpdateInput
                    label="Mật khẩu"
                    value={password}
                    type="password"
                    error_message={pass_error}
                    handleChange={changePassword}
                />
            </div>

            <div className="FsPPrEmailConfirmPass_btn fs-personal-update-confirms">
                <FsPerBtnConfirm handleConfirm={confirmPassword} />
            </div>
        </form>
    );
}

export default FsPPrEmailConfirmPass;
