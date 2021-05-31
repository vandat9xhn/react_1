import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PfAboutConfirm from '../../../../_component/confirm/PfAboutConfirm';
import InputNotValid from '../../../../../../../../../component/input/input_not_valid/InputNotValid';

//
PfAboutAddressEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutAddressEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, address } = item_obj;

    //
    const [cur_address, setCurAddress] = useState(address);
    const [address_error, setAddressError] = useState(false);

    //
    function handleChangeAddress(e) {
        setCurAddress(e.target.value);
    }

    function onSave(new_permission) {
        if (/[a-zA-Z]{2,}/.test(cur_address)) {
            handleSave({ permission: new_permission, address: cur_address.trim() });
        } else {
            setAddressError(true);
        }
    }

    //
    return (
        <div>
            <div className={address_error ? 'text-red' : 'display-none'}>
                <div>Address must have at least 2 letters!</div>
                <br />
            </div>

            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="address"
                        value={cur_address}
                        type="text"
                        placeholder="Your address"
                        handleChange={handleChangeAddress}
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

export default PfAboutAddressEdit;
