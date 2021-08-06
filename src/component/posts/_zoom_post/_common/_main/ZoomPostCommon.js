import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
//
import ScreenTitle from '../../../../_screen/components/frame/has_title/title/ScreenTitle';
//
import ZoomPostCommonLeft from '../common_left/ZoomPostCommonLeft';
import ZoomPostCommonRight from '../right/ZoomPostCommonRight';
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

    is_fetching,
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
                show_screen_title ? '' : 'ZoomPostCommon_fixed'
            }`}
        >
            <div className="ZoomPostCommon_contain">
                <div className="ZoomPostCommon_row display-flex h-100per">
                    <div className="ZoomPostCommon_left bg-loader position-rel">
                        <div className="ZoomPostCommon_title">
                            <ScreenTitle
                                show_screen_title={show_screen_title}
                                closeScreenTitle={closeScreenTitle}
                                url={vid_pic}
                            />
                        </div>

                        {!is_fetching ? (
                            <ZoomPostCommonLeft
                                vid_pic={vid_pic}
                                is_has_next={is_has_next}
                                is_has_prev={is_has_prev}
                                handleNextVidPic={handleNextVidPic}
                                handlePrevVidPic={handlePrevVidPic}
                            />
                        ) : (
                            <div></div>
                        )}
                    </div>

                    {!is_fetching ? (
                        <div className="ZoomPostCommon_right">
                            <ZoomPostCommonRight
                                user={user}
                                updated_time={updated_time}
                                content_obj={content_obj}
                                seeMoreContent={seeMoreContent}
                                count_like={count_like}
                                arr_unique_like={arr_unique_like}
                                on_API_Like_L={on_API_Like_L}
                                action_component={action_component}
                                like_share_cmt_component={
                                    like_share_cmt_component
                                }
                                comment_component={comment_component}
                            />
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ZoomPostCommon;
