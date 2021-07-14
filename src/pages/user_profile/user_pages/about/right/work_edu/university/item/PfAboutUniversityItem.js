import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_University_U } from '../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import AboutRowItemEdit from '../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutUniversityEdit from '../edit/PfAboutUniversityEdit';

//
PfAboutUniversityItem.propTypes = {
    university_obj: PropTypes.object,
};

//
function PfAboutUniversityItem(props) {
    //
    const { university_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { university, permission } = data;

        university_obj.title = university;
        university_obj.permission = permission;
        university_obj.university = university
    }

    //
    return (
        <div>
            <AboutRowItemEdit
                item_obj={university_obj}
                Icon={IconsProfileAbout.university}
                ComponentEdit={PfAboutUniversityEdit}
                handle_API_U={handle_API_University_U}
                handleUpdateItemObj={handleUpdateItemObj}
            />
        </div>
    );
}

export default PfAboutUniversityItem;
