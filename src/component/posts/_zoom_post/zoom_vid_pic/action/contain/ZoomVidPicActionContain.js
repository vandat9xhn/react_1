import React from 'react';
import PropTypes from 'prop-types';
//
import { is_api_fake } from '../../../../../../api/_ConstAPI';
//
import ActionHistory from '../../../../../actions/common_actions/history/ActionHistory';
import ActionUpdate from '../../../../../actions/common_actions/update/ActionUpdate';
import ActionDelete from '../../../../../actions/common_actions/delete/ActionDelete';
import ActionReport from '../../../../../actions/common_actions/report/ActionReport';
import ActionPermission from '../../../../../actions/common_actions/permission/ActionPermission';
//
import './ZoomVidPicActionContain.scss';

//
ZoomVidPicActionContain.propTypes = {};

//
function ZoomVidPicActionContain({
    is_poster,

    openHistoryVidPic,
    openUpdateVidPic,
    openDeleteVidPic,
    openReportVidPic,
    openPermissionVidPic,
}) {
    //
    return (
        <div className="ZoomVidPicActionContain">
            <ul className="ZoomVidPicActionContain_list list-none">
                <li>
                    <ActionHistory handleOpenHistory={openHistoryVidPic} />
                </li>

                <li
                    className={`${
                        is_poster || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionUpdate handleUpdate={openUpdateVidPic} />
                </li>

                <li
                    className={`${
                        is_poster || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionPermission
                        handleOpenPermission={openPermissionVidPic}
                    />
                </li>

                <li
                    className={`${
                        !is_poster || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionReport handleOpenReport={openReportVidPic} />
                </li>

                <li
                    className={`${
                        is_poster || is_api_fake ? '' : 'display-none'
                    }`}
                >
                    <ActionDelete handleDelete={openDeleteVidPic} />
                </li>
            </ul>
        </div>
    );
}

export default ZoomVidPicActionContain;
