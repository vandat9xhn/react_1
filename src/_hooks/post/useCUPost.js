import { useContext, useEffect, useRef, useState } from 'react';
//
import { context_api } from '../../_context/ContextAPI';
//
import { UnitNumber } from '../../_some_function/UnitNumber';
//
import { openScreenConfirm } from '../../component/_screen/type/confirm/ScreenConfirm';
//
import { useMakeBodyHidden } from '../useMakeBodyHidden';

//
export function useCUPost({
    old_permission = 0,
    old_main_content = '',
    old_vid_pics = [] || [
        {
            id: 0,
            vid_pic: '',
            content: '',
            type: '',
            alt: '',
            user_tag_arr: [
                {
                    id: 0,
                    profile_model: 0,
                    first_name: '',
                    last_name: '',
                },
            ],
        },
    ],
    old_user_tag_arr = [] || [
        {
            id: 0,
            profile_model: 0,
            first_name: '',
            last_name: '',
            picture: '',
        },
    ],
    old_emoji_obj = {} || {
        id: 0,
        type: '',
        name: '',
        icon: '',
    },

    chosen_vid_pic = false,

    handleCUPost = () => {},
    other_state = {},
}) {
    //
    const { openScreenFloor, closeScreenFloor, detectScreenHasChange } =
        useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        permission: old_permission,
        main_content: old_main_content || '',
        c_vid_pics: JSON.parse(JSON.stringify(old_vid_pics)),
        user_tag_arr: old_user_tag_arr,
        emoji_obj: old_emoji_obj,

        created_arr: Array(old_vid_pics.length).fill(''),
        deleted_arr: [] || [-1],
        updated_arr: [] || [
            {
                id: -1,
                content: '',
            },
        ],

        cu_post_part: 'home' || 'fix_all' || 'detail' || 'tag' || 'emoji',
        detail_ix: -1,
        bg_ix: 0,

        is_loading: false,
        changed_detail: false,

        ...other_state,
    });

    const {
        permission,
        main_content,
        c_vid_pics,
        user_tag_arr,

        created_arr,
        deleted_arr,
        updated_arr,

        is_loading,
        cu_post_part,
        detail_ix,
        changed_detail,
    } = state_obj;

    //
    const ref_input_file = useRef(null);

    //
    useMakeBodyHidden();

    //
    useEffect(() => {
        if (chosen_vid_pic) {
            ref_input_file.current.click();
        }
    }, []);

    // ------

    //
    function checkHasChange() {
        if (
            old_main_content != main_content ||
            created_arr.some((item) => item != '') ||
            deleted_arr.length ||
            updated_arr.length ||
            changed_detail
        ) {
            return true;
        }

        return false;
    }

    //
    function getNewUpdatedArr(updated_id, content) {
        if (!updated_id) {
            return updated_arr;
        }

        const old_item = old_vid_pics.find((item) => item.id == updated_id);

        if (old_item.content == content) {
            return updated_arr.filter((item) => item.id != updated_id);
        }

        const new_updated_arr = [...updated_arr];

        const old_item_updated = new_updated_arr.find(
            (item) => item.id == updated_id
        );

        if (old_item_updated) {
            old_item_updated.content = content;
        } else {
            new_updated_arr.push({ id: updated_id, content: content });
        }

        return new_updated_arr;
    }

    // ---- CU POST PART

    //
    function openCUPostPart({ part = 'home', params_state = {} }) {
        setStateObj((state_obj) => ({
            ...state_obj,
            cu_post_part: part,
            ...params_state,
        }));
    }

    //
    function openHome() {
        openCUPostPart({
            part: 'home',
            params_state: {
                detail_ix: -1,
            },
        });
    }

    //
    function openFixAll() {
        if (c_vid_pics.length > 1) {
            openCUPostPart({
                part: 'fix_all',
            });
        } else if (c_vid_pics.length == 1) {
            openCUPostPart({
                part: 'detail',
                params_state: {
                    detail_ix: 0,
                },
            });
        }
    }

    //
    function openDetail(new_vid_pic_ix) {
        openCUPostPart({
            part: 'detail',
            params_state: {
                detail_ix: new_vid_pic_ix,
            },
        });
    }

    //
    function openTag() {
        openCUPostPart({
            part: 'tag',
        });
    }

    //
    function openEmoji() {
        openCUPostPart({
            part: 'emoji',
        });
    }

    //
    function openMoreInput() {
        openCUPostPart({
            part: 'more_input',
        });
    }

    // ------ CHANGE

    //
    function handleChoosePermission(new_permission) {
        setStateObj((state_obj) => ({
            ...state_obj,
            permission: new_permission,
        }));
    }

    //
    function handleChangeMainContent(value) {
        setStateObj((state_obj) => ({
            ...state_obj,
            main_content: value,
        }));
    }

    //
    function handleChangeTag({
        user_tag_arr: new_user_tag_arr,
        back_home = true,
    }) {
        setStateObj((state_obj) => ({
            ...state_obj,
            user_tag_arr: new_user_tag_arr.map((item) => {
                return {
                    ...item,
                    profile_model: item.id,
                };
            }),
            cu_post_part: back_home ? 'home' : cu_post_part,
        }));
    }

    //
    function changeEmoji(new_emoji_obj) {
        setStateObj((state_obj) => ({
            ...state_obj,
            emoji_obj:
                new_emoji_obj.id == state_obj.emoji_obj.id ? {} : new_emoji_obj,
            cu_post_part: 'home',
        }));
    }

    //
    function handleChooseBg(new_bg_ix) {
        setStateObj((state_obj) => ({
            ...state_obj,
            bg_ix: new_bg_ix,
        }));
    }

    // ------ FILE

    //
    function handleStartLoadFile() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_loading: true,
        }));
    }

    //
    function handleChooseFiles(data_files) {
        const { files, vid_pics } = data_files;

        const new_vid_pics = vid_pics.map((item, ix) => {
            item.id = 0;
            item.content = '';
            item.size = UnitNumber(files[ix].size, [' KB', ' MB', ' GB']);

            if (item.type.startsWith('image')) {
                item.alt = '';
                item.user_tag_arr = [];
            } else {
                item.thumbnail = '';
                item.srt_file = null;
            }

            return item;
        });

        setStateObj((state_obj) => ({
            ...state_obj,
            created_arr: [...created_arr, ...files],
            c_vid_pics: [...c_vid_pics, ...new_vid_pics],
            is_loading: false,
        }));
    }

    //
    function deleteAnItem(index) {
        const deleted_item = c_vid_pics[index];
        const new_c_vid_pics = c_vid_pics.filter((_, ix) => ix != index);

        deleted_item.id && deleted_arr.push(deleted_item.id);

        setStateObj((state_obj) => ({
            ...state_obj,
            c_vid_pics: new_c_vid_pics,
            created_arr: created_arr.filter((_, ix) => ix != index),
            cu_post_part: new_c_vid_pics.length > 0 ? cu_post_part : 'home',
        }));
    }

    //
    function handleDelAllVidPic() {
        setStateObj((state_obj) => ({
            ...state_obj,

            c_vid_pics: [],
            created_arr: [],
            deleted_arr: c_vid_pics
                .filter((item) => item.id > 0)
                .map((item) => item.id),
            updated_arr: [],

            is_loading: false,
            cu_post_part: 'home',
            detail_ix: -1,
        }));
    }

    //
    function openDelAllVidPic() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: (
                <div className="text-red font-400">
                    Do you want to delete all photos/videos?
                </div>
            ),
            handleConfirm: handleDelAllVidPic,
        });
    }

    // ----- EDIT

    //
    function handleChangeContentVidPic(content, index) {
        const new_c_vid_pics = [...c_vid_pics];
        new_c_vid_pics[index].content = content;

        const updated_id = c_vid_pics[index].id;
        const new_updated_arr = getNewUpdatedArr(updated_id, content);

        setStateObj({
            ...state_obj,
            c_vid_pics: new_c_vid_pics,
            updated_arr: new_updated_arr,
        });
    }

    // ----- DETAIL

    //
    function confirmDetailImg({ vid_pic_ix, img, caption, alt, user_tag_arr }) {
        setStateObj((state_obj) => {
            const new_c_vid_pics = [...state_obj.c_vid_pics];
            new_c_vid_pics[vid_pic_ix] = {
                ...new_c_vid_pics[vid_pic_ix],
                vid_pic: img,
                content: caption,
                alt: alt,
                user_tag_arr: user_tag_arr,
            };

            return {
                ...state_obj,
                c_vid_pics: new_c_vid_pics,
                cu_post_part: c_vid_pics.length == 1 ? 'home' : 'fix_all',
                detail_ix: -1,
                changed_detail: true,
            };
        });
    }

    //
    function confirmDetailVideo({ vid_pic_ix, caption, thumbnail, srt_file }) {
        setStateObj((state_obj) => {
            const new_c_vid_pics = [...state_obj.c_vid_pics];
            new_c_vid_pics[vid_pic_ix] = {
                ...new_c_vid_pics[vid_pic_ix],
                content: caption,
                srt_file: srt_file,
                thumbnail: thumbnail,
            };

            return {
                ...state_obj,
                c_vid_pics: new_c_vid_pics,
                cu_post_part: c_vid_pics.length == 1 ? 'home' : 'fix_all',
                detail_ix: -1,
                changed_detail: true,
            };
        });
    }

    //
    function handleDetailBack() {
        setStateObj({
            ...state_obj,
            cu_post_part: c_vid_pics.length == 1 ? 'home' : 'fix_all',
            detail_ix: -1,
        });
    }

    // -----

    //
    const has_change = checkHasChange();
    detectScreenHasChange(has_change);

    // -----

    //
    function onCUPost() {
        has_change && handleCUPost(state_obj);
    }

    //
    function handleClose() {
        if (has_change) {
            openScreenConfirm({
                openScreenFloor: openScreenFloor,
                title: 'Unsaved changes',
                notification: "Changes you've made will not be saved.",
                handleConfirm: closeScreenFloor,
            });
        } else {
            closeScreenFloor();
        }
    }

    return {
        state_obj,
        setStateObj,

        ref_input_file,
        has_change,

        openCUPostPart,
        openHome,
        openFixAll,
        openDetail,
        openTag,
        openEmoji,
        openMoreInput,

        handleChoosePermission,
        handleChangeMainContent,
        handleChangeTag,
        changeEmoji,

        handleStartLoadFile,
        handleChooseFiles,
        deleteAnItem,
        openDelAllVidPic,

        handleChangeContentVidPic,
        handleChooseBg,

        confirmDetailImg,
        confirmDetailVideo,
        handleDetailBack,

        onCUPost,
        handleClose,
    };
}
