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
function CommentWsHead(props) {
    const {
        user,
        //
        content_obj,
        onSeeMoreContentCmt,
        fetching_more_content,
        //
        openHistoryCmt,
        openUpdateCmt,
        openDeleteCmt,
        openReportCmt,
    } = props;

    const { content, has_more_content } = content_obj;

    //
    return (
        <div className="CmtSub_head">
            <div className="CommentWsHead_user width-fit-content">
                <Link
                    to={`/profile/${user.id}`}
                    className="normal-text hv-cl-blue label-field"
                >
                    {user.first_name + ' ' + user.last_name}
                </Link>
            </div>

            <div className="CmtSub_content">
                <ContentMore
                    content={content}
                    has_more_content={has_more_content}
                    seeMoreContent={onSeeMoreContentCmt}
                    is_fetching={fetching_more_content}
                />
            </div>

            <div className="CmtSub_edit">
                <CmtActionsWs
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
