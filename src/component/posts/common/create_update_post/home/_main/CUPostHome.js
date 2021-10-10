import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { openScreenPermission } from '../../../../../_screen/type/permission/_main/ScreenPermission';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import CUPostHomeContent from '../content/CUPostHomeContent';
import CUPostHomeMoreInput from '../more_input/CUPostHomeMoreInput';
import CUPostHomeUser from '../user/CUPostHomeUser';
//
import './CUPostHome.scss';

//
CUPostHome.propTypes = {};

//
function CUPostHome({
    title,
    title_action,

    main_content,
    vid_pics,
    permission,
    user_tag_arr,
    emoji_obj,

    ref_input_file,
    has_change,
    is_loading,

    handleChangeMainContent,
    handleChoosePermission,
    showFixAll,
    delAllVidPic,

    handleStartLoadFile,
    handleChooseFiles,
    openTagUsers,
    openEmoji,
    openMoreInput,
    
    handleCUPost,
    handleClose,
}) {
    //
    const { user, openScreenFloor } = useContext(context_api);

    // ----

    //
    function openPermission() {
        openScreenPermission({
            openScreenFloor: openScreenFloor,
            permission: permission,
            handleChoosePermission: handleChoosePermission,
        });
    }

    //
    return (
        <div className="CUPostHome pos-rel cu-post-part">
            <h2 className="CUPostHome_title cu-post-title">{title}</h2>

            <div
                className="CUPostHome_close pos-abs cu-post-back cu-post-back-right"
                onClick={handleClose}
            >
                <IconsArrow y={400} size_icon="25px" />
            </div>

            <div className="CUPostHome_contain padding-15px">
                <div className="CUPostHome_user margin-bottom-10px width-fit-content">
                    <CUPostHomeUser
                        user={user}
                        emoji_obj={emoji_obj}
                        user_tag_arr={user_tag_arr}
                        permission={permission}
                        // 
                        openPermission={openPermission}
                        openTagUsers={openTagUsers}
                        openEmoji={openEmoji}
                    />
                </div>

                <div>
                    <CUPostHomeContent
                        last_name={user.last_name}
                        main_content={main_content}
                        urls_preview={vid_pics}
                        is_loading={is_loading}
                        //
                        handleChangeMainContent={handleChangeMainContent}
                        showFixAll={showFixAll}
                        delAllVidPic={delAllVidPic}
                    />
                </div>

                <div className="CUPostHome_files_tag padding-y-20px">
                    <CUPostHomeMoreInput
                        ref_input_file={ref_input_file}
                        handleStartLoadFile={handleStartLoadFile}
                        handleChooseFiles={handleChooseFiles}
                        openTagUsers={openTagUsers}
                        openEmoji={openEmoji}
                        openMoreInput={openMoreInput}
                    />
                </div>

                <button
                    className={`w-100per padding-8px brs-5px btn text-secondary font-500 text-align-center ${
                        !has_change
                            ? 'bg-ccc opacity-5 text-third'
                            : 'btn-active btn-hv bg-blue text-white cursor-pointer'
                    }`}
                    disabled={!has_change}
                    onClick={handleCUPost}
                >
                    {title_action}
                </button>
            </div>
        </div>
    );
}

export default CUPostHome;
