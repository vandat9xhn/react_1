import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Relationship_U } from '../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutRelationshipEdit from '../edit/PfAboutRelationshipEdit';

//
PfAboutRelationshipItem.propTypes = {
    relationship_obj: PropTypes.object,
};

//
function PfAboutRelationshipItem(props) {
    //
    const { relationship_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { relationship, permission } = data;

        relationship_obj.title = relationship;
        relationship_obj.permission = permission;
        relationship_obj.relationship = relationship;
    }

    //
    return (
        <div>
            <div>
                <div className="label-field text-secondary">Relationship</div>
            </div>

            <div>
                <AboutRowItemEdit
                    item_obj={relationship_obj}
                    Icon={IconsProfileAbout.relationship}
                    ComponentEdit={PfAboutRelationshipEdit}
                    handle_API_U={handle_API_Relationship_U}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutRelationshipItem;
