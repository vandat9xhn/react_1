import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../../../_custom_hooks/UseForceUpdate';
//
import { handle_API_Family_C } from '../../../../../../__handle_api/ProfileHandleAPI';

import PfAboutAdd from '../../../_component/add/PfAboutAdd';

import PfAboutFamilyEdit from '../edit/PfAboutFamilyEdit';
import PfAboutFamilyItem from '../item/PfAboutFamilyItem';
import PictureName from '../../../../../../../../component/picture_name/pic_name/PictureName';

//
PfAboutFamily.propTypes = {
    family_arr: PropTypes.array,
};

//
function PfAboutFamily({ family_arr }) {
    //
    const forceUpdate = useForceUpdate();

    //
    function handleCreate(data) {
        const { relation, member, permission } = data;

        family_arr.push({
            id: 101 + family_arr.length,
            title: (
                <PictureName
                    user={member.friend}
                    content={<div className="font-12px">{relation}</div>}
                    align_center={false}
                />
            ),
            member: member,
            relation: relation,
            permission: permission,
        });
        forceUpdate();
    }

    //
    return (
        <div>
            <h3 className="PfAbout_title">Family</h3>

            <div className="PfAbout_add">
                <PfAboutAdd
                    title_add="Add a family member"
                    item_obj={{
                        member: {},
                        relation: '',
                        permission: 0,
                    }}
                    ComponentEdit={PfAboutFamilyEdit}
                    handleCreate={handleCreate}
                    handle_API_C={handle_API_Family_C}
                />
            </div>

            <div>
                {family_arr.map((family_obj) => (
                    <div key={`PfAboutFamily_${family_obj.id}`}>
                        <PfAboutFamilyItem family_obj={family_obj} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PfAboutFamily;
