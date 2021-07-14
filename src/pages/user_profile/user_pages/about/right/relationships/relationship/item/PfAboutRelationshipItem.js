import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Relationship_U } from '../../../../../../../../_handle_api/profile/ProfileHandleAPI';

import AboutRowItemEdit from '../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutRelationshipEdit from '../edit/PfAboutRelationshipEdit';

//
PfAboutRelationshipItem.propTypes = {
    relationship_obj: PropTypes.object,
};

//
function PfAboutRelationshipItem({ relationship_obj, handleUpdateItemObj }) {
    //
    return (
        <div>
            <div>
                <AboutRowItemEdit
                    item_obj={relationship_obj}
                    Icon={IconsProfileAbout.relationship}
                    // label="Relationship"
                    ComponentEdit={PfAboutRelationshipEdit}
                    handle_API_U={handle_API_Relationship_U}
                    handleUpdateItemObj={handleUpdateItemObj}
                />
            </div>
        </div>
    );
}

export default PfAboutRelationshipItem;
