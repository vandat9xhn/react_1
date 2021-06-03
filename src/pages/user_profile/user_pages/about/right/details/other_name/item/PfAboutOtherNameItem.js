import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_OtherName_U } from '../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutOtherNameEdit from '../edit/PfAboutOtherNameEdit';

//
PfAboutOtherNameItem.propTypes = {
    other_name_obj: PropTypes.object,
};

//
function PfAboutOtherNameItem(props) {
    //
    const { other_name_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { other_name, permission } = data;

        other_name_obj.title = other_name;
        other_name_obj.permission = permission;
        other_name_obj.other_name = other_name
    }

    //
    return (
        <div>
            <AboutRowItemEdit
                item_obj={other_name_obj}
                Icon={IconsProfileAbout.other_name}
                ComponentEdit={PfAboutOtherNameEdit}
                handle_API_U={handle_API_OtherName_U}
                handleUpdateItemObj={handleUpdateItemObj}
            />
        </div>
    );
}

export default PfAboutOtherNameItem;
