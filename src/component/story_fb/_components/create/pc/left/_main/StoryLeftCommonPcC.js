import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { openScreenPermission } from '../../../../../../_screen/type/permission/_main/ScreenPermission';
// 
import FavTitle from '../../../../../../fav_title/FavTitle';
import PicNameContent from '../../../../../../picture_name/pic_name_content/PicNameContent';
//
import StoryLeftPcCommonTitleC from '../title/StoryLeftPcCommonTitleC';
import StoryLeftPcCommonBtnC from '../btn_create_discard/StoryLeftPcCommonBtnC';
//
import './StoryLeftCommonPcC.scss';

//
StoryLeftCommonPcC.propTypes = {
    show_fav: PropTypes.bool,
    is_home: PropTypes.bool,
    children: PropTypes.element,
    handleClose: PropTypes.func,
};

StoryLeftCommonPcC.defaultProps = {
    show_fav: false,
    is_home: true,
    children: <div></div>,
};

//
function StoryLeftCommonPcC({
    show_fav,
    permission,
    is_home,
    children,

    handleChoosePermission,
    handleCreate,
    handleDiscard,
    handleClose,
}) {
    //
    const { user, openScreenFloor } = useContext(context_api);

    // 
    function openChangeSetting() {
        openScreenPermission({
            permission: permission,
            openScreenFloor: openScreenFloor,
            handleChoosePermission: handleChoosePermission,
        });
    }

    //
    return (
        <div
            className={`StoryLeftCommonPcC pos-fixed story-create-left h-100per display-flex flex-col ${
                show_fav ? '' : 'StoryLeftCommonPcC-no_fav'
            }`}
        >
            {show_fav ? (
                <div className="StoryLeftCommonPcC_fav">
                    <FavTitle handleClose={handleClose} />
                </div>
            ) : null}

            <div className="StoryLeftCommonPcC_main flex-grow-1 display-flex flex-col overflow-hidden">
                <div className="StoryLeftCommonPcC_title">
                    <StoryLeftPcCommonTitleC openChangeSetting={openChangeSetting} />
                </div>

                <div className="StoryLeftCommonPcC_body flex-grow-1 overflow-y-auto scroll-thin">
                    <div className="StoryLeftCommonPcC_user font-17px">
                        <PicNameContent user={user} />
                    </div>

                    {!is_home ? <div>{children}</div> : null}
                </div>

                {!is_home ? (
                    <div className="StoryLeftCommonPcC_foot">
                        <StoryLeftPcCommonBtnC
                            handleCreate={handleCreate}
                            handleDiscard={handleDiscard}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default StoryLeftCommonPcC;
