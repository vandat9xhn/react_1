import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import SubActionsWs from '../../../ws_actions/sub/SubActionsWs';
import ContentMore from '../../../../../content_more/Content_more';
//
import './SubWsHead.scss';
import PictureName from '../../../../../picture_name/pic_name/PictureName';

//
SubWsHead.propTypes = {};

function SubWsHead(props) {
    const {
        user,

        content_obj,
        onSeeMoreContentSub,
        fetching_more_content,
        //
        openHistorySub,
        openUpdateSub,
        openDeleteSub,
        openReportSub,
    } = props;

    const { content, has_more_content } = content_obj;

    //
    return (
        <div className="CmtSub_head">
            <div className="SubWsHead_user width-fit-content cursor-pointer hv-cl-blue label-field">
                <PictureName user={user} />
            </div>

            <div className="CmtSub_content">
                <ContentMore
                    content={content}
                    has_more_content={has_more_content}
                    seeMoreContent={onSeeMoreContentSub}
                    is_fetching={fetching_more_content}
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
