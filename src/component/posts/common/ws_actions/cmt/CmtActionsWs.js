import React from 'react';
import PropTypes from 'prop-types';
//
import Actions from '../../../../actions/_main/Actions';
import ActionHistory from '../../../../actions/common_actions/history/ActionHistory';
import ActionUpdate from '../../../../actions/common_actions/update/ActionUpdate';
import ActionDelete from '../../../../actions/common_actions/delete/ActionDelete';
import ActionReport from '../../../../actions/common_actions/report/ActionReport';
// 
import './CmtActionsWs.scss';

//
CmtActionsWs.propTypes = {};

//
function CmtActionsWs(props) {
    const {
        openHistoryCmt,
        openUpdateCmt,
        openDeleteCmt,
        openReportCmt,
    } = props;

    //
    return (
        <Actions>
            <ul className="ActionsCmt_list App_box_shadow brs-5px">
                <li>
                    <ActionHistory handleOpenHistory={openHistoryCmt} />
                </li>

                <li>
                    <ActionUpdate handleUpdate={openUpdateCmt} />
                </li>

                <li>
                    <ActionDelete handleDelete={openDeleteCmt} />
                </li>

                <li>
                    <ActionReport handleOpenReport={openReportCmt} />
                </li>
            </ul>
        </Actions>
    );
}

export default CmtActionsWs;
