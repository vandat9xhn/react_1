import React, { useContext, useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
//
import { is_api_fake } from '../../../../../api/_ConstAPI';
import { context_api } from '../../../../../_context/ContextAPI';
//
import {
    handle_API_MoreContentHisVidPicCmt_R,
    handle_API_PostVidPicContent_R,
    handle_API_PostVidPicHistory_L,
    handle_API_PostVidPicID_L,
    handle_API_PostVidPicLike_L,
    handle_API_PostVidPic_R,
    handle_API_VidPicCmt_C,
    handle_API_VidPicCmt_L,
    handle_API_VidPicCmt_U,
    handle_API_VidPicHistoryCmt_L,
    handle_API_VidPicHistorySub_L,
    handle_API_VidPicLikeCmt_L,
    handle_API_VidPicLikeSub_L,
    handle_API_VidPicMoreContentCmt_R,
    handle_API_VidPicMoreContentSub_R,
    handle_API_VidPicSub_C,
    handle_API_VidPicSub_L,
    handle_API_VidPicSub_U,
    handle_API_VidPicMoreContentHisSub_R,
} from '../../../__handle_api/PostHandleAPI';
import ContextPost from '../../../__context_post/ContextPost';

import ZoomPostCommon from '../../_common/_main/ZoomPostCommon';
import LikeShareCmt from '../../../common/like_share_cmt/_main/LikeShareCmtWs';
import CommentsWs from '../../../common/ws_comments/_main/CommentsWs';
import ActionsVidPic from '../actions/ActionsVidPic';
//
import './ZoomVidPicItem.scss';
import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
import { useMounted } from '../../../../../_custom_hooks/useMounted';

//
ZoomVidPicItem.propTypes = {
    show_screen_title: PropTypes.bool,
    closeScreenTitle: PropTypes.func,
}

ZoomVidPicItem.defaultProps = {
    show_screen_title: false,
}

//
function ZoomVidPicItem(props) {
    // 
    const id = GetIdSlug()

    //
    const {
        openScreenConfirm,
        openScreenHistory,
        openScreenUpdate,
    } = useContext(context_api);

    //
    const { show_screen_title, closeScreenTitle } = props;

    //
    const [vid_pic_obj, setVidPicObj] = useState({ [id]: {} });
    const [vid_pic_id_arr, setVidPicIdArr] = useState([]);
    const [is_del_all, setIsDeleteAll] = useState(false);

    const {
        is_del,

        vid_pic,
        user,
        updated_time,
        content_obj,

        count_like,
        user_type_like,
        arr_unique_like,

        comments,
        count_comment,
    } = vid_pic_obj[id];
    
    //
    const ws = useRef(null);

    // 
    const mounted = useMounted()

    //
    useEffect(() => {
        getData_API_VidPic();
    }, [id]);

    //
    useEffect(() => {
        if (vid_pic_obj[id].post_model) {
            getData_API_VidPicId(vid_pic_obj[id].post_model);
        }
    }, [vid_pic_obj[id].post_model]);

    //
    useEffect(() => {
        !is_api_fake &&
            vid_pic_obj.post_model &&
            (ws.current = new WebSocket(
                'ws://127.0.0.1/ws/post_' + vid_pic_obj.post_model
            ));

        if (ws.current != null) {
            ws.current.onopen = () => {
                console.log('open');
            };

            ws.current.onmessage = (e) => {
                console.log(e);
            };
        }

        return () => {
            ws.current &&
                (ws.current.onclose = () => {
                    console.log('close');
                });
        };
    }, [vid_pic_obj[id].post_model]);

    //
    function handle_fake_ws_send(data) {
        console.log(data);
    }

    /* ---------------------GET API --------------------- */

    //
    async function getData_API_VidPic() {
        const data = await handle_API_PostVidPic_R(id);
        setVidPicObj({
            ...vid_pic_obj,
            [id]: data,
        });
    }

    //
    async function getData_API_VidPicId(post_id) {
        const data = await handle_API_PostVidPicID_L(post_id);
        const new_vid_pic_id_arr = data.map((item) => item.id);
        mounted && setVidPicIdArr(new_vid_pic_id_arr);
    }

    /* ------------------------------------------ */

    //
    function seeMoreContent() {
        return handle_API_PostVidPicContent_R(id);
    }

    //
    function handleClickBtnCmt() {
        console.log('cmt');
    }

    //
    function handleNextVidPic() {
        console.log('next');
    }

    //
    function handlePrevVidPic() {
        console.log('prev');
    }

    /* ------------------- ACTIONS ----------------------- */

    // open

    //
    function openHistoryVidPic() {
        openScreenHistory('Update', handle_API_PostVidPicHistory_L, () => (
            <div></div>
        ));
    }

    //
    function openUpdateVidPic() {
        openScreenUpdate('Update', () => <div></div>, {});
    }

    //
    function openDeleteVidPic() {
        openScreenConfirm(
            'Delete',
            'Do you really want to delete this',
            handleDelete
        );
    }

    //
    function openReportVidPic() {
        openScreenConfirm('Delete', 'Do you report this', handleReport);
    }

    // handle actions

    //
    function handleReport() {
        console.log('report');
    }

    //
    function handleDelete() {
        console.log('delete');
        const count_vid_pic = vid_pic_id_arr.length;

        if (count_vid_pic == 1) {
            if (show_screen_title) {
                closeScreenTitle();
            } else {
                setIsDeleteAll(true);
            }
        } else {
            const vid_pic_ix = vid_pic_id_arr.indexOf(id);
            const new_vid_pic_id = vid_pic_id_arr(
                vid_pic_ix == count_vid_pic ? vid_pic_ix - 1 : vid_pic_ix + 1
            );
            vid_pic_obj[id].is_del = true;
            history.replaceState('', '', '/post/photos/' + new_vid_pic_id);
            setVidPicIdArr(vid_pic_id_arr.filter((item) => item != id));
        }
    }

    //
    if (is_del_all) {
        return <Redirect to="/new-feed" />;
    }
    //
    return (
        <div className="ZoomVidPicItem">
            <ContextPost
                ws_send={ws.current ? ws.current.send : handle_fake_ws_send}
                ws_type_post="vid_pic"
                ws_type_cmt="vid_pic_cmt"
                ws_type_sub="vid_pic_sub"
                //
                handle_API_MoreContentCmt_R={handle_API_VidPicMoreContentCmt_R}
                handle_API_Cmt_L={handle_API_VidPicCmt_L}
                handle_API_Cmt_C={handle_API_VidPicCmt_C}
                handle_API_Cmt_U={handle_API_VidPicCmt_U}
                handle_API_LikeCmt_L={handle_API_VidPicLikeCmt_L}
                handle_API_HistoryCmt_L={handle_API_VidPicHistoryCmt_L}
                handle_API_MoreContentHisCmt_R={handle_API_MoreContentHisVidPicCmt_R}
                //
                handle_API_MoreContentSub_R={handle_API_VidPicMoreContentSub_R}
                handle_API_Sub_L={handle_API_VidPicSub_L}
                handle_API_Sub_C={handle_API_VidPicSub_C}
                handle_API_Sub_U={handle_API_VidPicSub_U}
                handle_API_LikeSub_L={handle_API_VidPicLikeSub_L}
                handle_API_HistorySub_L={handle_API_VidPicHistorySub_L}
                handle_API_MoreContentHisSub_R={handle_API_VidPicMoreContentHisSub_R}
            >
                {!is_del && (
                    <ZoomPostCommon
                        show_screen_title={show_screen_title}
                        closeScreenTitle={closeScreenTitle}
                        //
                        vid_pic={vid_pic}
                        handleNextVidPic={handleNextVidPic}
                        handlePrevVidPic={handlePrevVidPic}
                        user={user}
                        updated_time={updated_time}
                        //
                        content_obj={content_obj}
                        seeMoreContent={seeMoreContent}
                        //
                        count_like={count_like}
                        arr_unique_like={arr_unique_like}
                        on_API_Like_L={handle_API_PostVidPicLike_L}
                        //
                        action_component={
                            <ActionsVidPic
                                openHistoryVidPic={openHistoryVidPic}
                                openUpdateVidPic={openUpdateVidPic}
                                openDeleteVidPic={openDeleteVidPic}
                                openReportVidPic={openReportVidPic}
                            />
                        }
                        like_share_cmt_component={
                            <LikeShareCmt
                                parent_id={id}
                                user_type_like={user_type_like}
                                enabled_like={true}
                                enabled_cmt={true}
                                count_comment={count_comment}
                                enabled_share={false}
                                count_share={0}
                                count_user_shared={0}
                                handleClickBtnCmt={handleClickBtnCmt}
                            />
                        }
                        comment_component={
                            <CommentsWs
                                parent_id={id}
                                comments={comments}
                                count_comment={count_comment}
                                open_input={true}
                            />
                        }
                    />
                )}
            </ContextPost>
        </div>
    );
}

export default ZoomVidPicItem;
