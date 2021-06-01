import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_LifeEvent_U } from '../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutLifeEventEdit from '../edit/PfAboutLifeEventEdit';

//
PfAboutLifeEventItem.propTypes = {
    life_event_obj: PropTypes.object,
};

//
function PfAboutLifeEventItem(props) {
    //
    const { life_event_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { life_event, permission } = data;
        
        if(!life_event){
            life_event_obj.is_del = true

            return
        }

        life_event_obj.title = life_event;
        life_event_obj.permission = permission;
        life_event_obj.life_event = life_event
    }

    //
    return (
        <div>
            <AboutRowItemEdit
                item_obj={life_event_obj}
                Icon={IconsProfileAbout.life_event}
                ComponentEdit={PfAboutLifeEventEdit}
                handle_API_U={handle_API_LifeEvent_U}
                handleUpdateItemObj={handleUpdateItemObj}
            />
        </div>
    );
}

export default PfAboutLifeEventItem;
