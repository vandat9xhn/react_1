import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../_custom_hooks/UseForceUpdate';
//
import { handle_API_OtherName_C } from '../../../../../../__handle_api/ProfileHandleAPI';

import PfAboutAdd from '../../../_component/add/PfAboutAdd';

import PfAboutOtherNameEdit from '../edit/PfAboutOtherNameEdit';
import PfAboutOtherNameItem from '../item/PfAboutOtherNameItem';

//
PfAboutOtherName.propTypes = {
    other_name_arr: PropTypes.array,
};

//
function PfAboutOtherName(props) {
    //
    const { other_name_arr } = props;

    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { other_name, permission } = data;

        other_name_arr.push({
            id: 101 + other_name_arr.length,
            title: other_name,
            other_name: other_name,
            permission: permission,
        });

        forceUpdate();
    }

    //
    return (
        <div>
            <div className="PfAbout_add">
                <PfAboutAdd
                    title_add="Add a other name"
                    item_obj={{
                        other_name: '',
                        permission: 0,
                    }}
                    ComponentEdit={PfAboutOtherNameEdit}
                    handleCreate={handleCreate}
                    handle_API_C={handle_API_OtherName_C}
                />
            </div>

            <div>
                {other_name_arr.map((other_name_obj) => (
                    <div key={`PfAboutOtherName_${other_name_obj.id}`}>
                        <PfAboutOtherNameItem other_name_obj={other_name_obj} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PfAboutOtherName;
