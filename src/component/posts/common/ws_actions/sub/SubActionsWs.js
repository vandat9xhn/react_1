import React from 'react';
import PropTypes from 'prop-types';
//
import Actions from '../../../../actions/_main/Actions';
import ActionHistory from '../../../../actions/common_actions/history/ActionHistory';
import ActionUpdate from '../../../../actions/common_actions/update/ActionUpdate';
import ActionDelete from '../../../../actions/common_actions/delete/ActionDelete';
import ActionReport from '../../../../actions/common_actions/report/ActionReport';
//
import './SubActionsWs.scss';

//
SubActionsWs.propTypes = {};

//
function SubActionsWs(props) {
    const {
        openHistorySub,
        openUpdateSub,
        openDeleteSub,
        openReportSub,
    } = props;

    //
    return (
        <Actions>
            <ul className="ActionsCmt__list App_box_shadow brs-5px list-none">
                <li>
                    <ActionHistory handleOpenHistory={openHistorySub} />
                </li>

                <li>
                    <ActionUpdate handleUpdate={openUpdateSub} />
                </li>

                <li>
                    <ActionDelete handleDelete={openDeleteSub} />
                </li>

                <li>
                    <ActionReport handleOpenReport={openReportSub} />
                </li>
            </ul>
        </Actions>
    );
}

export default SubActionsWs;
