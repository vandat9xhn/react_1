import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Gender_U } from '../../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../../_component/row_item_edit/AboutRowItemEdit';

import PfAbGenderEdit from '../edit/PfAbGenderEdit';
//
import './PfAboutGender.scss';

//
PfAboutGender.propTypes = {};

//
function PfAboutGender(props) {
    //
    const { gender_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { gender, permission } = data;

        gender_obj.permission = permission;
        gender_obj.gender = gender;
        gender_obj.title = gender.slice(0, 1).toUpperCase() + gender.slice(1);
    }

    //
    return (
        <div>
            <div>
                <AboutRowItemEdit
                    item_obj={gender_obj}
                    Icon={IconsProfileAbout.gender}
                    label="Gender"
                    ComponentEdit={PfAbGenderEdit}
                    handle_API_U={handle_API_Gender_U}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutGender;
