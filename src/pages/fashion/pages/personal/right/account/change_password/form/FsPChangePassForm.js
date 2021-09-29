import React from 'react';
import PropTypes from 'prop-types';
//
import FsPerBtnConfirm from '../../../../_component/btn_confirm/FsPerBtnConfirm';
import FsPerUpdateInput from '../../../../_component/update_input/FsPerUpdateInput';
//
import './FsPChangePassForm.scss';

//
FsPChangePassForm.propTypes = {};

//
function FsPChangePassForm({
    old_pass,
    new_pass,
    confirm_pass,

    old_pass_error,
    new_pass_error,
    confirm_pass_error,

    handleChangeOldPass,
    handleChangeNewPass,
    handleChangeConfirmPass,

    handleForgetPass,
    handleConfirm,
}) {
    //
    return (
        <div className="FsPChangePassForm">
            <div className="FsPChangePassForm_row margin-bottom-15px display-flex align-items-center">
                <div>
                    <FsPerUpdateInput
                        label="Mật khẩu hiện tại"
                        value={old_pass}
                        type="password"
                        error_message={old_pass_error}
                        handleChange={handleChangeOldPass}
                    />
                </div>

                <button
                    className="FsPChangePassForm_forget margin-left-15px border-none bg-transparent text-third cursor-pointer"
                    type="button"
                    onClick={handleForgetPass}
                >
                    Quên mật khẩu?
                </button>
            </div>

            <div className="margin-bottom-15px">
                <FsPerUpdateInput
                    label="Mật khẩu mới"
                    value={new_pass}
                    type="password"
                    error_message={new_pass_error}
                    handleChange={handleChangeNewPass}
                />
            </div>

            <div className="margin-bottom-15px">
                <FsPerUpdateInput
                    label="Xác nhận mật khẩu"
                    value={confirm_pass}
                    type="password"
                    error_message={confirm_pass_error}
                    handleChange={handleChangeConfirmPass}
                />
            </div>

            <div className="fs-personal-update-confirms padding-top-10px">
                <FsPerBtnConfirm handleConfirm={handleConfirm} />
            </div>
        </div>
    );
}

export default FsPChangePassForm;
