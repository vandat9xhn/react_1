import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../_custom_hooks/UseForceUpdate';
//
import { handle_API_LifeEvent_C } from '../../../../../../__handle_api/ProfileHandleAPI';

import PfAboutAdd from '../../../_component/add/PfAboutAdd';

import PfAboutLifeEventEdit from '../edit/PfAboutLifeEventEdit';
import PfAboutLifeEventItem from '../item/PfAboutLifeEventItem';

//
PfAboutLifeEvent.propTypes = {
    life_event_arr: PropTypes.array,
};

//
function PfAboutLifeEvent(props) {
    //
    const { life_event_arr } = props;

    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { life_event, permission } = data;

        life_event_arr.push({
            id: 101 + life_event_arr.length,
            title: life_event,
            life_event: life_event,
            permission: permission,
        });
        forceUpdate();
    }

    //
    return (
        <div>
            <h3 className="PfAbout_title">Life Events</h3>
            
            <div className="PfAbout_add">
                <PfAboutAdd
                    title_add="Add a life event"
                    item_obj={{
                        life_event: '',
                        permission: 0,
                    }}
                    ComponentEdit={PfAboutLifeEventEdit}
                    handleCreate={handleCreate}
                    handle_API_C={handle_API_LifeEvent_C}
                />
            </div>

            <div>
                {life_event_arr.map((life_event_obj) => (
                    <div key={`PfAboutLifeEvent_${life_event_obj.id}`}>
                        <PfAboutLifeEventItem life_event_obj={life_event_obj} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PfAboutLifeEvent;
