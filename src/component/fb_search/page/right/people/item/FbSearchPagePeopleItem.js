import React from 'react';
import PropTypes from 'prop-types';
//
import ActionsProfileCase from '../../../../../actions_profile/case/_main/ActionsProfileCase';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';
import FsSearchPageUserPageGroup from '../../../_components/user_page_group/FsSearchPageUserPageGroup';
//
import './FbSearchPagePeopleItem.scss';

//
FbSearchPagePeopleItem.propTypes = {};

//
function FbSearchPagePeopleItem({ profile }) {
    //
    const {
        id,
        first_name,
        last_name,
        picture,

        info_1,
        info_2_arr,
        action_case,
    } = profile;

    // -----

    //
    function handleAction(...params) {
        console.log(params);
    }

    //
    return (
        <div className="FbSearchPagePeopleItem">
            <FsSearchPageUserPageGroup
                id={id}
                picture={picture}
                name={`${first_name} ${last_name}`}
                //
                PicComponent={ActionPreviewProfile}
                NameComponent={ActionPreviewProfile}
                link_to={`/profile/${id}`}
                action_img_props={{ user_id: id }}
                action_name_props={{ user_id: id }}
                //
                info_1={info_1}
                info_2={
                    <div>
                        {info_2_arr.map((item, ix) => (
                            <div key={ix}>{item}</div>
                        ))}
                    </div>
                }
                Icon={
                    <ActionsProfileCase
                        action_case={action_case}
                        user_id={id}
                        use_title={false}
                        handleAction={handleAction}
                    />
                }
            />
        </div>
    );
}

export default FbSearchPagePeopleItem;
