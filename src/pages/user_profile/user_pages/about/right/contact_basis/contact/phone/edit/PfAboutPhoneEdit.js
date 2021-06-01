import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PfAboutConfirm from '../../../../_component/confirm/PfAboutConfirm';
import InputNotValid from '../../../../../../../../../component/input/input_not_valid/InputNotValid';

//
PfAboutPhoneEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutPhoneEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, phone } = item_obj;

    //
    const [cur_phone, setCurPhone] = useState(phone);
    const [phone_error, setPhoneError] = useState(false);

    //
    function handleChangePhone(e) {
        setCurPhone(e.target.value);
    }

    function onSave(new_permission) {
        if (/^\d{10}$/.test(cur_phone) || (phone != '' && cur_phone == '')) {
            handleSave({ permission: new_permission, phone: cur_phone });
        } else {
            setPhoneError(true);
        }
    }

    //
    return (
        <div>
            <div className={phone_error ? 'text-red' : 'display-none'}>
                <div>Phone must have 10 numbers!</div>
                <br />
            </div>

            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="phone"
                        value={cur_phone}
                        type="tel"
                        placeholder="Your phone"
                        handleChange={handleChangePhone}
                    />
                </div>
            </div>

            <div>
                <PfAboutConfirm
                    permission={permission}
                    handleCancel={handleCancel}
                    handleSave={onSave}
                />
            </div>
        </div>
    );
}

export default PfAboutPhoneEdit;
