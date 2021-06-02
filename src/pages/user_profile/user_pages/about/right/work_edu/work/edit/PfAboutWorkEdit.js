import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PfAboutConfirm from '../../../_component/confirm/PfAboutConfirm';
import InputNotValid from '../../../../../../../../component/input/input_not_valid/InputNotValid';

//
PfAboutWorkEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutWorkEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, work } = item_obj;

    //
    const [cur_work, setCurWork] = useState(work);
    const [work_error, setWorkError] = useState(false);

    //
    function handleChangeWork(e) {
        setCurWork(e.target.value);
    }

    function onSave(new_permission) {
        if (
            /[a-zA-Z]{2,}/.test(cur_work) ||
            (work != '' && cur_work == '')
        ) {
            handleSave({
                permission: new_permission,
                work: cur_work.trim(),
            });
        } else {
            setWorkError(true);
        }
    }

    //
    return (
        <div>
            <div className={work_error ? 'text-red' : 'display-none'}>
                <div>Work must have at least 2 letters!</div>
                <br />
            </div>

            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="work"
                        value={cur_work}
                        type="text"
                        placeholder="Work"
                        handleChange={handleChangeWork}
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

export default PfAboutWorkEdit;
