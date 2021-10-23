import React from 'react';
import PropTypes from 'prop-types';
//
import { is_api_fake } from '../../../../../api/_ConstAPI';
//
import { useBool } from '../../../../../_hooks/useBool';
//
import Actions from '../../../../../component/actions/_main/Actions';
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
    const { is_true, toggleBool } = useBool();

    //
    return (
        <Actions is_show={is_true} toggleShow={toggleBool}>
            <ul className="Choices_list list-none" onClick={toggleBool}>
                <li
                    className={`${
                        count_his || is_api_fake ? '' : 'display-none'
                    }`}
                >
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
        </Actions>
    );
}

export default Choices;
