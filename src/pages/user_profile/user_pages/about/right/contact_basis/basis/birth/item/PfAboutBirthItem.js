import React from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateString } from '../../../../../../../../../_some_function/FormatDate';
// 
import { IconsProfileAbout } from '../../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Birth_U } from '../../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutBirthEdit from '../edit/PfAboutBirthEdit';

//
PfAboutBirthItem.propTypes = {
    birth_obj: PropTypes.object,
};

//
function PfAboutBirthItem({ birth_obj }) {
    //
    function handleUpdateItemObj(data) {
        const { birth, permission } = data;

        birth_obj.title = formatLocalDateString(birth);
        birth_obj.birth = birth;
        birth_obj.permission = permission;
    }

    //
    return (
        <div>
            <div>
                <AboutRowItemEdit
                    item_obj={birth_obj}
                    Icon={IconsProfileAbout.birth}
                    label="Birth"
                    //
                    ComponentEdit={PfAboutBirthEdit}
                    handle_API_U={handle_API_Birth_U}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutBirthItem;
