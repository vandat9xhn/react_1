import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { openScreenPermission } from '../../../../../_screen/type/permission/_main/ScreenPermission';
//
import CUPHomeHeadMb from '../head/CUPHomeHeadMb';
import CUPHomeContentMb from '../content/_main/CUPHomeContentMb';
import CUPHomeUserMb from '../user/CUPHomeUserMb';
import CUPostHomeVidPicMb from '../vid_pic/_main/CUPostHomeVidPicMb';
import CUPostHomeTagMb from '../tag/_main/CUPostHomeTagMb';

//
CUPostHomeMb.propTypes = {};

//
function CUPostHomeMb({
    title,
    title_action,
    permission,

    main_content,
    bg_arr,
    bg_ix,
    vid_pics,
    user_tag_arr,

    has_change,

    openTagUsers,
    openEditPhoto,

    handleChoosePermission,
    changeMainContent,
    handleChooseBg,
    chooseVidPic,
    handleDelVidPic,

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
        <div className="CUPostHomeMb">
            <div>
                <CUPHomeHeadMb
                    title={title}
                    title_action={title_action}
                    handleCUPost={handleCUPost}
                    handleClose={handleClose}
                />
            </div>

            <div>
                <CUPHomeUserMb
                    user={user}
                    permission={permission}
                    openPermission={openPermission}
                />
            </div>

            <div>
                <CUPHomeContentMb
                    main_content={main_content}
                    vid_pic_count={vid_pics.length}
                    bg_arr={bg_arr}
                    bg_ix={bg_ix}
                    changeMainContent={changeMainContent}
                    handleChooseBg={handleChooseBg}
                />
            </div>

            {bg_ix >= 1 ? null : (
                <div className="padding-top-10px">
                    <CUPostHomeVidPicMb
                        vid_pics={vid_pics}
                        chooseVidPic={chooseVidPic}
                        openEditPhoto={openEditPhoto}
                        handleDel={handleDelVidPic}
                    />
                </div>
            )}

            <div>
                <CUPostHomeTagMb
                    user_tag_arr={user_tag_arr}
                    openTagUsers={openTagUsers}
                />
            </div>

            <div className="padding-top-20px padding-bottom-10px padding-x-5px">
                <button
                    className={`btn w-100per padding-y-10px brs-4px text-align-center line-16px font-600 ${
                        has_change ? 'bg-blue text-white' : 'bg-ccc text-smoke'
                    }`}
                    type="button"
                    disabled={!has_change}
                    onClick={handleCUPost}
                >
                    {title_action}
                </button>
            </div>
        </div>
    );
}

export default CUPostHomeMb;
