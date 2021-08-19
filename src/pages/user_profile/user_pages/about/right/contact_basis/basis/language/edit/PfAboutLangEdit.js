import React from 'react';
import PropTypes from 'prop-types';
//
import { useInputSelect } from '../../../../../../../../../_hooks/useInputSelect';
//
import InputSelect from '../../../../../../../../../component/input/input_select/_main/InputSelect';
//
import { data_profile_lang_arr } from '../../../../../../../../../_data/profile/language';

import PfAboutConfirm from '../../../../_component/confirm/PfAboutConfirm';

//
PfAboutLangEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutLangEdit({ item_obj, handleSave, handleCancel }) {
    //
    const { permission, lang } = item_obj;

    //
    const {
        cur_data_arr: cur_lang_arr,
        option_data_arr: option_lang_arr,
        value_input,

        handleChangeInput,
        handleSelectOption,
        handleRemoveSelectedItem,
    } = useInputSelect({
        all_data_arr: data_profile_lang_arr,
        initial_data_str: lang,
    });

    //
    function onSave(new_permission) {
        handleSave({
            permission: new_permission,
            lang: cur_lang_arr.join(','),
        });
    }

    //
    return (
        <div>
            <div className="PfAbout_input">
                <InputSelect
                    selected_item_arr={cur_lang_arr}
                    option_item_arr={option_lang_arr}
                    value={value_input}
                    placeholder="Language"
                    //
                    handleChangeInput={handleChangeInput}
                    handleSelectOption={handleSelectOption}
                    handleRemoveSelectedItem={handleRemoveSelectedItem}
                />
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

export default PfAboutLangEdit;
