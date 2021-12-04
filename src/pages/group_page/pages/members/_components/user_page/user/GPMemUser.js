import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// 
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import ActionsProfileCase from '../../../../../../../component/actions_profile/case/_main/ActionsProfileCase';
import ActionPreviewProfile from '../../../../../../../component/action_preview_profile/_main/ActionPreviewProfile';
//
import GPMemUserPageLayout from '../_layout/GPMemUserPageLayout';
import GPMemUserPagePic from '../picture/GPMemUserPagePic';

//
GPMemUser.propTypes = {};

//
function GPMemUser({
    group_id,
    has_action_other,
    member_user_obj,

    use_title,
    handleAction,
}) {
    const {
        id,
        first_name,
        last_name,
        picture,

        badge_arr,
        badge_count,

        info_1,
        info_2,

        action_case,
    } = member_user_obj;

    // ------

    //
    function handle_API_ActionOther_L() {
        return [[{ name: 'test', title: 'Test' }]];
        // return handle_API_FbGroupMemberActionOther_L({
        //     type_user: 'person',
        //     id: id,
        //     group_id: group_id,
        // });
    }

    //
    function handleActionOther(params) {
        console.log(params);
    }

    //
    return (
        <div className="GPMemUser">
            <GPMemUserPageLayout
                name={
                    <ActionPreviewProfile
                        user_id={id}
                        title_action={
                            <Link
                                className="color-inherit font-600"
                                to={`/profile/${id}`}
                            >
                                {first_name} {last_name}
                            </Link>
                        }
                    />
                }
                picture={
                    <ActionPreviewProfile
                        user_id={id}
                        title_action={
                            <Link to={`/profile/${id}`}>
                                <GPMemUserPagePic picture={picture} />
                            </Link>
                        }
                    />
                }
                badge_arr={badge_arr}
                badge_count={badge_count}
                //
                info_1={info_1}
                info_2={info_2}
                //
                action_elm={
                    <ActionsProfileCase
                        action_case={action_case}
                        user_id={id}
                        use_title={IS_MOBILE ? false : use_title}
                        handleAction={handleAction}
                    />
                }
                has_action_other={has_action_other}
                handle_API_ActionOther_L={handle_API_ActionOther_L}
                handleActionOther={handleActionOther}
            />
        </div>
    );
}

export default GPMemUser;
