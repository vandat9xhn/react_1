import React from 'react';
import PropTypes from 'prop-types';
//
import PictureName from '../../../../../picture_name/pic_name/PictureName';
import ContentMore from '../../../../../content_more/Content_more';
// 
import SubActionsWs from '../../../ws_actions/sub/SubActionsWs';
//
import './SubWsHead.scss';

//
SubWsHead.propTypes = {};

function SubWsHead(props) {
    const {
        user,

        content_obj,
        seeMoreContentSub,
        
        openHistorySub,
        openUpdateSub,
        openDeleteSub,
        openReportSub,
    } = props;

    //
    return (
        <div className="CmtSub_head">
            <div className="SubWsHead_user width-fit-content cursor-pointer hv-cl-blue label-field">
                <PictureName user={user} />
            </div>

            <div className="CmtSub_content">
                <ContentMore
                    content_obj={content_obj}
                    seeMoreContent={seeMoreContentSub}
                />
            </div>

            <div className="CmtSub_edit">
                <SubActionsWs
                    openHistorySub={openHistorySub}
                    openUpdateSub={openUpdateSub}
                    openDeleteSub={openDeleteSub}
                    openReportSub={openReportSub}
                />
            </div>
        </div>
    );
}

export default SubWsHead;
