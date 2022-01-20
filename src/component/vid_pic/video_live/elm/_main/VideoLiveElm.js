import React from 'react';
import PropTypes from 'prop-types';
//
import IconsEye from '../../../../../_icons_svg/icons_eye/IconsEye';
//
import VideoLiveUtils from '../../utils/_main/VideoLiveUtils';
// 
import './VideoLiveElm.scss';

//
VideoLiveElm.propTypes = {};

//
function VideoLiveElm({
    ref_video_elm,
    video,

    view_count,
    c_time,
    total_time,
}) {
    //
    const is_live_view = c_time == total_time;

    //
    return (
        <div className="VideoLiveElm pos-rel wh-100">
            <video
                ref={ref_video_elm}
                className="wh-100"
                src={video}
                controls={false}
            />

            <div className="pos-abs-100"></div>

            <div className="pos-abs-0 padding-8px">
                <div className="display-flex align-items-center line-12px font-13px text-white font-600">
                    <div
                        className={`padding-6px brs-5px ${
                            is_live_view ? 'bg-danger' : 'bg-ccc'
                        }`}
                    >
                        LIVE
                    </div>

                    <div className="display-flex-center margin-left-5px padding-6px brs-5px bg-shadow-5">
                        <IconsEye size_icon="13px" close_eye={false} />

                        <div className="margin-left-5px">{view_count}</div>
                    </div>
                </div>
            </div>

            <div className="pos-abs left-0 bottom-0 w-100per">
                <VideoLiveUtils />
            </div>
        </div>
    );
}

export default VideoLiveElm;
