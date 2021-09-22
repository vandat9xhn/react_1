import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../../_hooks/UseForceUpdate';
//
import { handle_API_UserPhone_C } from '../../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import PfAboutAdd from '../../../../_component/add/PfAboutAdd';

import PfAboutPhoneEdit from '../edit/PfAboutPhoneEdit';
import PfAboutPhoneItem from '../item/PfAboutPhoneItem';

//
PfAboutPhone.propTypes = {
    phone_arr: PropTypes.array,
};

//
function PfAboutPhone({ phone_arr }) {
    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { phone, permission } = data;

        phone_arr.push({
            id: 101 + phone_arr.length,
            title: phone,
            phone: phone,
            permission: permission,
        });
        forceUpdate();
    }

    //
    return (
        <div>
            <div className="PfAbout_add">
                <PfAboutAdd
                    title_add="Add a phone"
                    item_obj={{
                        phone: '',
                        permission: 0,
                    }}
                    ComponentEdit={PfAboutPhoneEdit}
                    handleCreate={handleCreate}
                    handle_API_C={handle_API_UserPhone_C}
                />
            </div>

            <div>
                {phone_arr.map((phone_obj) => (
                    <div key={`PfAboutPhone_${phone_obj.id}`}>
                        <PfAboutPhoneItem phone_obj={phone_obj} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PfAboutPhone;
