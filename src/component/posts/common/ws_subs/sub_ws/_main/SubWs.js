import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
import { context_post } from '../../../../__context_post/ContextPost';
//
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
import { useScreenFetching } from '../../../../../../_hooks/UseScreenFetching';
//
import { openScreenConfirm } from '../../../../../_screen/type/confirm/ScreenConfirm';
import { openScreenHistory } from '../../../../../_screen/type/history/ScreenHistory';
import { openScreenUpdate } from '../../../../../_screen/type/update/_main/ScreenUpdate';
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
        openScreenFloor,

        closeScreenUpdate,

        hasChangeScreenUpdate,
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
    const handleScreenFetching = useScreenFetching();

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
        openScreenHistory({
            openScreenFloor: openScreenFloor,

            title: 'History',
            handle_API_History_L: on_API_HistorySub_L,
            HisComponent: CmtSubHistory,
        });
    }

    //
    async function openUpdateSub() {
        const content = content_obj.has_more_content
            ? await handleScreenFetching(() => handle_API_MoreContentSub_R(id))
            : content_obj.content;

        openScreenUpdate({
            openScreenFloor: openScreenFloor,

            title: 'Update',
            UpdateComponent: CmtSubUpdate,

            text: content,
            vid_pic: vid_pic,
            handleUpdate: handleUpdate,
            handleHasChange: hasChangeScreenUpdate,
        });
    }

    //
    function openDeleteSub() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: 'Do you really want to delete this comment?',
            handleConfirm: handleDelete,
        });
    }

    //
    function openReportSub() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Report',
            notification: 'Do you want to report this comment?',
            handleConfirm: handleReport,
        });
    }

    /* --------------- ON HANDLE ACTIONS ---------------- */

    //
    function on_API_HistorySub_L(c_count) {
        return handle_API_HistorySub_L(id, c_count);
    }

    //
    async function handleUpdate(data) {
        await handleScreenFetching(() => handle_API_Sub_U(id, data_update));

        const { new_text, file, url, type } = data;

        const data_update = {
            text: new_text,
        };

        if ((!file && !url) || file) {
            data_update['file'] = file;
        }

        content_obj.content = new_text;
        sub.vid_pic = url;

        forceUpdate();
        closeScreenUpdate(true);
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
