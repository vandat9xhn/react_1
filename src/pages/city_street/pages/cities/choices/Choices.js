import React from 'react';
import PropTypes from 'prop-types';
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
function Choices(props) {
    const {
        is_user,
        count_his,

        openHistory,
        openUpdate,
        openDelete,
        openReport,
    } = props;

    //
    return (
        <Actions>
            <ul className="Choices_list list-none">
                <li>
                    <ActionHistory handleOpenHistory={openHistory} />
                </li>

                <li>
                    <ActionUpdate handleUpdate={openUpdate} />
                </li>

                <li>
                    <ActionDelete handleDelete={openDelete} />
                </li>

                <li>
                    <ActionReport handleOpenReport={openReport} />
                </li>
            </ul>
        </Actions>
    );
}

export default Choices;
