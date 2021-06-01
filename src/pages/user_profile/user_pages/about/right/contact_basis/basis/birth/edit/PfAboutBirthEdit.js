import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PfAboutConfirm from '../../../../_component/confirm/PfAboutConfirm';

//
PfAboutBirthEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutBirthEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, birth } = item_obj;

    //
    const [cur_birth, setCurBirth] = useState(birth);

    //
    function handleChangeBirth(e) {
        setCurBirth(e.target.value);
    }

    function onSave(new_permission) {
        handleSave({ permission: new_permission, birth: cur_birth });
    }

    //
    return (
        <div>
            <div>
                <div className="PfAbout_input">
                    <input
                        value={cur_birth}
                        type="date"
                        max={new Date().toJSON().slice(0, 10)}
                        onChange={handleChangeBirth}
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

export default PfAboutBirthEdit;
