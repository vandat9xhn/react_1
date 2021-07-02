import React from 'react';
import PropTypes from 'prop-types';
//
import { is_api_fake } from '../../../../../api/_ConstAPI';
// 
import ActionsNormal from '../../../../../component/actions/_main/ActionsNormal';
import ActionHistory from '../../../../../component/actions/common_actions/history/ActionHistory';
import ActionUpdate from '../../../../../component/actions/common_actions/update/ActionUpdate';
import ActionDelete from '../../../../../component/actions/common_actions/delete/ActionDelete';
import ActionReport from '../../../../../component/actions/common_actions/report/ActionReport';
//
import './Choices.scss';

//
Choices.propTypes = {
    count_his: PropTypes.number,
    is_user: PropTypes.bool,
};

Choices.defaultProps = {};

//
function Choices({
    is_user,
    count_his,

    openHistory,
    openUpdate,
    openDelete,
    openReport,
}) {
    
    //
    return (
        <ActionsNormal>
            <ul className="Choices_list list-none">
                <li className={`${count_his || is_api_fake ? '' : 'display-none'}`}>
                    <ActionHistory handleOpenHistory={openHistory} />
                </li>

                <li
                    className={`${
                        is_user || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionUpdate handleUpdate={openUpdate} />
                </li>

                <li
                    className={`${
                        !is_user || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionReport handleOpenReport={openReport} />
                </li>

                <li
                    className={`${
                        is_user || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionDelete handleDelete={openDelete} />
                </li>
            </ul>
        </ActionsNormal>
    );
}

export default Choices;
