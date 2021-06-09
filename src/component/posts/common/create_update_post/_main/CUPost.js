import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { loadFile } from '../../../../../_some_function/loadFile';
//
import './CUPost.scss';
//
import CUPostHome from '../home/_main/CUPostHome';
import FixAll from '../fix_all/_main/FixAll';
//
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
    handleCUPost: PropTypes.func,
};

CUPost.defaultProps = {
    main_content: '',
    vid_pics: [
        {
            id: 0,
            vid_pic: '',
            content: '',
            type: '',
        },
    ],

    title_action: 'Post',
};

//
function CUPost({
    main_content: old_main_content,
    vid_pics: old_vid_pics,

    title_action,
    handleCUPost,
}) {
    //
    const [update_create_obj, setUpdateCreateObj] = useState({
        main_content: old_main_content || '',
        vid_pics: [...old_vid_pics] || [],
        files: old_vid_pics ? Array(old_vid_pics.length).fill({}) : [],

        deleted_ids: [],
        updated_ids: [],
        updated_contents: [],

        has_text: false,
        has_file: false,
        is_loading: false,
        open_fix_all: false,
    });

    const {
        main_content,
        vid_pics,
        files,

        deleted_ids,
        updated_ids,
        updated_contents,

        has_text,
        has_file,
        is_loading,
        open_fix_all,
    } = update_create_obj;

    /* ---------------------------- MAIN CONTENT ---------------------------------- */

    // 
    function handleChangeMainContent(event) {
        const new_main_content = event.target.value;

        setUpdateCreateObj({
            ...update_create_obj,
            main_content: new_main_content,
            has_file: vid_pics.length > 0,
            has_text: !!new_main_content.trim(),
        });
    }

    /* ---------------------------- VID_PIC ---------------------------------- */

    // 
    async function handleChooseFiles(event) {
        const new_files = event.target.files;

        if (new_files.length) {
            setUpdateCreateObj({
                ...update_create_obj,
                is_loading: true,
            });

            const { files: load_files, vid_pics: load_vid_pics } =
                await loadFile(new_files);

            const new_vid_pics = load_vid_pics.map((item) => {
                item.content = '';
                item.id = 0;

                return item;
            });

            setUpdateCreateObj({
                ...update_create_obj,
                files: [...files, ...load_files],
                vid_pics: [...vid_pics, ...new_vid_pics],
                is_loading: false,
                has_file: true,
                has_text: !!main_content.trim(),
            });
        }
    }

    // 
    function deleteAnItem(index) {
        const deleted_item = vid_pics[index];

        deleted_item.id && deleted_ids.push(deleted_item.id);
        files.splice(index, 1);
        vid_pics.splice(index, 1);
        //
        if (vid_pics.length) {
            setUpdateCreateObj((update_create_obj) => ({
                ...update_create_obj,
                has_file: true,
            }));
        } else {
            setUpdateCreateObj((update_create_obj) => ({
                ...update_create_obj,
                open_fix_all: false,
                has_file: false,
                has_text: !!main_content.trim(),
            }));
        }
    }

    /* ---------------------------- FIX DETAIL ---------------------------------- */

    //
    function showFixAll() {
        setUpdateCreateObj({
            ...update_create_obj,
            open_fix_all: true,
        });
    }

    //
    function closeFixAll() {
        setUpdateCreateObj({
            ...update_create_obj,
            open_fix_all: false,
        });
    }

    //
    function handleChangeContentVidPic(content, index) {
        vid_pics[index].content = content;
        // update contents to updated
        const updated_id = vid_pics[index].id;
        if (updated_id) {
            updated_ids.push(updated_id);
            updated_contents.push(content);
        }

        setUpdateCreateObj({
            ...update_create_obj,
            has_text: !!main_content.trim(),
            has_file: true,
        });
    }

    //
    function onCUPost() {
        handleCUPost(update_create_obj);
    }

    //
    return (
        <div className="CUPost">
            <div className={open_fix_all ? 'display-none' : ''}>
                <CUPostHome
                    main_content={main_content}
                    vid_pics={vid_pics}
                    title_action={title_action}
                    //
                    has_file={has_file}
                    has_text={has_text}
                    is_loading={is_loading}
                    //
                    showFixAll={showFixAll}
                    handleChangeMainContent={handleChangeMainContent}
                    deleteAnItem={deleteAnItem}
                    handleChooseFiles={handleChooseFiles}
                    handleCUPost={onCUPost}
                />
            </div>

            <div className={open_fix_all ? '' : 'display-none'}>
                <FixAll
                    open_fix_all={open_fix_all}
                    vid_pics={vid_pics}
                    //
                    closeFixAll={closeFixAll}
                    deleteAnItem={deleteAnItem}
                    handleChangeContentVidPic={handleChangeContentVidPic}
                />
            </div>
        </div>
    );
}

export default CUPost;
