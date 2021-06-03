import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Phone_U } from '../../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutPhoneEdit from '../edit/PfAboutPhoneEdit';

//
PfAboutPhoneItem.propTypes = {
    phone_obj: PropTypes.object,
};

//
function PfAboutPhoneItem(props) {
    //
    const { phone_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { phone, permission } = data;

        phone_obj.title = phone;
        phone_obj.permission = permission;
        phone_obj.phone = phone;
    }

    //
    return (
        <div>
            <AboutRowItemEdit
                item_obj={phone_obj}
                Icon={IconsProfileAbout.phone}
                ComponentEdit={PfAboutPhoneEdit}
                handle_API_U={handle_API_Phone_U}
                handleUpdateItemObj={handleUpdateItemObj}
            />
        </div>
    );
}

export default PfAboutPhoneItem;
