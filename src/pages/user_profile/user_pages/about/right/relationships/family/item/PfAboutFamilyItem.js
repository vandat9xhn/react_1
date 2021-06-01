import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
//
import { handle_API_Family_U } from '../../../../../../__handle_api/ProfileHandleAPI';

import AboutRowItemEdit from '../../../_component/row_item_edit/AboutRowItemEdit';
import PfAboutFamilyEdit from '../edit/PfAboutFamilyEdit';

//
PfAboutFamilyItem.propTypes = {
    family_obj: PropTypes.object,
};

//
function PfAboutFamilyItem(props) {
    //
    const { family_obj } = props;

    //
    function handleUpdateItemObj(data) {
        const { member, relation, permission } = data;

        if (!member) {
            family_obj.is_del = true;

            return;
        }

        family_obj.title = `${member.friend.first_name} ${member.friend.last_name} (${relation})`;
        family_obj.member = member;
        family_obj.relation = relation;
        family_obj.permission = permission;
    }

    //
    return (
        <div>
            <AboutRowItemEdit
                item_obj={family_obj}
                Icon={IconsProfileAbout.family}
                ComponentEdit={PfAboutFamilyEdit}
                handle_API_U={handle_API_Family_U}
                handleUpdateItemObj={handleUpdateItemObj}
            />
        </div>
    );
}

export default PfAboutFamilyItem;
