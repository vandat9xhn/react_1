import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
//
import ZoomPostCommonLeft from '../common_left/_main/ZoomPostCommonLeft';
import ZoomPostCommonRight from '../right/_main/ZoomPostCommonRight';
import ZoomPostCommonTitle from '../title/ZoomPostCommonTitle';
//
import './ZoomPostCommon.scss';

//
ZoomPostCommon.propTypes = {};

//
function ZoomPostCommon({
    show_screen_title,
    closeScreenTitle,

    vid_pic,
    is_live,
    video_or_img,
    is_fetching,

    is_has_next,
    is_has_prev,
    handleNextVidPic,
    handlePrevVidPic,

    user,
    updated_time,

    content_obj,
    seeMoreContent,

    reacted_count,
    reacted_ix_arr,
    on_API_Like_L,

    is_editing,
    handleEdit,
    cancelEdit,

    ActionElm,
    LikeShareCmtElm,
    CommentElm,
}) {
    //
    useMakeBodyHidden({
        hidden_scroll: true,
        hidden_app: show_screen_title,
        hidden_header: !show_screen_title,
    });

    //
    return (
        <div
            className={`ZoomPostCommon ${
                show_screen_title ? '' : 'pos-fixed left-0 top-0 z-index-lv1'
            }`}
        >
            <div className="ZoomPostCommon_contain">
                <div className="ZoomPostCommon_row display-flex h-100per">
                    <div className="ZoomPostCommon_left bg-shadow-9 pos-rel">
                        <div className="ZoomPostCommon_title pos-fixed top-0 left-0">
                            <ZoomPostCommonTitle
                                url={vid_pic}
                                show_screen_title={show_screen_title}
                                closeScreenTitle={closeScreenTitle}
                            />
                        </div>

                        <ZoomPostCommonLeft
                            vid_pic={vid_pic}
                            is_live={is_live}
                            video_or_img={video_or_img}
                            is_fetching={is_fetching}
                            //
                            is_has_next={is_has_next}
                            is_has_prev={is_has_prev}
                            handleNextVidPic={handleNextVidPic}
                            handlePrevVidPic={handlePrevVidPic}
                        />
                    </div>

                    <div className="ZoomPostCommon_right">
                        <ZoomPostCommonRight
                            user={user}
                            updated_time={updated_time}
                            //
                            content_obj={content_obj}
                            seeMoreContent={seeMoreContent}
                            //
                            reacted_count={reacted_count}
                            reacted_ix_arr={reacted_ix_arr}
                            on_API_Like_L={on_API_Like_L}
                            //
                            is_editing={is_editing}
                            handleEdit={handleEdit}
                            cancelEdit={cancelEdit}
                            //
                            ActionElm={ActionElm}
                            LikeShareCmtElm={LikeShareCmtElm}
                            CommentElm={CommentElm}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ZoomPostCommon;
