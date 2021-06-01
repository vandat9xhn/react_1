import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../_custom_hooks/UseForceUpdate';
//
import { handle_API_Favour_U } from '../../../../../../__handle_api/ProfileHandleAPI';

import PfAboutAdd from '../../../_component/add/PfAboutAdd';

import PfAboutFavourEdit from '../edit/PfAboutFavourEdit';
import PfAboutFavourItem from '../item/PfAboutFavourItem';

//
PfAboutFavour.propTypes = {
    favour_obj: PropTypes.object,
};

//
function PfAboutFavour(props) {
    //
    const { favour_obj } = props;

    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { favour, permission } = data;

        favour_obj.title = favour;
        favour_obj.favour = favour;
        favour_obj.permission = permission;
        forceUpdate();
    }

    //
    return (
        <div>
            <div
                className={`PfAbout_add ${
                    favour_obj.favour == '' ? '' : 'display-none'
                }`}
            >
                <PfAboutAdd
                    title_add="Add a favour"
                    item_obj={{
                        favour: '',
                        permission: 0,
                    }}
                    ComponentEdit={PfAboutFavourEdit}
                    handleCreate={handleCreate}
                    handle_API_C={handle_API_Favour_U}
                />
            </div>

            <div className={`${favour_obj.favour == '' ? 'display-none' : ''}`}>
                <PfAboutFavourItem favour_obj={favour_obj} />
            </div>
        </div>
    );
}

export default PfAboutFavour;
