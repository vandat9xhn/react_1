import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PfAboutConfirm from '../../../_component/confirm/PfAboutConfirm';
import InputNotValid from '../../../../../../../../component/input/input_not_valid/InputNotValid';

//
PfAboutUniversityEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutUniversityEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, university } = item_obj;

    //
    const [cur_university, setCurUniversity] = useState(university);
    const [university_error, setUniversityError] = useState(false);

    //
    function handleChangeUniversity(e) {
        setCurUniversity(e.target.value);
    }

    function onSave(new_permission) {
        if (
            /[a-zA-Z]{2,}/.test(cur_university) ||
            (university != '' && cur_university == '')
        ) {
            handleSave({
                permission: new_permission,
                university: cur_university.trim(),
            });
        } else {
            setUniversityError(true);
        }
    }

    //
    return (
        <div>
            <div className={university_error ? 'text-red' : 'display-none'}>
                <div>University must have at least 2 letters!</div>
                <br />
            </div>

            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="university"
                        value={cur_university}
                        type="text"
                        placeholder="University"
                        handleChange={handleChangeUniversity}
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

export default PfAboutUniversityEdit;
