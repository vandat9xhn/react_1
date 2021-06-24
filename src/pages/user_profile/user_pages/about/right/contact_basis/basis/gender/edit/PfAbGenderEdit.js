import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import RadioListCustom from '../../../../../../../../../component/input/radio_custom/list/RadioListCustom';
//
import PfAboutConfirm from '../../../../_component/confirm/PfAboutConfirm';
//
import './PfAbGenderEdit.scss';

//
const gender_arr = [
    {
        gender: 'male',
        title: 'Male',
    },
    {
        gender: 'female',
        title: 'Female',
    },
    {
        gender: 'other',
        title: 'Other',
    },
];

//
PfAbGenderEdit.propTypes = {
    gender: PropTypes.string,
    password: PropTypes.string,
    permission: PropTypes.number,

    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAbGenderEdit({
    item_obj,

    handleSave,
    handleCancel,
}) {
    //
    const { gender, permission } = item_obj;

    //
    const [cur_gender_ix, setCurGenderIx] = useState(
        gender_arr.findIndex((item) => item.gender == gender)
    );

    //
    function handleChangeGender(ix) {
        setCurGenderIx(ix);
    }

    //
    function onSave(new_permission) {
        handleSave({
            gender: gender_arr[cur_gender_ix].gender,
            permission: new_permission,
        });
    }

    //
    return (
        <div className="PfAbGenderEdit">
            <div>
                <RadioListCustom
                    list={gender_arr}
                    active_ix={cur_gender_ix}
                    handleChoose={handleChangeGender}
                />
            </div>

            <div>
                <PfAboutConfirm
                    permission={permission}
                    handleSave={onSave}
                    handleCancel={handleCancel}
                />
            </div>
        </div>
    );
}

export default PfAbGenderEdit;
