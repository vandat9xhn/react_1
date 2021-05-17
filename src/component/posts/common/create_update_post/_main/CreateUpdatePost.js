import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import CreateUpdatePostHome from '../home/_main/CreateUpdatePostHome';
import FixAll from '../fix_all/_main/FixAll';
//
import './CreateUpdatePost.scss';

//
CreateUpdatePost.propTypes = {
    main_content: PropTypes.string,
    vid_pics: PropTypes.array,

    title_action: PropTypes.string,
    handleCreateUpdatePost: PropTypes.func,
};

CreateUpdatePost.defaultProps = {
    main_content: '',
    vid_pics: [],

    title_action: 'Post',
};

//
function CreateUpdatePost(props) {
    //
    const {
        main_content: old_main_content,
        vid_pics: old_vid_pics,

        title_action,
        handleCreateUpdatePost,
    } = props;

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

    // on change
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
    function loaderFile(new_files) {
        return new Promise((res) => {
            files.push(...new_files);
            //
            let i = 1;

            for (const file of new_files) {
                const reader = new FileReader();
                reader.onload = () => {
                    vid_pics.push({
                        id: 0,
                        content: '',
                        vid_pic: reader.result,
                        type: file.type,
                    });
                };
                reader.readAsDataURL(file);
                //
                if (i == new_files.length) {
                    setTimeout(() => {
                        res();
                    }, i <= 5 ? 500 : i * 100);
                } else {
                    i += 1;
                }
            }
        });
    }

    // choose
    async function handleChooseFiles(event) {
        const new_files = event.target.files;

        if (new_files.length) {
            setUpdateCreateObj({
                ...update_create_obj,
                is_loading: true,
            });

            await loaderFile(new_files);

            setUpdateCreateObj({
                ...update_create_obj,
                is_loading: false,
                has_file: true,
                has_text: !!main_content.trim(),
            });
        }
    }

    // delete
    function deleteAnItem(index) {
        const deleted_item = vid_pics[index];

        deleted_item.id && deleted_ids.push(deleted_item.id);
        files.splice(index, 1)
        vid_pics.splice(index, 1)
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
    function onCreateUpdatePost() {
        handleCreateUpdatePost(update_create_obj);
    }

    //
    return (
        <div className="CreateUpdatePost">
            {/* home */}
            <div className={open_fix_all ? 'display-none' : ''}>
                <CreateUpdatePostHome
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
                    handleCreateUpdatePost={onCreateUpdatePost}
                />
            </div>

            {/* Fix all */}
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

export default CreateUpdatePost;
