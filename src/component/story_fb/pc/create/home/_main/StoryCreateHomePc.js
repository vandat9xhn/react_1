import React from 'react';
import PropTypes from 'prop-types';
//
import StoryLeftCommonPcC from '../../../../_components/create/pc/left/_main/StoryLeftCommonPcC';
import StoryCreatePicChoice from '../../../../_components/create/choose/vid_pic/StoryCreatePicChoice';
import StoryCreateTextChoice from '../../../../_components/create/choose/text/StoryCreateTextChoice';
//
import './StoryCreateHomePc.scss';

//
StoryCreateHomePc.propTypes = {};

//
function StoryCreateHomePc({
    permission,
    show_fav,

    handleChoosePermission,
    openScreenStoryText,
    openScreenStoryPic,
    handleCloseScreen,
}) {
    //
    return (
        <div className="StoryCreateHomePc h-100per">
            <div className="display-flex h-100per">
                <div className="StoryCreateHomePc_left story-create-left bg-primary">
                    <StoryLeftCommonPcC
                        permission={permission}
                        show_fav={show_fav}
                        is_home={true}
                        handleChoosePermission={handleChoosePermission}
                        handleClose={handleCloseScreen}
                    />
                </div>

                <div
                    className={`StoryCreateHomePc_right flex-grow-1 display-flex-center ${
                        show_fav
                            ? 'StoryCreateHomePc_right-has_fav'
                            : 'StoryCreateHomePc_right-no_fav'
                    }`}
                >
                    <div className="StoryCreateHomePc_choice">
                        <StoryCreatePicChoice
                            openScreenStoryPic={openScreenStoryPic}
                        />
                    </div>

                    <div className="StoryCreateHomePc_choice">
                        <StoryCreateTextChoice
                            openScreenStoryText={openScreenStoryText}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryCreateHomePc;
