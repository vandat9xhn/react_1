import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import InputNotValid from '../../../../../../../../component/input/input_not_valid/InputNotValid';
// 
import PfAboutConfirm from '../../../_component/confirm/PfAboutConfirm';

//
PfAboutFavourEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutFavourEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, favour } = item_obj;

    //
    const [cur_favour, setCurFavour] = useState(favour);

    //
    function handleChangeFavour(e) {
        setCurFavour(e.target.value);
    }

    function onSave(new_permission) {
        handleSave({ permission: new_permission, favour: cur_favour });
    }

    //
    return (
        <div>
            <div>
                <div className="PfAbout_input">
                    <InputNotValid
                        name="favour"
                        value={cur_favour}
                        placeholder="About favour"
                        max_length={1000}
                        handleChange={handleChangeFavour}
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

export default PfAboutFavourEdit;
