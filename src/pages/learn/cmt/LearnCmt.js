import React from 'react';
import PropTypes from 'prop-types';
//
import PostCmt from '../../../component/posts/_post/cmt/_main/PostCmt';
import CommentPost from '../../../component/input_img_vid_preview/comment_post/CommentPost';
//
import './LearnCmt.scss';

//
import {
    getRandomImg,
    getRandomImgOrNull,
} from '../../../_default/_common/default_image';
import { getRandomContentObj } from '../../../_default/_common/default_content';

//
const cmt_arr = [
    // {
    //     id: 1,
    //     sub_arr: [
    //         { id: 1, sub_2_arr: [] },
    //         { id: 2, sub_2_arr: [{ id: 1 }] },
    //     ],
    // },
    {
        id: 2,
        sub_arr: [{ id: 11, sub_2_arr: [{ id: 11 }] }],
    },
];

//
LearnCmt.propTypes = {};

//
function LearnCmt(props) {
    //
    function seeMoreContent() {}
    function handleClickVidPic() {}
    function startReply() {}
    function sendAward() {}

    function changeTypeLike() {}
    function on_API_LikeAll_L() {}
    function onOpenDetailLikeAll() {}

    function openHistoryCmt() {}
    function openUpdateCmt() {}
    function openDeleteCmt() {}
    function openReportCmt() {}

    function handleSendCmt() {}

    //
    return (
        <div className="LearnCmt padding-y-10px bg-primary brs-8px">
            <ul className="list-none">
                {cmt_arr.map((cmt_obj, ix) => (
                    <li key={cmt_obj.id}>
                        <div className="cmt-contain">
                            <div className="cmt-connect-straight cmt-connect-straight-1"></div>

                            <PostCmt
                                is_user={true}
                                is_commenter={true}
                                //
                                user_id={1}
                                user_name={'Ngoc My'}
                                user_pic={getRandomImg()}
                                user_pic_size={32}
                                //
                                content_obj={getRandomContentObj().content_obj}
                                vid_pic={getRandomImgOrNull()}
                                updated_time={new Date().getTime()}
                                class_scroll_elm={''}
                                //
                                reacted_ix_arr={[1]}
                                reacted_count={5}
                                user_reacted_ix={1}
                                //
                                seeMoreContent={seeMoreContent}
                                handleClickVidPic={handleClickVidPic}
                                startReply={startReply}
                                sendAward={sendAward}
                                //
                                changeTypeLike={changeTypeLike}
                                on_API_LikeAll_L={on_API_LikeAll_L}
                                onOpenDetailLikeAll={onOpenDetailLikeAll}
                                //
                                openHistoryCmt={openHistoryCmt}
                                openUpdateCmt={openUpdateCmt}
                                openDeleteCmt={openDeleteCmt}
                                openReportCmt={openReportCmt}
                            />
                        </div>

                        <div>
                            <ul className="list-none">
                                {cmt_obj.sub_arr.map((sub_obj, ix) => (
                                    <li key={sub_obj.id}>
                                        <div className="sub-contain">
                                            <div className="cmt-connect-straight cmt-connect-straight-1-child"></div>
                                            <div className="cmt-connect-curved cmt-connect-curved-1"></div>
                                            <div className="cmt-connect-straight cmt-connect-straight-2"></div>

                                            <PostCmt
                                                is_user={true}
                                                is_commenter={true}
                                                //
                                                user_id={1}
                                                user_name={'Nguyen Nguyen'}
                                                user_pic={getRandomImg()}
                                                user_pic_size={24}
                                                //
                                                content_obj={
                                                    getRandomContentObj()
                                                        .content_obj
                                                }
                                                vid_pic={getRandomImgOrNull()}
                                                updated_time={new Date().getTime()}
                                                class_scroll_elm={''}
                                                //
                                                reacted_ix_arr={[0, 2]}
                                                reacted_count={2}
                                                user_reacted_ix={-1}
                                                //
                                                seeMoreContent={seeMoreContent}
                                                handleClickVidPic={
                                                    handleClickVidPic
                                                }
                                                startReply={startReply}
                                                sendAward={sendAward}
                                                //
                                                changeTypeLike={changeTypeLike}
                                                on_API_LikeAll_L={
                                                    on_API_LikeAll_L
                                                }
                                                onOpenDetailLikeAll={
                                                    onOpenDetailLikeAll
                                                }
                                                //
                                                openHistoryCmt={openHistoryCmt}
                                                openUpdateCmt={openUpdateCmt}
                                                openDeleteCmt={openDeleteCmt}
                                                openReportCmt={openReportCmt}
                                            />
                                        </div>

                                        <ul className="list-none">
                                            {sub_obj.sub_2_arr.map(
                                                (sub_2_obj, sub_2_ix) => (
                                                    <li key={sub_2_obj.id}>
                                                        <div className="sub-2-contain">
                                                            <div className="cmt-connect-straight cmt-connect-straight-1-child"></div>
                                                            <div className="cmt-connect-curved cmt-connect-curved-2"></div>
                                                            <div className="cmt-connect-straight cmt-connect-straight-2-child"></div>

                                                            <PostCmt
                                                                is_user={true}
                                                                is_commenter={
                                                                    true
                                                                }
                                                                //
                                                                user_id={1}
                                                                user_name={
                                                                    'Nguyen Nguyen'
                                                                }
                                                                user_pic={getRandomImg()}
                                                                user_pic_size={
                                                                    24
                                                                }
                                                                //
                                                                content_obj={
                                                                    getRandomContentObj()
                                                                        .content_obj
                                                                }
                                                                vid_pic={getRandomImgOrNull()}
                                                                updated_time={new Date().getTime()}
                                                                class_scroll_elm={
                                                                    ''
                                                                }
                                                                //
                                                                reacted_ix_arr={[
                                                                    0, 2,
                                                                ]}
                                                                reacted_count={
                                                                    2
                                                                }
                                                                user_reacted_ix={
                                                                    -1
                                                                }
                                                                //
                                                                seeMoreContent={
                                                                    seeMoreContent
                                                                }
                                                                handleClickVidPic={
                                                                    handleClickVidPic
                                                                }
                                                                startReply={
                                                                    startReply
                                                                }
                                                                sendAward={
                                                                    sendAward
                                                                }
                                                                //
                                                                changeTypeLike={
                                                                    changeTypeLike
                                                                }
                                                                on_API_LikeAll_L={
                                                                    on_API_LikeAll_L
                                                                }
                                                                onOpenDetailLikeAll={
                                                                    onOpenDetailLikeAll
                                                                }
                                                                //
                                                                openHistoryCmt={
                                                                    openHistoryCmt
                                                                }
                                                                openUpdateCmt={
                                                                    openUpdateCmt
                                                                }
                                                                openDeleteCmt={
                                                                    openDeleteCmt
                                                                }
                                                                openReportCmt={
                                                                    openReportCmt
                                                                }
                                                            />
                                                        </div>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </li>
                                ))}
                            </ul>

                            <div className="sub-2-contain">
                                <div className="cmt-connect-straight cmt-connect-straight-1-child"></div>
                                <div className="cmt-connect-curved cmt-connect-curved-2"></div>

                                <div className="sub-input">
                                    <CommentPost
                                        is_sub={true}
                                        placeholder={
                                            'Write a public comment...'
                                        }
                                        handleSend={handleSendCmt}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="sub-contain">
                            <div className="cmt-connect-curved cmt-connect-curved-1"></div>

                            <div className="sub-input">
                                <CommentPost
                                    is_sub={true}
                                    placeholder={'Write a public comment...'}
                                    handleSend={handleSendCmt}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <div>
                <div className="padding-top-5px padding-x-16px">
                    <CommentPost
                        placeholder={'Write a public comment...'}
                        handleSend={handleSendCmt}
                    />
                </div>
            </div>
        </div>
    );
}

export default LearnCmt;
