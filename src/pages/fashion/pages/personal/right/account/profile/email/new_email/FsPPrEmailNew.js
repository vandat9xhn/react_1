import React from 'react';
import PropTypes from 'prop-types';
// 
import FsPerUpdateInput from '../../../../../_component/update_input/FsPerUpdateInput';

//
FsPPrEmailNew.propTypes = {};

//
function FsPPrEmailNew({
    new_email,
    email_error,

    changeNewEmail,
    confirmNewEmail,
    rejectNewEmail,
}) {
    //
    return (
        <form className="FsPPrEmailNew">
            <div className="FsPPrEmailNew_pass margin-bottom-20px">
                <FsPerUpdateInput
                    label="Email"
                    value={new_email}
                    handleChange={changeNewEmail}
                    error_message={email_error}
                />
            </div>

            <div className="FsPPrEmailNew_btn fs-personal-update-confirms display-flex align-items-center">
                <button
                    className="btn btn-hv btn-active padding-y-8px padding-x-20px brs-2px bg-fashion-red text-white cursor-pointer"
                    type="button"
                    onClick={confirmNewEmail}
                >
                    Xác nhận
                </button>

                <button
                    className="margin-left-15px btn-active padding-y-8px padding-x-20px border-blur brs-2px hv-bg-blur cursor-pointer"
                    type="button"
                    onClick={rejectNewEmail}
                >
                    Trở lại
                </button>
            </div>
        </form>
    );
}

export default FsPPrEmailNew;
