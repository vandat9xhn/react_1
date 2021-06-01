import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PfAboutConfirm from '../../../../_component/confirm/PfAboutConfirm';
import InputNotValid from '../../../../../../../../../component/input/input_not_valid/InputNotValid';

//
PfAboutTownEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutTownEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, town } = item_obj;

    //
    const [cur_town, setCurTown] = useState(town);
    const [town_error, setTownError] = useState(false);

    //
    function handleChangeTown(e) {
        setCurTown(e.target.value);
    }

    function onSave(new_permission) {
        if (
            /[a-zA-Z]{2,}/.test(cur_town) ||
            (town != '' && cur_town == '')
        ) {
            handleSave({
                permission: new_permission,
                town: cur_town.trim(),
            });
        } else {
            setTownError(true);
        }
    }

    //
    return (
        <div>
            <div className={town_error ? 'text-red' : 'display-none'}>
                <div>Town must have at least 2 letters!</div>
                <br />
            </div>

            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="town"
                        value={cur_town}
                        type="text"
                        placeholder="Home town"
                        handleChange={handleChangeTown}
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

export default PfAboutTownEdit;
