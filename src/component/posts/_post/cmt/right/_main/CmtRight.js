import React from 'react';
import PropTypes from 'prop-types';
//
import CmtAction from '../action/_main/CmtAction';
import CmtUser from '../user/CmtUser';
import CmtText from '../text/CmtText';
import CmtVidPic from '../vid_pic/CmtVidPic';
import CmtInteract from '../interact/_main/CmtInteract';
import CmtReacted from '../reacted/_main/CmtReacted';
//
import './CmtRight.scss';

//
CmtRight.propTypes = {};

//
function CmtRight({
    user_name,
    content_obj,
    vid_pic,
    updated_time,
    class_scroll_elm,

    reacted_ix_arr,
    reacted_count,
    user_reacted_ix,

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
}) {
    //
    return (
        <div className="CmtRight">
            <div className="CmtRight_content">
                <div className="CmtRight_user_text inline-block pos-rel padding-x-12px padding-y-8px bg-fb">
                    <div>
                        <CmtUser user_name={user_name} />
                    </div>

                    <div>
                        <CmtText
                            content_obj={content_obj}
                            seeMoreContent={seeMoreContent}
                        />
                    </div>

                    {vid_pic ? null : (
                        <div className="pos-abs right-0 top-100per trans-y--50per z-index-1 padding-right-2px">
                            <CmtReacted
                                reacted_ix_arr={reacted_ix_arr}
                                reacted_count={reacted_count}
                                on_API_LikeAll_L={on_API_LikeAll_L}
                                onOpenDetailLikeAll={onOpenDetailLikeAll}
                            />
                        </div>
                    )}
                </div>

                <div className="CmtRight_action inline-block padding-left-5px">
                    <CmtAction
                        handle_API_Action_L={handle_API_Action_L}
                        handleAction={handleAction}
                    />
                </div>
            </div>

            {vid_pic ? (
                <div>
                    <CmtVidPic
                        vid_pic={vid_pic}
                        reacted_ix_arr={reacted_ix_arr}
                        reacted_count={reacted_count}
                        //
                        handleClick={handleClickVidPic}
                        on_API_LikeAll_L={on_API_LikeAll_L}
                        onOpenDetailLikeAll={onOpenDetailLikeAll}
                    />
                </div>
            ) : null}

            <div className="margin-top-5px">
                <CmtInteract
                    user_reacted_ix={user_reacted_ix}
                    updated_time={updated_time}
                    class_scroll_elm={class_scroll_elm}
                    //
                    changeTypeLike={changeTypeLike}
                    startReply={startReply}
                    sendAward={sendAward}
                    openHistory={openHistory}
                />
            </div>
        </div>
    );
}

export default CmtRight;
