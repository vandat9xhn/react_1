import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { is_api_fake } from '../../../../../api/_ConstAPI';
// 
import { context_api } from '../../../../../_context/ContextAPI';
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
function ActionsVidPic({
    is_user,
    count_his,

    openHistoryVidPic,
    openUpdateVidPic,
    openDeleteVidPic,
    openReportVidPic,
}) {
    //
    const { user } = useContext(context_api);

    //
    return (
        <Actions>
            <ul className="ActionsVidPic_list list-none box-shadow-1 brs-5px">
                <li
                    className={`${
                        count_his || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionHistory handleOpenHistory={openHistoryVidPic} />
                </li>

                <li
                    className={`${
                        is_user || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionUpdate handleUpdate={openUpdateVidPic} />
                </li>

                <li
                    className={`${
                        user.id || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionReport handleOpenReport={openReportVidPic} />
                </li>

                <li
                    className={`${
                        is_user || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionDelete handleDelete={openDeleteVidPic} />
                </li>
            </ul>
        </Actions>
    );
}

export default ActionsVidPic;
