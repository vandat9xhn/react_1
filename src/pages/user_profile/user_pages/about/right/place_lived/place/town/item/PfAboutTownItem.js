import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Town_U } from '../../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutTownEdit from '../edit/PfAboutTownEdit';

//
PfAboutTownItem.propTypes = {
    town_obj: PropTypes.object,
};

//
function PfAboutTownItem(props) {
    //
    const { town_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { town, permission } = data;
        
        town_obj.title = town;
        town_obj.permission = permission;
        town_obj.town = town
    }

    //
    return (
        <div>
            <AboutRowItemEdit
                item_obj={town_obj}
                Icon={IconsProfileAbout.town}
                ComponentEdit={PfAboutTownEdit}
                handle_API_U={handle_API_Town_U}
                handleUpdateItemObj={handleUpdateItemObj}
            />
        </div>
    );
}

export default PfAboutTownItem;
