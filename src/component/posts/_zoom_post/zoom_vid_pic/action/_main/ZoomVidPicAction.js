import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { useBool } from '../../../../../../_hooks/useBool';
//
import Actions from '../../../../../actions/_main/Actions';
//
import ZoomVidPicActionContain from '../contain/ZoomVidPicActionContain';
//
import './ZoomVidPicAction.scss';

//
ZoomVidPicAction.propTypes = {};

//
function ZoomVidPicAction({
    is_poster,

    openHistoryVidPic,
    openUpdateVidPic,
    openDeleteVidPic,
    openReportVidPic,
    openPermissionVidPic,
}) {
    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // ----

    //
    function handleClose() {
        setIsTrue(false);
    }

    // ----

    //
    function onOpenHistoryVidPic(params) {
        openHistoryVidPic(params);
        setIsTrue(false);
    }

    //
    function onOpenUpdateVidPic(params) {
        openUpdateVidPic(params);
        setIsTrue(false);
    }

    //
    function onOpenDeleteVidPic(params) {
        openDeleteVidPic(params);
        setIsTrue(false);
    }

    //
    function onOpenReportVidPic(params) {
        openReportVidPic(params);
        setIsTrue(false);
    }

    //
    function onOpenPermissionVidPic(params) {
        openPermissionVidPic(params);
        setIsTrue(false);
    }

    // ------

    const Contain = (
        <ZoomVidPicActionContain
            is_poster={is_poster}
            openHistoryVidPic={onOpenHistoryVidPic}
            openUpdateVidPic={onOpenUpdateVidPic}
            openDeleteVidPic={onOpenDeleteVidPic}
            openReportVidPic={onOpenReportVidPic}
            openPermissionVidPic={onOpenPermissionVidPic}
        />
    );

    //
    return (
        <div className="ZoomVidPicAction">
            <Actions
                is_show={is_true}
                use_title={true}
                x_always="right"
                //
                toggleShow={toggleBool}
                handleClose={handleClose}
            >
                {IS_MOBILE ? (
                    <div className="ZoomVidPicAction_list-mb pos-abs bottom-0 left-0 w-100per bg-primary overflow-y-auto scroll-width-0">
                        {Contain}
                    </div>
                ) : (
                    <div className="ZoomVidPicAction_list-pc brs-8px bg-primary box-shadow-fb">
                        {Contain}
                    </div>
                )}
            </Actions>
        </div>
    );
}

export default ZoomVidPicAction;
