import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../_custom_hooks/UseForceUpdate';
//
import { handle_API_Relationship_U } from '../../../../../../__handle_api/ProfileHandleAPI';

import PfAboutAdd from '../../../_component/add/PfAboutAdd';

import PfAboutRelationshipEdit from '../edit/PfAboutRelationshipEdit';
import PfAboutRelationshipItem from '../item/PfAboutRelationshipItem';
import AboutNoItem from '../../../_component/no_item/AboutNoItem';

//
PfAboutRelationship.propTypes = {
    relationship_obj: PropTypes.object,
};

//
function PfAboutRelationship({ relationship_obj, has_fetched }) {
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
    function handleUpdateItemObj(data) {
        const { relationship, permission } = data;

        relationship_obj.title = relationship;
        relationship_obj.permission = permission;
        relationship_obj.relationship = relationship;

        forceUpdate();
    }

    //
    const no_item = !relationship_obj.title;

    //
    return (
        <div>
            <h3 className="PfAbout_title">Relationship</h3>

            <div>
                <AboutNoItem
                    has_fetched={has_fetched}
                    no_item={no_item}
                    title="No relationship"
                >
                    <div>
                        <div
                            className={`PfAbout_add ${
                                no_item ? '' : 'display-none'
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

                        <div>
                            <PfAboutRelationshipItem
                                relationship_obj={relationship_obj}
                                handleUpdateItemObj={handleUpdateItemObj}
                            />
                        </div>
                    </div>
                </AboutNoItem>
            </div>
        </div>
    );
}

export default PfAboutRelationship;
