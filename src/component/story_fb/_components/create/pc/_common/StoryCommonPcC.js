import React from 'react';
import PropTypes from 'prop-types';
//
import StoryCreateLeftPcCommon from '../left/StoryCreateLeftPcCommon';
import StoryCreatePreviewPcCommon from '../preview/StoryCreatePreviewPcCommon';
//
import './StoryCommonPcC.scss';

//
StoryCommonPcC.propTypes = {};

//
function StoryCommonPcC({
    show_fav,
    children_left,
    children_right,
    handleClose,
}) {
    //
    return (
        <div className="StoryCommonPcC h-100per">
            <div className="StoryCommonPcC_row display-flex h-100per">
                <div className="StoryCommonPcC_left story-create-left">
                    <StoryCreateLeftPcCommon
                        show_fav={show_fav}
                        handleClose={handleClose}
                    >
                        {children_left}
                    </StoryCreateLeftPcCommon>
                </div>

                <div className="StoryCommonPcC_right flex-grow-1">
                    <StoryCreatePreviewPcCommon>
                        {children_right}
                    </StoryCreatePreviewPcCommon>
                </div>
            </div>
        </div>
    );
}

export default StoryCommonPcC;
