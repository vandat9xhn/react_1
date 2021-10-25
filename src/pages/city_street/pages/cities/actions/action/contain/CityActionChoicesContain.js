import React from 'react';
import PropTypes from 'prop-types';
//
import { is_api_fake } from '../../../../../../../api/_ConstAPI';
//
import ActionHistory from '../../../../../../../component/actions/common_actions/history/ActionHistory';
import ActionUpdate from '../../../../../../../component/actions/common_actions/update/ActionUpdate';
import ActionDelete from '../../../../../../../component/actions/common_actions/delete/ActionDelete';
import ActionReport from '../../../../../../../component/actions/common_actions/report/ActionReport';
import ActionPermission from '../../../../../../../component/actions/common_actions/permission/ActionPermission';
//
import './CityActionChoicesContain.scss';

//
CityActionChoicesContain.propTypes = {};

//
function CityActionChoicesContain({
    is_poster,

    openHistory,
    openUpdate,
    openDelete,
    openReport,
    openPermission,
}) {
    //
    return (
        <div className="CityActionChoicesContain">
            <ul className="CityActionChoicesContain_list list-none">
                <li>
                    <ActionHistory handleOpenHistory={openHistory} />
                </li>

                <li
                    className={`${
                        is_poster || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionUpdate handleUpdate={openUpdate} />
                </li>

                <li
                    className={`${
                        !is_poster || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionReport handleOpenReport={openReport} />
                </li>

                <li
                    className={`${
                        is_poster || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionDelete handleDelete={openDelete} />
                </li>
            </ul>
        </div>
    );
}

export default CityActionChoicesContain;
