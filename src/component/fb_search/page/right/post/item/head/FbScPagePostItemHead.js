import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { handle_API_FbSearchPostAction_L } from '../../../../../../../_handle_api/fb_search/posts';
//
import ActionsMultiList from '../../../../../../actions_multi_list/_main/ActionsMultiList';
import ActionPreviewProfile from '../../../../../../action_preview_profile/_main/ActionPreviewProfile';
// 
import './FbScPagePostItemHead.scss';

//
FbScPagePostItemHead.propTypes = {};

//
function FbScPagePostItemHead({ user, post_id, handleAction }) {
    //
    function handle_API_L() {
        return handle_API_FbSearchPostAction_L({ post_id: post_id });
    }

    //
    return (
        <div className="FbScPagePostItemHead">
            <div className="flex-between-center">
                <ActionPreviewProfile
                    user_id={user.id}
                    title_action={
                        <Link
                            className="color-inherit font-500 hv-underline"
                            to={`/profile/${user.id}`}
                        >
                            <div className="display-flex align-items-center">
                                <img
                                    className="FbScPagePostItemHead_pic brs-50 object-fit-cover"
                                    src={user.picture}
                                    alt=""
                                    width="60"
                                    height="60"
                                />

                                <div className="margin-left-12px">
                                    {user.first_name} {user.last_name}
                                </div>
                            </div>
                        </Link>
                    }
                />

                <div>
                    <ActionsMultiList
                        x_always="right"
                        handle_API_L={handle_API_L}
                        handleAction={handleAction}
                    />
                </div>
            </div>
        </div>
    );
}

export default FbScPagePostItemHead;
