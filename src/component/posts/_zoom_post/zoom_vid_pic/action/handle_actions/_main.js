import { openScreenHistory } from '../../../../../_screen/type/history/ScreenHistory';
import { openScreenConfirm } from '../../../../../_screen/type/confirm/ScreenConfirm';
//
import {
    handle_API_PostVidPicContent_R,
    handle_API_PostVidPicHistory_L,
    handle_API_PostVidPic_U,
} from '../../../../../../_handle_api/post/HandleAPIVidPic';
//
import VidPicHistory from '../../history/_main/VidPicHistory';

// ------- OPEN
export const openZoomVidPicActionObj = {
    //
    history: ({ openScreenFloor }) => {
        openScreenHistory({
            openScreenFloor: openScreenFloor,
            title: 'History',
            handle_API_History_L: handle_API_PostVidPicHistory_L,
            HisComponent: VidPicHistory,
        });
    },

    //
    editAlt: async ({ id, content_obj, setStateObj, handleScreenFetching }) => {
        const content_more = content_obj.has_more_content
            ? await handleScreenFetching(() =>
                  handle_API_PostVidPicContent_R(id)
              )
            : '';

        content_obj.content_more = content_more;

        setStateObj((state_obj) => ({
            ...state_obj,
            is_editing: true,
        }));
    },

    //
    delete: ({ openScreenFloor, handleConfirm }) => {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: 'Do you really want to delete this',
            handleConfirm: handleConfirm,
        });
    },

    //
    report: ({ openScreenFloor, handleConfirm }) => {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Report',
            notification: 'Do you report this',
            handleConfirm: handleConfirm,
        });
    },
};

// ------- HANDLE
export const handleZoomVidPicActionObj = {
    //
    editAlt: async ({ id, new_content, setStateObj, handleScreenFetching }) => {
        await handleScreenFetching(() =>
            handle_API_PostVidPic_U(id, new_content)
        );

        setStateObj((state_obj) => {
            const new_vid_pic_obj = state_obj.vid_pic_obj;
            const { content_obj } = new_vid_pic_obj;

            content_obj.content = new_content;
            content_obj.content_more = '';
            content_obj.has_more_content = false;

            return {
                ...state_obj,
                vid_pic_obj: new_vid_pic_obj,
                is_editing: false,
            };
        });
    },

    //
    cancelEditAlt: ({ setStateObj }) => {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                is_editing: false,
            };
        });
    },

    //
    report: () => {
        console.log('report');
    },

    //
    delete: ({
        show_screen_title = false,
        closeScreenTitle = () => {},
        handleNextPrevVidPic = () => {},
        handleDeleteVidPicPost = () => {},
    }) => {
        const { vid_pic_id_arr, vid_pic_ix } = state_obj;
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
    },
};
