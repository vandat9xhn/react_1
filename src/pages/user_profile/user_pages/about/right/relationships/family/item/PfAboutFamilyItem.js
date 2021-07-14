import React from 'react';
import PropTypes from 'prop-types';
//
import { IconsProfileAbout } from '../../../../../../../../_groups_icon/about/GroupIconProfileAbout';
// 
import PictureName from '../../../../../../../../component/picture_name/pic_name/PictureName';
//
import { handle_API_Family_U } from '../../../../../../../../_handle_api/profile/ProfileHandleAPI';

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

        family_obj.title = member ? (
            <PictureName
                user={member.friend}
                content={<div className="font-12px">{relation}</div>}
                align_center={false}
            />
        ) : (
            ''
        );
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
