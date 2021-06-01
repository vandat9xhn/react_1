import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../_custom_hooks/UseForceUpdate';
//
import { handle_API_Relationship_U } from '../../../../../../__handle_api/ProfileHandleAPI';

import PfAboutAdd from '../../../_component/add/PfAboutAdd';

import PfAboutRelationshipEdit from '../edit/PfAboutRelationshipEdit';
import PfAboutRelationshipItem from '../item/PfAboutRelationshipItem';

//
PfAboutRelationship.propTypes = {
    relationship_obj: PropTypes.object,
};

//
function PfAboutRelationship({ relationship_obj }) {
    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { relationship, permission } = data;

        relationship_obj.title = relationship;
        relationship_obj.relationship = relationship;
        relationship_obj.permission = permission;
        forceUpdate();
    }

    //
    return (
        <div>
            <div
                className={`PfAbout_add ${
                    relationship_obj.relationship == '' ? '' : 'display-none'
                }`}
            >
                <PfAboutAdd
                    title_add="Add a relationship"
                    item_obj={{
                        relationship: '',
                        permission: 0,
                    }}
                    ComponentEdit={PfAboutRelationshipEdit}
                    handleCreate={handleCreate}
                    handle_API_C={handle_API_Relationship_U}
                />
            </div>

            <div
                className={`${
                    relationship_obj.relationship == '' ? 'display-none' : ''
                }`}
            >
                <PfAboutRelationshipItem relationship_obj={relationship_obj} />
            </div>
        </div>
    );
}

export default PfAboutRelationship;
