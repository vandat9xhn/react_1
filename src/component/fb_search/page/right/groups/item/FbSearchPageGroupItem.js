import React from 'react';
import PropTypes from 'prop-types';
//
import { UnitNumber } from '../../../../../../_some_function/UnitNumber';
//
import IconGroup from '../../../../../../_icons_svg/icon_group/IconGroup';
//
import ActionPreviewGroup from '../../../../../action_preview_group/_main/ActionPreviewGroup';
//
import './FbSearchPageGroupItem.scss';

//
FbSearchPageGroupItem.propTypes = {};

//
function FbSearchPageGroupItem({ group_obj }) {
    //
    const {
        id,
        name,
        picture,

        privacy,
        count_member,
        action_case,
        action_case_obj,

        info_arr,
    } = group_obj;

    // -----

    //
    function handleActionGroup() {
        console.log(action_case);
    }

    //
    return (
        <div className="FbSearchPageGroupItem">
            <FsSearchPageUserPageGroup
                id={id}
                picture={picture}
                name={name}
                //
                PicComponent={ActionPreviewGroup}
                NameComponent={ActionPreviewGroup}
                link_to={`/group/${id}`}
                action_img_props={{ group_id: id }}
                action_name_props={{ group_id: id }}
                //
                info_1={`${privacy} group · ${UnitNumber(count_member)} member${
                    count_member >= 2 ? 's' : ''
                }`}
                info_2={
                    <div>
                        {info_arr.map((item, ix) => (
                            <div key={ix}>{item.title}</div>
                        ))}
                    </div>
                }
                Icon={
                    <div
                        className={`FbSearchPageGroupItem_btn_icon pos-rel btn-icon-36px cursor-pointer hv-bg-hv ${
                            action_case == 'not_joined'
                                ? 'bg-fb'
                                : 'bg-fb-active text-blue'
                        }`}
                        title={action_case_obj.title}
                        onClick={handleActionGroup}
                    >
                        <IconGroup size_icon="24px" />

                        <div className="pos-abs right-0 bottom-0 padding-right-2px padding-bottom-2px">
                            {action_case_obj.Icon}
                        </div>
                    </div>
                }
            />
        </div>
    );
}

export default FbSearchPageGroupItem;
