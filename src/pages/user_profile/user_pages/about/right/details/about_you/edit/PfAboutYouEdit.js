import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import InputNotValid from '../../../../../../../../component/input/input_not_valid/InputNotValid';
// 
import PfAboutConfirm from '../../../_component/confirm/PfAboutConfirm';

//
PfAboutYouEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutYouEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, you } = item_obj;

    //
    const [cur_you, setCurYou] = useState(you);

    //
    function handleChangeYou(e) {
        setCurYou(e.target.value);
    }

    function onSave(new_permission) {
        handleSave({ permission: new_permission, you: cur_you });
    }

    //
    return (
        <div>
            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="you"
                        value={cur_you}
                        placeholder="About you"
                        max_length={1000}
                        handleChange={handleChangeYou}
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

export default PfAboutYouEdit;
