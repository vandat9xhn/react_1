import React from 'react';
import PropTypes from 'prop-types';
//
import './StoryCreatePreviewPcCommon.scss';

//
StoryCreatePreviewPcCommon.propTypes = {};

//
function StoryCreatePreviewPcCommon({ children_right }) {
    //
    return (
        <div className="StoryCreatePreviewPcCommon h-100per">
            <h2>Preview</h2>

            <div className="flex-grow-1">
                <div>{children_right}</div>
            </div>
        </div>
    );
}

export default StoryCreatePreviewPcCommon;
