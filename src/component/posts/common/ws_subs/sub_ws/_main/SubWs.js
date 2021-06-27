import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
import { context_post } from '../../../../__context_post/ContextPost';
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
//
import SubWsFoot from '../foot/SubWsFoot';
import SubWsHead from '../head/SubWsHead';
import SubWsBody from '../body/SubWsBody';
import CmtSubUpdate from '../../../ws_actions/update_component/_main/CmtSubUpdate';
import CmtSubHistory from '../../../ws_actions/history_component/_main/CmtSubHistory';
//
import './SubWs.scss';

//
SubWs.propTypes = {};

//
function SubWs({ sub, is_commenter, focusInputSub }) {
    //
    const {
        ws_send,
        ws_type_sub,
        handle_API_MoreContentSub_R,
        handle_API_HistorySub_L,
        handle_API_Sub_U,
        handle_API_MoreContentHisSub_R,
    } = useContext(context_post);

    const {
        user: c_user,
        openScreenConfirm,
        openScreenHistory,
        openScreenUpdate,
        openScreenFetching,

        closeScreenUpdate,
        closeScreenFetching,
    } = useContext(context_api);

    //
    const {
        id,
        user,
        vid_pic,
        updated_time,
        content_obj,
        //
        likes,
        count_like,
        user_type_like,
    } = sub;

    //
    const forceUpdate = useForceUpdate();

    /* -------------------------------- */

    //
    function seeMoreContentSub() {
        return handle_API_MoreContentSub_R(id);
    }

    /* ---------------- WS ---------------- */

    //
    function changeTypeLike(new_type_like) {
        ws_send({
            id: id,
            type: ws_type_sub + '_like',
            new_type_like: new_type_like,
        });
    }

    /* --------------- OPEN SCREEN ACTIONS ---------------- */

    //
    function openHistorySub() {
        openScreenHistory('History', on_API_HistorySub_L, CmtSubHistory, {
            handle_API_MoreContent: handle_API_MoreContentHisSub_R,
        });
    }

    //
    function openUpdateSub() {
        openScreenUpdate('Update', CmtSubUpdate, {
            text: content_obj.content,
            vid_pic: vid_pic,
            handleUpdate: handleUpdate,
        });
    }

    //
    function openDeleteSub() {
        openScreenConfirm(
            'Delete',
            'Do you really want to delete this post?',
            handleDelete
        );
    }

    //
    function openReportSub() {
        openScreenConfirm(
            'Report',
            'Do you want to report this post?',
            handleReport
        );
    }

    /* --------------- ON HANDLE ACTIONS ---------------- */

    //
    function on_API_HistorySub_L(c_count) {
        return handle_API_HistorySub_L(id, c_count);
    }

    //
    async function handleUpdate(data) {
        openScreenFetching();
        //
        const { text, file, vid_pic_obj } = data;

        const data_update = {
            text: text,
        };
        if ((!file && !vid_pic_obj.url) || file) {
            data_update['file'] = file;
        }

        await handle_API_Sub_U(id, data_update);
        //
        content_obj.content = text;
        sub.vid_pic = vid_pic_obj.url;
        forceUpdate();
        closeScreenUpdate();
        closeScreenFetching();
    }
    //
    function handleDelete() {
        sub.is_del = true;
        forceUpdate();
    }
    //
    function handleReport() {
        //  Do something
        console.log('Report: ' + id);
    }

    //
    return (
        !sub.is_del && (
            <div className="SubWs">
                <div className="Sub_contain brs-5px">
                    <div className="Sub_head">
                        <SubWsHead
                            user={user}
                            is_user={user.id == c_user.id}
                            is_commenter={is_commenter}
                            //
                            content_obj={content_obj}
                            seeMoreContentSub={seeMoreContentSub}
                            //
                            openHistorySub={openHistorySub}
                            openUpdateSub={openUpdateSub}
                            openDeleteSub={openDeleteSub}
                            openReportSub={openReportSub}
                        />
                    </div>

                    <div className="Sub_body">
                        <SubWsBody vid_pic={vid_pic} />
                    </div>

                    <div className="Sub_foot">
                        <SubWsFoot
                            id={id}
                            likes={likes}
                            count_like={count_like}
                            user_type_like={user_type_like}
                            updated_time={updated_time}
                            //
                            focusInputSub={focusInputSub}
                            changeTypeLike={changeTypeLike}
                        />
                    </div>
                </div>
            </div>
        )
    );
}

export default SubWs;
