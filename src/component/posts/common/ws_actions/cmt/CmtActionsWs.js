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
import './CmtActionsWs.scss';

//
CmtActionsWs.propTypes = {};

//
function CmtActionsWs({
    is_user,
    is_poster,

    openHistoryCmt,
    openUpdateCmt,
    openDeleteCmt,
    openReportCmt,
}) {
    
    //
    return (
        <ActionsNormal>
            <ul className="ActionsCmt_list App_box_shadow brs-5px">
                <li>
                    <ActionHistory handleOpenHistory={openHistoryCmt} />
                </li>

                <li
                    className={`${
                        is_user || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionUpdate handleUpdate={openUpdateCmt} />
                </li>

                <li
                    className={`${
                        !is_user || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionReport handleOpenReport={openReportCmt} />
                </li>

                <li
                    className={`${
                        is_user || is_poster || is_api_fake
                            ? ''
                            : 'display-none'
                    }`}
                >
                    <ActionDelete handleDelete={openDeleteCmt} />
                </li>
            </ul>
        </ActionsNormal>
    );
}

export default CmtActionsWs;
