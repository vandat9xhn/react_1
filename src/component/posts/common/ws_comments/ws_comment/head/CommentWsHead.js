import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import CmtActionsWs from '../../../ws_actions/cmt/CmtActionsWs';
import ContentMore from '../../../../../content_more/Content_more';
//
import './CommentWsHead.scss';

//
CommentWsHead.propTypes = {};

//
function CommentWsHead({
    user,
    is_user,
    is_poster,

    content_obj,
    onSeeMoreContentCmt,

    openHistoryCmt,
    openUpdateCmt,
    openDeleteCmt,
    openReportCmt,
}) {
    //
    return (
        <div className="CmtSub_head">
            <div className="CommentWsHead_user margin-bottom-5px width-fit-content">
                <Link
                    to={`/profile/${user.id}`}
                    className="normal-text hv-cl-blue font-600"
                >
                    {user.first_name + ' ' + user.last_name}
                </Link>
            </div>

            <div className="CmtSub_content">
                <ContentMore
                    content_obj={content_obj}
                    seeMoreContent={onSeeMoreContentCmt}
                />
            </div>

            <div className="CmtSub_edit">
                <CmtActionsWs
                    is_user={is_user}
                    is_poster={is_poster}
                    openHistoryCmt={openHistoryCmt}
                    openUpdateCmt={openUpdateCmt}
                    openDeleteCmt={openDeleteCmt}
                    openReportCmt={openReportCmt}
                />
            </div>
        </div>
    );
}

export default CommentWsHead;
