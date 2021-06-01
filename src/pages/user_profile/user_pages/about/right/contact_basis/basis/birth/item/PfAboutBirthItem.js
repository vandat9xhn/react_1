import React from 'react';
import PropTypes from 'prop-types';
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
function PfAboutBirthItem(props) {
    //
    const { birth_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { birth, permission } = data;

        birth_obj.title = birth;
        birth_obj.permission = permission;
        birth_obj.birth = birth;
    }

    //
    return (
        <div>
            <div>
                <div className="label-field text-secondary">Birth</div>
            </div>

            <div>
                <AboutRowItemEdit
                    item_obj={birth_obj}
                    Icon={IconsProfileAbout.birth}
                    ComponentEdit={PfAboutBirthEdit}
                    handle_API_U={handle_API_Birth_U}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutBirthItem;
