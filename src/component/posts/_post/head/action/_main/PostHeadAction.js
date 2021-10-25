import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { useBool } from '../../../../../../_hooks/useBool';
//
import Actions from '../../../../../actions/_main/Actions';
//
import PostHeadActionContain from '../contain/PostHeadActionContain';
//
import './PostHeadAction.scss';

//
PostHeadAction.propTypes = {};

//
function PostHeadAction({
    is_poster,

    openHistoryPost,
    openUpdatePost,
    openDeletePost,
    openReportPost,
    openPermissionPost,
}) {
    //
    const { is_true, setIsTrue, toggleBool } = useBool();

    // ----

    //
    function handleClose() {
        setIsTrue(false);
    }

    // -----

    //
    function onOpenHistoryPost(params) {
        openHistoryPost(params);
        setIsTrue(false);
    }

    //
    function onOpenUpdatePost(params) {
        openUpdatePost(params);
        setIsTrue(false);
    }

    //
    function onOpenDeletePost(params) {
        openDeletePost(params);
        setIsTrue(false);
    }

    //
    function onOpenReportPost(params) {
        openReportPost(params);
        setIsTrue(false);
    }

    //
    function onOpenPermissionPost(params) {
        openPermissionPost(params);
        setIsTrue(false);
    }

    // ------

    const Contain = (
        <PostHeadActionContain
            is_poster={is_poster}
            openHistoryPost={onOpenHistoryPost}
            openUpdatePost={onOpenUpdatePost}
            openDeletePost={onOpenDeletePost}
            openReportPost={onOpenReportPost}
            openPermissionPost={onOpenPermissionPost}
        />
    );

    //
    return (
        <div className="PostHeadAction">
            <Actions
                is_show={is_true}
                use_title={true}
                toggleShow={toggleBool}
                handleClose={handleClose}
            >
                {IS_MOBILE ? (
                    <div className="PostHeadAction_list-mb pos-abs bottom-0 left-0 w-100per bg-primary overflow-y-auto scroll-width-0">
                        {Contain}
                    </div>
                ) : (
                    <div className="PostHeadAction_list-pc brs-8px bg-primary box-shadow-fb">
                        {Contain}
                    </div>
                )}
            </Actions>
        </div>
    );
}

export default PostHeadAction;
