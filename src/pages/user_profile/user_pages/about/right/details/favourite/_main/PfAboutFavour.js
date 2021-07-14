import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../_hooks/UseForceUpdate';
//
import { handle_API_Favour_U } from '../../../../../../../../_handle_api/profile/ProfileHandleAPI';

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
    function handleUpdateItemObj(data) {
        const { favour, permission } = data;

        favour_obj.title = favour;
        favour_obj.permission = permission;
        favour_obj.favour = favour;

        forceUpdate();
    }

    //
    return (
        <div>
            <div
                className={`PfAbout_add ${
                    favour_obj.title == '' ? '' : 'display-none'
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

            <div>
                <PfAboutFavourItem
                    favour_obj={favour_obj}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutFavour;
