import React from 'react';
import PropTypes from 'prop-types';
//
import './StoryCreatePreviewPcCommon.scss';

//
StoryCreatePreviewPcCommon.propTypes = {};

//
function StoryCreatePreviewPcCommon({ children }) {
    //
    return (
        <div className="StoryCreatePreviewPcCommon h-100per padding-8px bg-primary brs-8px box-shadow-fb">
            <h2 className="StoryCreatePreviewPcCommon_title font-16px font-500">
                Preview
            </h2>

            <div className="flex-grow-1 ">
                <div className="StoryCreatePreviewPcCommon_body_contain wh-100 bg-shadow-9 brs-8px">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default StoryCreatePreviewPcCommon;
