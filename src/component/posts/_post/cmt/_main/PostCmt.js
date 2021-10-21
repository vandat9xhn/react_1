import React from 'react';
import PropTypes from 'prop-types';
//
import { getTypeVidOrPic } from '../../../../../_some_function/VideoOrImage';
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
    return (
        <div className="PostCmt">
            <div className="PostCmt_row display-flex">
                <div className="margin-right-6px margin-top-2px">
                    <CmtLeft
                        user_id={user_id}
                        user_pic={user_pic}
                        user_pic_size={user_pic_size}
                    />
                </div>

                <div>
                    {is_editing ? (
                        <PostCmtEdit
                            text={`${content_obj.content} ${content_obj.content_more}`}
                            vid_pics={[
                                {
                                    vid_pic: vid_pic,
                                    type: getTypeVidOrPic(vid_pic),
                                },
                            ]}
                            is_fetching={is_fetching_edit}
                            handleEdit={handleEdit}
                            cancelEdit={cancelEdit}
                        />
                    ) : (
                        <CmtRight
                            user_name={user_name}
                            content_obj={content_obj}
                            vid_pic={vid_pic}
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
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default PostCmt;
