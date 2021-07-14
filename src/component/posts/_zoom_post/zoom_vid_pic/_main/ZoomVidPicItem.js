import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { is_api_fake } from '../../../../../api/_ConstAPI';
//
import { useMounted } from '../../../../../_hooks/useMounted';
import { useScreenFetching } from '../../../../../_hooks/UseScreenFetching';
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
//
import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
import { getIndexNextPrevArr } from '../../../../../_some_function/getIndexNextPrevArr';
//
import { openScreenConfirm } from '../../../../_screen/type/confirm/ScreenConfirm';
import { openScreenHistory } from '../../../../_screen/type/history/ScreenHistory';
import { openScreenUpdate } from '../../../../_screen/type/update/_main/ScreenUpdate';
//
import ContextPost from '../../../../../_context/post/ContextPost';
//
import {
    handle_API_PostVidPicContent_R,
    handle_API_PostVidPicHistory_L,
    handle_API_PostVidPicID_L,
    handle_API_PostVidPicLike_L,
    handle_API_PostVidPic_R,
    handle_API_PostVidPic_U,
} from '../../../../../_handle_api/post/HandleAPIVidPic';

import {
    handle_API_VidPicMoreContentCmt_R,
    handle_API_VidPicCmt_L,
    handle_API_VidPicCmt_C,
    handle_API_VidPicCmt_U,
    handle_API_VidPicLikeCmt_L,
    handle_API_VidPicHistoryCmt_L,
    handle_API_MoreContentHisVidPicCmt_R,
    // 
    handle_API_VidPicMoreContentSub_R,
    handle_API_VidPicSub_L,
    handle_API_VidPicSub_C,
    handle_API_VidPicSub_U,
    handle_API_VidPicLikeSub_L,
    handle_API_VidPicHistorySub_L,
    handle_API_VidPicMoreContentHisSub_R,
} from '../../../../../_handle_api/post/PostHandleVidPicCmtSub';
//
import ZoomPostCommon from '../../_common/_main/ZoomPostCommon';
import LikeShareCmt from '../../../common/like_share_cmt/_main/LikeShareCmtWs';
import CommentsWs from '../../../common/ws_comments/_main/CommentsWs';

import VidPicHistory from '../history/_main/VidPicHistory';
import ActionsVidPic from '../actions/_main/ActionsVidPic';
import VidPicUpdate from '../actions/update/VidPicUpdate';
//
import './ZoomVidPicItem.scss';

//
ZoomVidPicItem.propTypes = {
    show_screen_title: PropTypes.bool,
    closeScreenTitle: PropTypes.func,
    handleDeleteVidPicPost: PropTypes.func,
};

ZoomVidPicItem.defaultProps = {
    show_screen_title: false,
    handleDeleteVidPicPost: () => {},
};

//
function ZoomVidPicItem({
    show_screen_title,
    closeScreenTitle,
    handleDeleteVidPicPost,
}) {
    //
    const {
        user: c_user,
        openScreenFloor,
        closeScreenFloor,
    } = useContext(context_api);

    //
    const use_history = useHistory();

    //
    const [vid_pic_state, setVidPicState] = useState({
        vid_pic_obj: { 0: {} },
        c_id: 0,
        vid_pic_id_arr: [],
        has_fetched: false,
        is_fetching: false,
    });

    const { vid_pic_obj, c_id, vid_pic_id_arr, has_fetched, is_fetching } =
        vid_pic_state;

    const c_index = vid_pic_id_arr.indexOf(c_id);

    // const is_has_next =
    //     has_fetched && c_index != -1
    //         ? c_index < vid_pic_id_arr.length - 1
    //         : false;

    // const is_has_prev = has_fetched ? c_index > 0 : false;

    const is_has_next = true;
    const is_has_prev = true;

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

        count_his,
    } = vid_pic_obj[c_id];

    //
    const ws = useRef(null);

    //
    const mounted = useMounted();
    const forceUpdate = useForceUpdate();
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        getData_API_VidPic(GetIdSlug());
    }, []);

    //
    useEffect(() => {
        if (vid_pic_obj[c_id].post_model) {
            getData_API_VidPicId(vid_pic_obj[c_id].post_model);
        }
    }, [vid_pic_obj[c_id].post_model]);

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
    }, [vid_pic_obj[c_id].post_model]);

    //
    function handle_fake_ws_send(data) {
        console.log(data);
    }

    /* ------------- COMMON -------------- */

    //
    function getNewVidPicId(is_next = true) {
        const count = vid_pic_id_arr.length;
        const new_index = getIndexNextPrevArr(c_index, count, is_next);

        return vid_pic_id_arr[new_index];
    }

    //
    function handleChangeId(new_vid_pic_id) {
        setVidPicState((vid_pic_state) => ({
            ...vid_pic_state,
            is_fetching: true,
        }));

        history.replaceState('', '', '/post/photos/' + new_vid_pic_id);

        if (vid_pic_obj[new_vid_pic_id]) {
            // setTimeout(() => {
            setVidPicState((vid_pic_state) => ({
                ...vid_pic_state,
                c_id: new_vid_pic_id,
                is_fetching: false,
            }));
            // }, 1);

            return;
        }

        getData_API_VidPic(new_vid_pic_id);
    }

    //
    function handleNextPrevVidPic(is_next = true) {
        const new_vid_pic_id = getNewVidPicId(is_next);
        handleChangeId(new_vid_pic_id);
    }

    /* ------------- GET API -------------- */

    //
    async function getData_API_VidPic(vid_pic_id = 0) {
        const data = await handleScreenFetching(() =>
            handle_API_PostVidPic_R(vid_pic_id)
        );

        mounted &&
            setVidPicState((vid_pic_state) => ({
                ...vid_pic_state,
                vid_pic_obj: vid_pic_state.has_fetched
                    ? {
                          ...vid_pic_state.vid_pic_obj,
                          [vid_pic_id]: data,
                      }
                    : { [vid_pic_id]: data },
                c_id: vid_pic_id,
                has_fetched: true,
                is_fetching: false,
            }));
    }

    //
    async function getData_API_VidPicId(post_id) {
        const data = await handle_API_PostVidPicID_L(post_id);

        const new_vid_pic_id_arr = data.map((item) => item.vid_pic_id);

        mounted &&
            setVidPicState((vid_pic_state) => ({
                ...vid_pic_state,
                vid_pic_id_arr: new_vid_pic_id_arr,
            }));
    }

    /* ------------------------- */

    //
    function seeMoreContent() {
        return handle_API_PostVidPicContent_R(c_id);
    }

    //
    function handleClickBtnCmt() {
        console.log('cmt');
    }

    //
    function handleNextVidPic() {
        handleNextPrevVidPic(true);
    }

    //
    function handlePrevVidPic() {
        handleNextPrevVidPic(false);
    }

    /* ------------- ACTIONS -------------- */

    //
    function openHistoryVidPic() {
        openScreenHistory({
            openScreenFloor: openScreenFloor,

            title: 'History',
            handle_API_History_L: handle_API_PostVidPicHistory_L,
            HisComponent: VidPicHistory,
        });
    }

    //
    async function openUpdateVidPic() {
        const content_more = content_obj.has_more_content
            ? await handleScreenFetching(() =>
                  handle_API_PostVidPicContent_R(c_id)
              )
            : '';

        openScreenUpdate({
            openScreenFloor: openScreenFloor,

            title: 'Update',
            UpdateComponent: VidPicUpdate,

            content: content_obj.content + content_more,
            handleUpdate: handleUpdate,
        });
    }

    //
    function openDeleteVidPic() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: 'Do you really want to delete this',
            handleConfirm: handleDelete,
        });
    }

    //
    function openReportVidPic() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Report',
            notification: 'Do you report this',
            handleConfirm: handleReport,
        });
    }

    /*------------- HANDLE ACTIONS -------------*/

    //
    async function handleUpdate(new_content) {
        await handleScreenFetching(() =>
            handle_API_PostVidPic_U(c_id, new_content)
        );

        content_obj.content = new_content;
        content_obj.content_more = '';
        content_obj.has_more_content = false;

        forceUpdate();

        closeScreenFloor();
    }

    //
    function handleReport() {
        console.log('report');
    }

    //
    function handleDelete() {
        const count_vid_pic = vid_pic_id_arr.length;

        if (count_vid_pic == 1) {
            if (show_screen_title) {
                closeScreenTitle();

                return;
            }

            use_history.push('/new-feed');

            return;
        }

        // vid_pic_obj[c_id].is_del = true;
        const new_vid_pic_id = getNewVidPicId();

        vid_pic_id_arr.splice(c_index, 1);
        handleDeleteVidPicPost(c_index);
        handleChangeId(new_vid_pic_id);
    }

    //
    if (!has_fetched || is_del) {
        return <div></div>;
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
                handle_API_MoreContentHisCmt_R={
                    handle_API_MoreContentHisVidPicCmt_R
                }
                //
                handle_API_MoreContentSub_R={handle_API_VidPicMoreContentSub_R}
                handle_API_Sub_L={handle_API_VidPicSub_L}
                handle_API_Sub_C={handle_API_VidPicSub_C}
                handle_API_Sub_U={handle_API_VidPicSub_U}
                handle_API_LikeSub_L={handle_API_VidPicLikeSub_L}
                handle_API_HistorySub_L={handle_API_VidPicHistorySub_L}
                handle_API_MoreContentHisSub_R={
                    handle_API_VidPicMoreContentHisSub_R
                }
            >
                <ZoomPostCommon
                    show_screen_title={show_screen_title}
                    closeScreenTitle={closeScreenTitle}
                    //
                    vid_pic={vid_pic}
                    is_has_next={is_has_next}
                    is_has_prev={is_has_prev}
                    handleNextVidPic={handleNextVidPic}
                    handlePrevVidPic={handlePrevVidPic}
                    //
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
                    is_fetching={is_fetching}
                    //
                    action_component={
                        <ActionsVidPic
                            is_user={user.id == c_user.id}
                            count_his={count_his}
                            openHistoryVidPic={openHistoryVidPic}
                            openUpdateVidPic={openUpdateVidPic}
                            openDeleteVidPic={openDeleteVidPic}
                            openReportVidPic={openReportVidPic}
                        />
                    }
                    like_share_cmt_component={
                        <LikeShareCmt
                            parent_id={c_id}
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
                            parent_id={c_id}
                            comments={comments}
                            count_comment={count_comment}
                            open_input={true}
                        />
                    }
                />
            </ContextPost>
        </div>
    );
}

export default ZoomVidPicItem;
