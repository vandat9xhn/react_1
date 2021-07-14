import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../../_hooks/UseForceUpdate';
//
import { handle_API_Address_C } from '../../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import PfAboutAdd from '../../../../_component/add/PfAboutAdd';

import PfAboutAddressEdit from '../edit/PfAboutAddressEdit';
import PfAboutAddressItem from '../item/PfAboutAddressItem';

//
PfAboutAddress.propTypes = {
    address_arr: PropTypes.array,
};

//
function PfAboutAddress(props) {
    //
    const { address_arr } = props;

    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { address, permission } = data;

        address_arr.push({
            id: 101 + address_arr.length,
            title: address,
            address: address,
            permission: permission,
        });
        forceUpdate();
    }

    //
    return (
        <div>
            <div className="PfAbout_add">
                <PfAboutAdd
                    title_add="Add a address"
                    item_obj={{
                        address: '',
                        permission: 0,
                    }}
                    ComponentEdit={PfAboutAddressEdit}
                    handleCreate={handleCreate}
                    handle_API_C={handle_API_Address_C}
                />
            </div>

            <div>
                {address_arr.map((address_obj) => (
                    <div key={`PfAboutAddress_${address_obj.id}`}>
                        <PfAboutAddressItem address_obj={address_obj} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PfAboutAddress;
