import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_UserAddress_U } from '../../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import AboutRowItemEdit from '../../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutAddressEdit from '../edit/PfAboutAddressEdit';

//
PfAboutAddressItem.propTypes = {
    address_obj: PropTypes.object,
};

//
function PfAboutAddressItem(props) {
    //
    const { address_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { address, permission } = data;

        address_obj.title = address;
        address_obj.permission = permission;
        address_obj.address = address
    }

    //
    return (
        <div>
            <AboutRowItemEdit
                item_obj={address_obj}
                Icon={IconsProfileAbout.address}
                ComponentEdit={PfAboutAddressEdit}
                handle_API_U={handle_API_UserAddress_U}
                handleUpdateItemObj={handleUpdateItemObj}
            />
        </div>
    );
}

export default PfAboutAddressItem;
