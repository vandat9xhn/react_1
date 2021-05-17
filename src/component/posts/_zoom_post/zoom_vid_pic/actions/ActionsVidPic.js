import React from 'react';
import PropTypes from 'prop-types';
//
import Actions from '../../../../actions/_main/Actions';
import ActionHistory from '../../../../actions/common_actions/history/ActionHistory';
import ActionUpdate from '../../../../actions/common_actions/update/ActionUpdate';
import ActionDelete from '../../../../actions/common_actions/delete/ActionDelete';
import ActionReport from '../../../../actions/common_actions/report/ActionReport';
// 
// import './ActionsVidPic.scss';

//
ActionsVidPic.propTypes = {};

//
function ActionsVidPic(props) {
    const {
        openHistoryVidPic,
        openUpdateVidPic,
        openDeleteVidPic,
        openReportVidPic,
    } = props;

    //
    return (
        <Actions>
            <ul className="ActionsVidPic_list list-none box-shadow-1 brs-5px">
                <li>
                    <ActionHistory handleOpenHistory={openHistoryVidPic} />
                </li>

                <li>
                    <ActionUpdate handleUpdate={openUpdateVidPic} />
                </li>

                <li>
                    <ActionDelete handleDelete={openDeleteVidPic} />
                </li>

                <li>
                    <ActionReport handleOpenReport={openReportVidPic} />
                </li>
            </ul>
        </Actions>
    );
}

export default ActionsVidPic;
