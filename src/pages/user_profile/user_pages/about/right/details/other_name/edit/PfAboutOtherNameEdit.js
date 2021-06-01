import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PfAboutConfirm from '../../../_component/confirm/PfAboutConfirm';
import InputNotValid from '../../../../../../../../component/input/input_not_valid/InputNotValid';

//
PfAboutOtherNameEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutOtherNameEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, other_name } = item_obj;

    //
    const [cur_other_name, setCurOtherName] = useState(other_name);
    const [other_name_error, setOtherNameError] = useState(false);

    //
    function handleChangeOtherName(e) {
        setCurOtherName(e.target.value);
    }

    function onSave(new_permission) {
        if (
            /[a-zA-Z]{2,}/.test(cur_other_name) ||
            (other_name != '' && cur_other_name == '')
        ) {
            handleSave({
                permission: new_permission,
                other_name: cur_other_name.trim(),
            });
        } else {
            setOtherNameError(true);
        }
    }

    //
    return (
        <div>
            <div className={other_name_error ? 'text-red' : 'display-none'}>
                <div>OtherName must have at least 2 letters!</div>
                <br />
            </div>

            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="other_name"
                        value={cur_other_name}
                        type="text"
                        placeholder="Other name"
                        handleChange={handleChangeOtherName}
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

export default PfAboutOtherNameEdit;
