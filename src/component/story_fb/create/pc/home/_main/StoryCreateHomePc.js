import React from 'react';
import PropTypes from 'prop-types';
//
import StoryCreateLeftPcCommon from '../../../../_components/create/pc/left/StoryCreateLeftPcCommon';
import StoryCreatePicChoice from '../../../../_components/create/choose/vid_pic/StoryCreatePicChoice';
import StoryCreateTextChoice from '../../../../_components/create/choose/text/StoryCreateTextChoice';
//
import './StoryCreateHomePc.scss';

//
StoryCreateHomePc.propTypes = {};

//
function StoryCreateHomePc({
    show_fav,
    openScreenStoryText,
    openScreenStoryPic,
    handleCloseScreen,
}) {
    //
    return (
        <div className="StoryCreateHomePc h-100per">
            <div className="display-flex h-100per">
                <div className="StoryCreateHomePc_left story-create-left bg-primary">
                    <StoryCreateLeftPcCommon
                        show_fav={show_fav}
                        handleClose={handleCloseScreen}
                    />
                </div>

                <div className="flex-grow-1">
                    <div className="display-flex-center h-100per">
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
        </div>
    );
}

export default StoryCreateHomePc;
