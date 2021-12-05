import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import ActionsPageCase from '../../../../../../../component/actions_page/_case/ActionsPageCase';
import ActionPreviewPage from '../../../../../../../component/action_preview_page/_main/ActionPreviewPage';
//
import GPMemUserPageLayout from '../_layout/GPMemUserPageLayout';
import GPMemUserPagePic from '../picture/GPMemUserPagePic';
import { handle_API_PageActions_L } from '../../../../../../../_handle_api/fb_page/action';

//
GPMemPage.propTypes = {};

//
function GPMemPage({
    group_id,
    member_page_obj,
    has_action_other,

    use_title,
    handleAction,
}) {
    const {
        id,
        name,
        picture,

        badge_arr,
        badge_count,

        info_1,
        info_2,

        action_name,
        has_liked,
        has_followed,
    } = member_page_obj;

    // ------

    //
    function handle_API_ActionOther_L() {
        return handle_API_PageActions_L({
            page_id: id,
            type: 'other',
            params: {},
        });
    }

    //
    function handleActionOther(params) {
        console.log(params);
    }

    //
    return (
        <div className="GPMemPage">
            <GPMemUserPageLayout
                name={
                    <ActionPreviewPage
                        page_id={id}
                        title_action={
                            <Link
                                className="color-inherit font-600"
                                to={`/page/${id}`}
                            >
                                {name}
                            </Link>
                        }
                    />
                }
                picture={
                    <ActionPreviewPage
                        page_id={id}
                        title_action={
                            <Link to={`/page/${id}`}>
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
                    <ActionsPageCase
                        action_name={action_name}
                        page_id={id}
                        has_liked={has_liked}
                        has_followed={has_followed}
                        //
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

export default GPMemPage;
