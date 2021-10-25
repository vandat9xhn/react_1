import React from 'react';
import PropTypes from 'prop-types';
//
import { is_api_fake } from '../../../../../../api/_ConstAPI';
//
import ActionHistory from '../../../../../actions/common_actions/history/ActionHistory';
import ActionUpdate from '../../../../../actions/common_actions/update/ActionUpdate';
import ActionDelete from '../../../../../actions/common_actions/delete/ActionDelete';
import ActionReport from '../../../../../actions/common_actions/report/ActionReport';
import ActionPermission from '../../../../../actions/common_actions/permission/ActionPermission';
//
import './PostHeadActionContain.scss';

//
PostHeadActionContain.propTypes = {};

//
function PostHeadActionContain({
    is_poster,

    openHistoryPost,
    openUpdatePost,
    openDeletePost,
    openReportPost,
    openPermissionPost,
}) {
    //
    return (
        <div className="PostHeadActionContain">
            <ul className="PostHeadActionContain_list list-none">
                <li>
                    <ActionHistory handleOpenHistory={openHistoryPost} />
                </li>

                <li
                    className={`${
                        is_poster || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionUpdate handleUpdate={openUpdatePost} />
                </li>

                <li
                    className={`${
                        is_poster || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionPermission
                        handleOpenPermission={openPermissionPost}
                    />
                </li>

                <li
                    className={`${
                        !is_poster || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionReport handleOpenReport={openReportPost} />
                </li>

                <li
                    className={`${
                        is_poster || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionDelete handleDelete={openDeletePost} />
                </li>
            </ul>
        </div>
    );
}

export default PostHeadActionContain;
