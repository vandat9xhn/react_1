import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PfAboutConfirm from '../../../_component/confirm/PfAboutConfirm';
import InputNotValid from '../../../../../../../../component/input/input_not_valid/InputNotValid';

//
PfAboutSchoolEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutSchoolEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, school } = item_obj;

    //
    const [cur_school, setCurSchool] = useState(school);
    const [school_error, setSchoolError] = useState(false);

    //
    function handleChangeSchool(e) {
        setCurSchool(e.target.value);
    }

    function onSave(new_permission) {
        if (
            /[a-zA-Z]{2,}/.test(cur_school) ||
            (school != '' && cur_school == '')
        ) {
            handleSave({
                permission: new_permission,
                school: cur_school.trim(),
            });
        } else {
            setSchoolError(true);
        }
    }

    //
    return (
        <div>
            <div className={school_error ? 'text-red' : 'display-none'}>
                <div>School must have at least 2 letters!</div>
                <br />
            </div>

            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="school"
                        value={cur_school}
                        type="text"
                        placeholder="School"
                        handleChange={handleChangeSchool}
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

export default PfAboutSchoolEdit;
