import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../../_hooks/UseForceUpdate';
// 
import { formatLocalDateString } from '../../../../../../../../../_some_function/FormatDate';
//
import { handle_API_Birth_U } from '../../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import PfAboutAdd from '../../../../_component/add/PfAboutAdd';

import PfAboutBirthEdit from '../edit/PfAboutBirthEdit';
import PfAboutBirthItem from '../item/PfAboutBirthItem';

//
PfAboutBirth.propTypes = {
    birth_obj: PropTypes.object,
};

//
function PfAboutBirth({ birth_obj }) {
    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { birth, permission } = data;

        birth_obj.title = formatLocalDateString(birth);
        birth_obj.birth = birth;
        birth_obj.permission = permission;
        forceUpdate();
    }

    //
    return (
        <div>
            <div
                className={`PfAbout_add ${
                    birth_obj.birth == '' ? '' : 'display-none'
                }`}
            >
                <PfAboutAdd
                    title_add="Add a birth"
                    item_obj={{
                        birth: '',
                        permission: 0,
                    }}
                    ComponentEdit={PfAboutBirthEdit}
                    handleCreate={handleCreate}
                    handle_API_C={handle_API_Birth_U}
                />
            </div>

            <div className={`${birth_obj.birth == '' ? 'display-none' : ''}`}>
                <PfAboutBirthItem birth_obj={birth_obj} />
            </div>
        </div>
    );
}

export default PfAboutBirth;
