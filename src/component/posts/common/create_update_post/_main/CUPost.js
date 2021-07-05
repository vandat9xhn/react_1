import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { loadFile } from '../../../../../_some_function/loadFile';
//
import CUPostHome from '../home/_main/CUPostHome';
import FixAll from '../fix_all/_main/FixAll';
//
import './CUPost.scss';
import './CUPostRes.scss';

//
CUPost.propTypes = {
    main_content: PropTypes.string,
    vid_pics: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            vid_pic: PropTypes.string,
            content: PropTypes.string,
            type: PropTypes.string,
        })
    ),

    title_action: PropTypes.string,
    detectHasChange: PropTypes.func,
    handleCUPost: PropTypes.func,
};

CUPost.defaultProps = {
    main_content: '',
    vid_pics: [
        // {
        //     id: 0,
        //     vid_pic: '',
        //     content: '',
        //     type: '',
        // },
    ],

    detectHasChange: () => {},
    title_action: 'Post',
};

//
function CUPost({
    main_content: old_main_content,
    vid_pics: old_vid_pics,

    title_action,
    detectHasChange,
    handleCUPost,
}) {
    //
    const [update_create_state, setUpdateCreateState] = useState({
        main_content: old_main_content || '',
        c_vid_pics: JSON.parse(JSON.stringify(old_vid_pics)),

        created_arr: Array(old_vid_pics.length).fill(''),
        deleted_arr: [],
        updated_arr: [],

        is_loading: false,
        open_fix_all: false,
    });

    const {
        main_content,
        c_vid_pics,

        created_arr,
        deleted_arr,
        updated_arr,

        is_loading,
        open_fix_all,
    } = update_create_state;

    /* ----------------- COMMON -------------- */

    //
    function checkHasChange() {
        if (old_main_content != main_content) {
            return true;
        }

        if (created_arr.some((item) => item != '')) {
            return true;
        }

        if (deleted_arr.length) {
            return true;
        }

        if (updated_arr.length) {
            return true;
        }

        return false;
    }

    /* ----------------- MAIN CONTENT -------------- */

    //
    function handleChangeMainContent(event) {
        const new_main_content = event.target.value;

        setUpdateCreateState((update_create_state) => ({
            ...update_create_state,
            main_content: new_main_content,
        }));
    }

    /* ---------------- VID_PIC --------------- */

    //
    async function handleChooseFiles(event) {
        const new_files = event.target.files;

        if (new_files.length) {
            setUpdateCreateState((update_create_state) => ({
                ...update_create_state,
                is_loading: true,
            }));

            const { files, vid_pics } = await loadFile(new_files);

            const new_vid_pics = vid_pics.map((item) => {
                item.content = '';
                item.id = 0;

                return item;
            });

            setUpdateCreateState((update_create_state) => ({
                ...update_create_state,
                created_arr: [...created_arr, ...files],
                c_vid_pics: [...c_vid_pics, ...new_vid_pics],
                is_loading: false,
            }));
        }
    }

    //
    function deleteAnItem(index) {
        const deleted_item = c_vid_pics[index];
        const new_c_vid_pics = c_vid_pics.filter((_, ix) => ix != index);

        deleted_item.id && deleted_arr.push(deleted_item.id);

        setUpdateCreateState((update_create_state) => ({
            ...update_create_state,
            c_vid_pics: new_c_vid_pics,
            created_arr: created_arr.filter((_, ix) => ix != index),
            open_fix_all: !!new_c_vid_pics.length ? open_fix_all : false,
        }));
    }

    /* ------------- FIX DETAIL --------------- */

    //
    function showFixAll() {
        c_vid_pics.length &&
            setUpdateCreateState((update_create_state) => ({
                ...update_create_state,
                open_fix_all: true,
            }));
    }

    //
    function closeFixAll() {
        setUpdateCreateState((update_create_state) => ({
            ...update_create_state,
            open_fix_all: false,
        }));
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

    function handleChangeContentVidPic(content, index) {
        const new_c_vid_pics = [...c_vid_pics];
        new_c_vid_pics[index].content = content;

        const updated_id = c_vid_pics[index].id;
        const new_updated_arr = getNewUpdatedArr(updated_id, content);

        setUpdateCreateState({
            ...update_create_state,
            c_vid_pics: new_c_vid_pics,
            updated_arr: new_updated_arr,
        });
    }

    //
    const has_change = checkHasChange();
    detectHasChange(has_change);

    //
    function onCUPost() {
        has_change && handleCUPost(update_create_state);
    }

    //
    return (
        <div className="CUPost bg-primary">
            <div
                className={`CUPost_row display-flex ${
                    open_fix_all ? 'CUPost_row-fix' : ''
                }`}
            >
                <div>
                    <div className={open_fix_all ? 'display-none' : ''}>
                        <CUPostHome
                            main_content={main_content}
                            vid_pics={c_vid_pics}
                            title_action={title_action}
                            //
                            has_change={has_change}
                            is_loading={is_loading}
                            //
                            showFixAll={showFixAll}
                            handleChangeMainContent={handleChangeMainContent}
                            // deleteAnItem={deleteAnItem}
                            handleChooseFiles={handleChooseFiles}
                            handleCUPost={onCUPost}
                        />
                    </div>
                </div>

                <div>
                    <div className={open_fix_all ? '' : 'display-none'}>
                        <FixAll
                            open_fix_all={open_fix_all}
                            vid_pics={c_vid_pics}
                            //
                            closeFixAll={closeFixAll}
                            deleteAnItem={deleteAnItem}
                            handleChangeContentVidPic={handleChangeContentVidPic}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CUPost;
