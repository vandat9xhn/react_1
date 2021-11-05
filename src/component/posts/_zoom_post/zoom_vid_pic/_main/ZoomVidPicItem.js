import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
import ContextPost from '../../../../../_context/post/ContextPost';
//
import { is_api_fake } from '../../../../../api/_ConstAPI';
//
import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
//
import { useMounted } from '../../../../../_hooks/useMounted';
import { useScreenFetching } from '../../../../../_hooks/UseScreenFetching';
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
//
import { openScreenConfirm } from '../../../../_screen/type/confirm/ScreenConfirm';
import { openScreenHistory } from '../../../../_screen/type/history/ScreenHistory';
import { openScreenUpdate } from '../../../../_screen/type/update/_main/ScreenUpdate';
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
    handle_API_Cmt_C,
    handle_API_Cmt_L,
    handle_API_Cmt_U,
    handle_API_MoreContentCmt_R,
    //
    handle_API_LikeCmt_L,
    handle_API_CmtReactedInfo_L,
    //
    handle_API_HistoryCmt_L,
    handle_API_MoreContentHisCmt_R,
} from '../../../../../_handle_api/post/HandleAPICmt';

import {
    handle_API_MoreContentSub_R,
    handle_API_Sub_C,
    handle_API_Sub_L,
    handle_API_Sub_U,
    //
    handle_API_LikeSub_L,
    handle_API_SubReactedInfo_L,
    //
    handle_API_HistorySub_L,
    handle_API_MoreContentHisSub_R,
} from '../../../../../_handle_api/post/HandleAPISub';

//
import ZoomPostCommon from '../../_common/_main/ZoomPostCommon';
import LikeShareCmt from '../../../common/like_share_cmt/_main/LikeShareCmtWs';
import CommentsWs from '../../../common/ws_comments/_main/CommentsWs';

import VidPicHistory from '../history/_main/VidPicHistory';
import ZoomVidPicAction from '../action/_main/ZoomVidPicAction';
import VidPicUpdate from '../update/VidPicUpdate';
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
    const { user: c_user, openScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        vid_pic_obj: {},
        vid_pic_id_arr: [],
        vid_pic_ix: -1,
        has_fetched: false,
        is_fetching: false,

        is_editing: false,
    });

    const {
        vid_pic_obj,
        vid_pic_id_arr,
        vid_pic_ix,

        has_fetched,
        is_fetching,
        is_editing,
    } = state_obj;

    const {
        is_del,

        id,
        vid_pic,
        user,
        updated_time,
        content_obj,

        reacted_count,
        user_reacted_ix,
        reacted_ix_arr,

        comments,
        count_comment,
        count_his,

        post_model,
    } = vid_pic_obj;

    const is_has_next = vid_pic_ix <= vid_pic_id_arr.length - 2;
    const is_has_prev = vid_pic_ix >= 1;

    //
    const ws = useRef(null);
    const ref_has_fetched = useRef(null);

    //
    const mounted = useMounted();
    const handleScreenFetching = useScreenFetching();

    //
    useEffect(() => {
        getData_API_First();
    }, []);

    //
    useEffect(() => {
        !is_api_fake &&
            post_model &&
            (ws.current = new WebSocket(
                'ws://127.0.0.1/ws/post_' + post_model
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
    }, [post_model]);

    // ---------- API

    //
    async function getData_API_VidPic({
        vid_pic_id = 0,
        new_vid_pic_ix = vid_pic_ix,
    }) {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching: true,
            is_editing: false,
        }));

        const data = await handleScreenFetching(() =>
            handle_API_PostVidPic_R(vid_pic_id)
        );

        mounted &&
            setStateObj((state_obj) => {
                return {
                    ...state_obj,
                    vid_pic_obj: data,
                    is_fetching: false,
                    vid_pic_ix: new_vid_pic_ix,
                };
            });

        return data.post_model;
    }

    //
    async function getData_API_First() {
        const first_id = GetIdSlug();
        const post_model = await getData_API_VidPic({ vid_pic_id: first_id });
        const data_id = await handle_API_PostVidPicID_L({
            post_model: post_model,
            vid_pic_id: first_id,
        });

        if (!mounted) {
            return;
        }

        let new_vid_pic_ix = -1;
        const new_vid_pic_id_arr = data_id.map((item, ix) => {
            if (item.id == first_id) {
                new_vid_pic_ix = ix;
            }
            return item.id;
        });

        setStateObj((state_obj) => ({
            ...state_obj,
            vid_pic_id_arr: new_vid_pic_id_arr,
            has_fetched: true,
            vid_pic_ix: new_vid_pic_ix,
        }));

        ref_has_fetched.current = true;
    }

    // --------

    //
    function handle_fake_ws_send(data) {
        console.log(data);
    }

    //
    function handleNextPrevVidPic(is_next = true) {
        const new_vid_pic_ix = vid_pic_ix + (is_next ? 1 : -1);

        if (new_vid_pic_ix < 0 || vid_pic_ix >= vid_pic_id_arr.length) {
            return;
        }

        history.replaceState(
            '',
            '',
            '/post/photos/' + vid_pic_id_arr[new_vid_pic_ix]
        );

        getData_API_VidPic({
            vid_pic_id: vid_pic_id_arr[new_vid_pic_ix],
            new_vid_pic_ix: new_vid_pic_ix,
        });
    }

    // -------

    //
    function seeMoreContent() {
        return handle_API_PostVidPicContent_R(id);
    }

    //
    function handleClickBtnCmt() {
        // console.log('cmt');
    }

    //
    function handleNextVidPic() {
        handleNextPrevVidPic(true);
    }

    //
    function handlePrevVidPic() {
        handleNextPrevVidPic(false);
    }

    // ------ ACTIONS

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
                  handle_API_PostVidPicContent_R(id)
              )
            : '';

        content_obj.content_more = content_more;

        setStateObj({
            ...state_obj,
            is_editing: true,
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

    // --------- HANDLE ACTIONS

    //
    async function handleEdit(new_content) {
        await handleScreenFetching(() =>
            handle_API_PostVidPic_U(id, new_content)
        );

        content_obj.content = new_content;
        content_obj.content_more = '';
        content_obj.has_more_content = false;

        setStateObj({
            ...state_obj,
            is_editing: false,
        });
    }

    //
    function cancelEdit() {
        setStateObj({
            ...state_obj,
            is_editing: false,
        });
    }

    //
    function handleReport() {
        console.log('report');
    }

    //
    function handleDelete() {
        const vid_pic_count = vid_pic_id_arr.length;

        if (vid_pic_count == 1) {
            if (show_screen_title) {
                closeScreenTitle();

                return;
            }

            history.back();

            return;
        }

        handleNextPrevVidPic(vid_pic_ix <= vid_pic_count - 2);
        vid_pic_id_arr.splice(vid_pic_ix, 1);
        handleDeleteVidPicPost(vid_pic_ix);
    }

    //
    if (!has_fetched || is_del) {
        return null;
    }

    //
    return (
        <div className="ZoomVidPicItem">
            <ContextPost
                ws_send={ws.current ? ws.current.send : handle_fake_ws_send}
                ws_type_post="vid_pic"
                ws_type_cmt="vid_pic_cmt"
                ws_type_sub="vid_pic_sub"
                is_main_vid_pic={true}
                //
                handle_API_MoreContentCmt_R={handle_API_MoreContentCmt_R}
                handle_API_Cmt_L={handle_API_Cmt_L}
                handle_API_Cmt_C={handle_API_Cmt_C}
                handle_API_Cmt_U={handle_API_Cmt_U}
                handle_API_LikeCmt_L={handle_API_LikeCmt_L}
                handle_API_CmtReactedInfo_L={handle_API_CmtReactedInfo_L}
                handle_API_HistoryCmt_L={handle_API_HistoryCmt_L}
                handle_API_MoreContentHisCmt_R={handle_API_MoreContentHisCmt_R}
                //
                handle_API_MoreContentSub_R={handle_API_MoreContentSub_R}
                handle_API_Sub_L={handle_API_Sub_L}
                handle_API_Sub_C={handle_API_Sub_C}
                handle_API_Sub_U={handle_API_Sub_U}
                handle_API_LikeSub_L={handle_API_LikeSub_L}
                handle_API_SubReactedInfo_L={handle_API_SubReactedInfo_L}
                handle_API_HistorySub_L={handle_API_HistorySub_L}
                handle_API_MoreContentHisSub_R={handle_API_MoreContentHisSub_R}
            >
                <ZoomPostCommon
                    // key={id}
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
                    reacted_count={reacted_count}
                    reacted_ix_arr={reacted_ix_arr}
                    on_API_Like_L={handle_API_PostVidPicLike_L}
                    //
                    is_editing={is_editing}
                    handleEdit={handleEdit}
                    cancelEdit={cancelEdit}
                    //
                    action_component={
                        <ZoomVidPicAction
                            is_poster={user.id == c_user.id}
                            openHistoryVidPic={openHistoryVidPic}
                            openUpdateVidPic={openUpdateVidPic}
                            openDeleteVidPic={openDeleteVidPic}
                            openReportVidPic={openReportVidPic}
                        />
                    }
                    like_share_cmt_component={
                        <LikeShareCmt
                            parent_id={id}
                            user_reacted_ix={user_reacted_ix}
                            enabled_like={true}
                            //
                            enabled_cmt={true}
                            count_comment={count_comment}
                            //
                            enabled_share={false}
                            count_share={0}
                            count_user_shared={0}
                            //
                            handleClickBtnCmt={handleClickBtnCmt}
                        />
                    }
                    comment_component={
                        <CommentsWs
                            is_poster={user.id == c_user.id}
                            parent_id={id}
                            comments={comments}
                            count_comment={count_comment}
                            initial_open_input={true}
                        />
                    }
                />
            </ContextPost>
        </div>
    );
}

export default ZoomVidPicItem;
