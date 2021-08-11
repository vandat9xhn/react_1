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
    permission,
    show_fav,
    children_left,
    children_right,

    handleChoosePermission,
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
                        permission={permission}
                        show_fav={show_fav}
                        is_home={false}
                        //
                        handleChoosePermission={handleChoosePermission}
                        handleCreate={handleCreate}
                        handleDiscard={handleDiscard}
                        handleClose={handleClose}
                    >
                        {children_left}
                    </StoryLeftCommonPcC>
                </div>

                <div
                    className={`flex-grow-1 ${
                        show_fav
                            ? 'StoryCommonPcC_right-has_fav'
                            : 'StoryCommonPcC_right-no_fav'
                    }`}
                >
                    <StoryCreatePreviewPcCommon>
                        {children_right}
                    </StoryCreatePreviewPcCommon>
                </div>
            </div>
        </div>
    );
}

export default StoryCommonPcC;
