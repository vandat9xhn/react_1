import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
//
import ScreenTitle from '../../../../_screen_fixed/title/ScreenTitle';
import ContentMore from '../../../../content_more/Content_more';
import PictureName from '../../../../picture_name/pic_name/PictureName';
import ListUniqueLike from '../../../../like/List_unique_like/_main/ListUniqueLike';
//
import ZoomPostCommonLeft from '../common_left/ZoomPostCommonLeft';
//
import './ZoomPostCommon.scss';

//
ZoomPostCommon.propTypes = {};

//
function ZoomPostCommon({
    show_screen_title,
    closeScreenTitle,

    vid_pic,
    is_has_next,
    is_has_prev,
    handleNextVidPic,
    handlePrevVidPic,

    user,
    updated_time,

    content_obj,
    seeMoreContent,

    count_like,
    arr_unique_like,
    on_API_Like_L,

    action_component,
    like_share_cmt_component,
    comment_component,
}) {
    //
    const { openScreenLike } = useContext(context_api);

    //
    useMakeBodyHidden();

    //
    function onOpenDetailLike(type_like) {
        openScreenLike(on_API_Like_L, type_like);
    }

    //
    return (
        <div className="ZoomPostCommon">
            <div className="ZoomPostCommon_contain">
                <div className="ZoomPostCommon_row">
                    <div className="ZoomPostCommon_left bg-loader position-rel">
                        {show_screen_title && (
                            <div className="ZoomPostCommon_title">
                                <ScreenTitle
                                    closeScreenTitle={closeScreenTitle}
                                    url={vid_pic}
                                />
                            </div>
                        )}

                        <ZoomPostCommonLeft
                            vid_pic={vid_pic}
                            is_has_next={is_has_next}
                            is_has_prev={is_has_prev}
                            handleNextVidPic={handleNextVidPic}
                            handlePrevVidPic={handlePrevVidPic}
                        />
                    </div>

                    <div className="ZoomPostCommon_right">
                        <div className="ZoomPostCommon_right-contain scroll-thin">
                            <div className="ZoomPostCommon_right-head">
                                <div>
                                    <PictureName
                                        user={user}
                                        content={new Date(
                                            updated_time
                                        ).toLocaleString()}
                                    />
                                </div>

                                <div className="ZoomPostCommon_actions">
                                    {action_component}
                                </div>

                                <div>
                                    <ContentMore
                                        content_obj={content_obj}
                                        seeMoreContent={seeMoreContent}
                                    />
                                </div>

                                <div>
                                    <ListUniqueLike
                                        count_like={count_like}
                                        arr_unique_like={arr_unique_like}
                                        on_API_Like_L={on_API_Like_L}
                                        onOpenDetailLike={onOpenDetailLike}
                                        // 
                                        use_transform_x={false}
                                    />
                                </div>

                                <div>{like_share_cmt_component}</div>
                            </div>

                            <div className="ZoomPostCommon_right-cmt">
                                {comment_component}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ZoomPostCommon;
