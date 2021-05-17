import React from 'react';
import PropTypes from 'prop-types';
//
import Actions from '../../../actions/_main/Actions';
import ActionHistory from '../../../actions/common_actions/history/ActionHistory';
import ActionUpdate from '../../../actions/common_actions/update/ActionUpdate';
import ActionDelete from '../../../actions/common_actions/delete/ActionDelete';
import ActionReport from '../../../actions/common_actions/report/ActionReport';
import ActionPermission from '../../../actions/common_actions/permission/ActionPermission';
//
import './ActionsPost.scss';
import ActionBack from '../../../actions/common_actions/back/ActionBack';

//
ActionsPost.propTypes = {};

//
function ActionsPost(props) {
    const {
        openHistoryPost,
        openUpdatePost,
        openDeletePost,
        openReportPost,
        openPermissionPost,
    } = props;

    //
    return (
        <div className="ActionsPost">
            <Actions>
                <ul className="ActionsPost__list">
                    <li>
                        <ActionHistory handleOpenHistory={openHistoryPost} />
                    </li>

                    <li>
                        <ActionUpdate handleUpdate={openUpdatePost} />
                    </li>

                    <li>
                        <ActionDelete handleDelete={openDeletePost} />
                    </li>

                    <li>
                        <ActionReport handleOpenReport={openReportPost} />
                    </li>

                    <li>
                        <ActionPermission handleOpenPermission={openPermissionPost} />
                    </li>
                </ul>
            </Actions>
        </div>
    );
}

export default ActionsPost;
