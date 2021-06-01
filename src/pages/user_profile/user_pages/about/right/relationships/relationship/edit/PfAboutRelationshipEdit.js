import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import InputNotValid from '../../../../../../../../component/input/input_not_valid/InputNotValid';
//
import PfAboutConfirm from '../../../_component/confirm/PfAboutConfirm';
import Select from '../../../../../../../../component/input/select/Select';

// 
const relationship_arr = [
    '',
    'Single',
    'Dating',
    'Complex',
    'Married'
]

//
PfAboutRelationshipEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutRelationshipEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, relationship } = item_obj;

    //
    const [cur_relationship, setCurRelationship] = useState(relationship);

    //
    function handleChangeRelationship(e) {
        setCurRelationship(e.target.value);
    }

    // 
    function onSave(new_permission) {
        handleSave({
            permission: new_permission,
            relationship: cur_relationship,
        });
    }
    
    //
    return (
        <div>
            <div>
                <div className="PfAbout_input">
                    <Select
                        options={relationship_arr}
                        current_option={cur_relationship}
                        onSelectOption={handleChangeRelationship}
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

export default PfAboutRelationshipEdit;
