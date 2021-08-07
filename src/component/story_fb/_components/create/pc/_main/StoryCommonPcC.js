import React from 'react';
import PropTypes from 'prop-types';
//
import StoryLeftCommonPcC from '../left/_main/StoryLeftCommonPcC';
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
    handleCreate,
    handleDiscard,
    handleClose,
}) {
    //
    return (
        <div className="StoryCommonPcC h-100per">
            <div className="StoryCommonPcC_row display-flex h-100per">
                <div className="StoryCommonPcC_left story-create-left">
                    <StoryLeftCommonPcC
                        show_fav={show_fav}
                        is_home={false}
                        handleCreate={handleCreate}
                        handleDiscard={handleDiscard}
                        handleClose={handleClose}
                    >
                        {children_left}
                    </StoryLeftCommonPcC>
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
