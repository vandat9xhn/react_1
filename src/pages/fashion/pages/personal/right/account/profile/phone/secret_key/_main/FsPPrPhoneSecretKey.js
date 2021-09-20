import React from 'react';
import PropTypes from 'prop-types';
//
import FsPerUpdateInput from '../../../../../../_component/update_input/FsPerUpdateInput';
import FsPerBtnConfirm from '../../../../../../_component/btn_confirm/FsPerBtnConfirm';
import FsPPrPSecretKeyTime from '../time/FsPPrPSecretKeyTime';

//
FsPPrPhoneSecretKey.propTypes = {};

//
function FsPPrPhoneSecretKey({
    secret_key,
    time_start,
    key_error,

    changeSecretKey,
    sendKeyAgain,
    confirmKey,
}) {
    //
    return (
        <form className="FsPPrPhoneSecretKey">
            <div className="margin-bottom-20px">
                <FsPerUpdateInput
                    label="Mã xác nhận"
                    value={secret_key}
                    type="text"
                    error_message={key_error}
                    handleChange={changeSecretKey}
                />
            </div>

            <div className="fs-personal-update-confirms">
                <div className="display-flex align-items-center">
                    <FsPerBtnConfirm handleConfirm={confirmKey} />

                    <div className="margin-left-15px">
                        <FsPPrPSecretKeyTime
                            time_start={time_start}
                            sendKeyAgain={sendKeyAgain}
                        />
                    </div>
                </div>

                <div className="margin-top-15px text-del font-14px font-italic">
                    Mã xác nhận đã được gửi qua tin nhắn
                </div>
            </div>
        </form>
    );
}

export default FsPPrPhoneSecretKey;
