import React from 'react';
import PropTypes from 'prop-types';
//
import FsPerUpdateInput from '../../../../../_component/update_input/FsPerUpdateInput';
import FsPerBtnConfirm from '../../../../../_component/btn_confirm/FsPerBtnConfirm';

//
FsPPrPhoneConfirmPass.propTypes = {};

//
function FsPPrPhoneConfirmPass({
    password,
    pass_error,

    changePassword,
    confirmPassword,
}) {
    //
    return (
        <form className="FsPPrPhoneConfirmPass">
            <div className="margin-bottom-20px">
                <FsPerUpdateInput
                    label="Mật khẩu"
                    value={password}
                    type="password"
                    error_message={pass_error}
                    handleChange={changePassword}
                />
            </div>

            <div className="fs-personal-update-confirms">
                <FsPerBtnConfirm handleConfirm={confirmPassword} />
            </div>
        </form>
    );
}

export default FsPPrPhoneConfirmPass;
