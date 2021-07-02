import React from 'react';
import PropTypes from 'prop-types';
//
import { is_api_fake } from '../../../../../api/_ConstAPI';
//
import ActionsNormal from '../../../../actions/_main/ActionsNormal';
import ActionHistory from '../../../../actions/common_actions/history/ActionHistory';
import ActionUpdate from '../../../../actions/common_actions/update/ActionUpdate';
import ActionDelete from '../../../../actions/common_actions/delete/ActionDelete';
import ActionReport from '../../../../actions/common_actions/report/ActionReport';
//
import './SubActionsWs.scss';

//
SubActionsWs.propTypes = {};

//
function SubActionsWs({
    is_user,
    is_commenter,

    openHistorySub,
    openUpdateSub,
    openDeleteSub,
    openReportSub,
}) {
    
    //
    return (
        <ActionsNormal>
            <ul className="ActionsCmt__list App_box_shadow brs-5px list-none">
                <li>
                    <ActionHistory handleOpenHistory={openHistorySub} />
                </li>

                <li
                    className={`${
                        is_user || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionUpdate handleUpdate={openUpdateSub} />
                </li>

                <li
                    className={`${
                        !is_user || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionReport handleOpenReport={openReportSub} />
                </li>

                <li
                    className={`${
                        is_user || is_commenter || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionDelete handleDelete={openDeleteSub} />
                </li>
            </ul>
        </ActionsNormal>
    );
}

export default SubActionsWs;
