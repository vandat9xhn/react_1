import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_School_U } from '../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import AboutRowItemEdit from '../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutSchoolEdit from '../edit/PfAboutSchoolEdit';

//
PfAboutSchoolItem.propTypes = {
    school_obj: PropTypes.object,
};

//
function PfAboutSchoolItem(props) {
    //
    const { school_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { school, permission } = data;

        school_obj.title = school;
        school_obj.permission = permission;
        school_obj.school = school
    }

    //
    return (
        <div>
            <AboutRowItemEdit
                item_obj={school_obj}
                Icon={IconsProfileAbout.school}
                ComponentEdit={PfAboutSchoolEdit}
                handle_API_U={handle_API_School_U}
                handleUpdateItemObj={handleUpdateItemObj}
            />
        </div>
    );
}

export default PfAboutSchoolItem;
