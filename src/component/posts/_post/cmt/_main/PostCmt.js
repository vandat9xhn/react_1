import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { getTypeVidOrPic } from '../../../../../_some_function/VideoOrImage';
//
import { useHold } from '../../../../../_hooks/useHold';
//
import CmtLeft from '../left/_main/CmtLeft';
import CmtRight from '../right/_main/CmtRight';
import PostCmtEdit from '../edit/_main/PostCmtEdit';
//
import './PostCmt.scss';
import './PostCmtConnect.scss';

//
PostCmt.propTypes = {};

//
function PostCmt({
    user_id,
    user_name,
    user_pic,
    user_pic_size,

    content_obj,
    vid_pic,
    is_edited,
    updated_time,
    class_scroll_elm,

    reacted_ix_arr,
    reacted_count,
    user_reacted_ix,

    is_editing,
    is_fetching_edit,

    seeMoreContent,
    handleClickVidPic,
    startReply,
    sendAward,
    openHistory,

    changeTypeLike,
    on_API_LikeAll_L,
    onOpenDetailLikeAll,

    handle_API_Action_L,
    handleAction,
    handleEdit,
    cancelEdit,
}) {
    //
    const [show_action_mb, setShowActionMb] = useState(false);

    //
    const { holding, StartHold, StopHold } = useHold({ use_holding: true });

    // ----

    //
    function closeActionMb() {
        setShowActionMb(false);
    }

    //
    function handleTouchStart() {
        StartHold(() => {
            setShowActionMb(true);
        });
    }

    //
    function handleTouchMove() {
        StopHold();
    }

    //
    function handleTouchEnd() {
        StopHold();
    }

    //
    return (
        <div className={`PostCmt ${holding ? 'PostCmt-holding' : ''}`}>
            <div className="PostCmt_row display-flex">
                <div className="margin-right-6px margin-top-2px">
                    <CmtLeft
                        user_id={user_id}
                        user_pic={user_pic}
                        user_pic_size={user_pic_size}
                    />
                </div>

                {!is_editing ? null : (
                    <div className="flex-grow-1">
                        <PostCmtEdit
                            text={`${content_obj.content} ${content_obj.content_more}`}
                            vid_pics={
                                vid_pic
                                    ? [
                                          {
                                              vid_pic: vid_pic,
                                              type: getTypeVidOrPic(vid_pic),
                                          },
                                      ]
                                    : []
                            }
                            is_fetching={is_fetching_edit}
                            handleEdit={handleEdit}
                            cancelEdit={cancelEdit}
                        />
                    </div>
                )}

                <div className={`flex-grow-1 ${is_editing ? 'display-none' : ''}`}>
                    <CmtRight
                        user_id={user_id}
                        user_name={user_name}
                        //
                        content_obj={content_obj}
                        vid_pic={vid_pic}
                        is_edited={is_edited}
                        updated_time={updated_time}
                        class_scroll_elm={class_scroll_elm}
                        //
                        reacted_ix_arr={reacted_ix_arr}
                        reacted_count={reacted_count}
                        user_reacted_ix={user_reacted_ix}
                        //
                        seeMoreContent={seeMoreContent}
                        handleClickVidPic={handleClickVidPic}
                        startReply={startReply}
                        sendAward={sendAward}
                        openHistory={openHistory}
                        //
                        changeTypeLike={changeTypeLike}
                        on_API_LikeAll_L={on_API_LikeAll_L}
                        onOpenDetailLikeAll={onOpenDetailLikeAll}
                        //
                        handle_API_Action_L={handle_API_Action_L}
                        handleAction={handleAction}
                        closeActionMb={closeActionMb}
                        //
                        show_action_mb={show_action_mb}
                        handleTouchStart={handleTouchStart}
                        handleTouchMove={handleTouchMove}
                        handleTouchEnd={handleTouchEnd}
                    />
                </div>
            </div>
        </div>
    );
}

export default PostCmt;
