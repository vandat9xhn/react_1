import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { useInputSelectLoading } from '../../../../../../../../_hooks/useInputSelectLoading';
//
import InputSelect from '../../../../../../../../component/input/input_select/_main/InputSelect';
import Select from '../../../../../../../../component/input/select/Select';
//
import { handle_API_Family_L } from '../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import { relation_arr } from '../../../../__common/data/ProfileIntroData';

import PfAboutConfirm from '../../../_component/confirm/PfAboutConfirm';
import PfRelationOptionList from '../option_list/_main/PfRelationOptionList';
import PfRelationSelectedList from '../selected_list/_main/PfRelationSelectedList';

//
const multiple = false;

//
PfAboutFamilyEdit.propTypes = {
    item_obj: PropTypes.object,
    handleSave: PropTypes.func,
    handleCancel: PropTypes.func,
};

//
function PfAboutFamilyEdit(props) {
    //
    const { item_obj, handleSave, handleCancel } = props;

    const { permission, member, relation } = item_obj;

    //
    const [family_state, setFamilyState] = useState({
        cur_relation: relation || relation_arr[0],
        is_error: false,
    });

    const { cur_relation, is_error } = family_state;

    //
    const {
        value_input,
        option_arr,
        selected_arr,
        option_count,

        has_fetched,
        is_fetching,
        open_option,

        handleShowOption,
        handleHideOption,
        handleSelectOption,

        handleChangeInput,
        handleShowMore,
        handleRemoveSelectedItem,

        setInputSelectState,
    } = useInputSelectLoading({
        initial_selected_arr: JSON.stringify(member) == '{}' ? [] : [member],
        handle_API_L: (c_count) => handle_API_Family_L(c_count),
        multiple: multiple,
    });

    //
    function handleChange(key, value) {
        setFamilyState({
            ...family_state,
            is_error: false,
            [key]: value,
        });
    }

    //
    function handleChangeRelation(e) {
        handleChange('cur_relation', e.target.value);
    }

    function onSave(new_permission) {
        if (
            selected_arr.length ||
            (JSON.stringify(member) != '{}' && selected_arr.length == 0)
        ) {
            handleSave({
                permission: new_permission,
                member: selected_arr[0],
                relation: cur_relation,
            });

            console.log(selected_arr);
        } else {
            handleChange('is_error', true);
        }
    }

    // console.log(open_option);
    //
    return (
        <div>
            <div className={is_error ? 'text-red' : 'display-none'}>
                <div>Choose member</div>
                <br />
            </div>

            <div>
                <div className="PfAbout_input">
                    <InputSelect
                        selected_item_arr={selected_arr}
                        option_item_arr={option_arr}
                        value={value_input}
                        multiple={multiple}
                        placeholder="Family member"
                        //
                        ComponentOptionList={PfRelationOptionList}
                        ComponentSelectedList={PfRelationSelectedList}
                        //
                        selected_props={{}}
                        option_props={{
                            has_fetched:
                                has_fetched && selected_arr.length == 0,
                            open_option: open_option,
                            is_fetching: is_fetching,
                            count: option_count,
                            handleShowMore: handleShowMore,
                        }}
                        //
                        handleFocusInput={handleShowOption}
                        handleBlurInput={handleHideOption}
                        //
                        handleChangeInput={handleChangeInput}
                        handleSelectOption={handleSelectOption}
                        handleRemoveSelectedItem={handleRemoveSelectedItem}
                    />
                </div>

                <div className="PfAbout_input">
                    <Select
                        options={relation_arr}
                        current_option={cur_relation}
                        onSelectOption={handleChangeRelation}
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

export default PfAboutFamilyEdit;
