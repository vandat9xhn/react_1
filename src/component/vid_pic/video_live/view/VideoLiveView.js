import React from 'react';
import PropTypes from 'prop-types';
// 
import IconsEye from '../../../../_icons_svg/icons_eye/IconsEye';

//
VideoLiveView.propTypes = {};

//
function VideoLiveView({ is_live_view, total_view }) {
    //
    return (
        <div className="VideoLiveView display-flex align-items-center line-12px font-13px text-white font-500">
            <div
                className={`padding-6px brs-4px ${
                    is_live_view ? 'bg-danger' : 'bg-ccc'
                }`}
            >
                LIVE
            </div>

            <div className="display-flex-center margin-left-8px padding-6px brs-4px bg-shadow-5">
                <IconsEye size_icon="13px" close_eye={false} />

                <div className="margin-left-5px">{total_view}</div>
            </div>
        </div>
    );
}

export default VideoLiveView;
