import React from 'react';
import PropTypes from 'prop-types';
//
import { is_api_fake } from '../../../../../api/_ConstAPI';
// 
import { useBool } from '../../../../../_hooks/useBool';
//
import Actions from '../../../../actions/_main/Actions';
import ActionHistory from '../../../../actions/common_actions/history/ActionHistory';
import ActionUpdate from '../../../../actions/common_actions/update/ActionUpdate';
import ActionDelete from '../../../../actions/common_actions/delete/ActionDelete';
import ActionReport from '../../../../actions/common_actions/report/ActionReport';
import ActionPermission from '../../../../actions/common_actions/permission/ActionPermission';
//
import './PostHeadAction.scss';

//
PostHeadAction.propTypes = {};

//
function PostHeadAction({
    is_poster,

    openHistoryPost,
    openUpdatePost,
    openDeletePost,
    openReportPost,
    openPermissionPost,
}) {
    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // ----

    //
    function onOpenHistoryPost(params) {
        openHistoryPost(params);
        setIsTrue(false);
    }

    //
    function onOpenUpdatePost(params) {
        openUpdatePost(params);
        setIsTrue(false);
    }

    //
    function onOpenDeletePost(params) {
        openDeletePost(params);
        setIsTrue(false);
    }

    //
    function onOpenReportPost(params) {
        openReportPost(params);
        setIsTrue(false);
    }

    //
    function onOpenPermissionPost(params) {
        openPermissionPost(params);
        setIsTrue(false);
    }

    //
    return (
        <div className="PostHeadAction">
            <Actions is_show={is_true} toggleShow={toggleBool}>
                <ul className="PostHeadAction_list list-none">
                    <li>
                        <ActionHistory handleOpenHistory={onOpenHistoryPost} />
                    </li>

                    <li
                        className={`${
                            is_poster || is_api_fake ? '' : 'display-none'
                        }`}
                    >
                        <ActionUpdate handleUpdate={onOpenUpdatePost} />
                    </li>

                    <li
                        className={`${
                            is_poster || is_api_fake ? '' : 'display-none'
                        }`}
                    >
                        <ActionPermission
                            handleOpenPermission={onOpenPermissionPost}
                        />
                    </li>

                    <li
                        className={`${
                            !is_poster || is_api_fake ? '' : 'display-none'
                        }`}
                    >
                        <ActionReport handleOpenReport={onOpenReportPost} />
                    </li>

                    <li
                        className={`${
                            is_poster || is_api_fake ? '' : 'display-none'
                        }`}
                    >
                        <ActionDelete handleDelete={onOpenDeletePost} />
                    </li>
                </ul>
            </Actions>
        </div>
    );
}

export default PostHeadAction;
