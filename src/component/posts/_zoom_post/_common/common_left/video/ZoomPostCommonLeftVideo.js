import React from 'react';
import PropTypes from 'prop-types';
//
import Video from '../../../../../vid_pic/video/_main/Video';
import VideoLive from '../../../../../vid_pic/video_live/_main/VideoLive';
//
import './ZoomPostCommonLeftVideo.scss';

//
ZoomPostCommonLeftVideo.propTypes = {};

//
function ZoomPostCommonLeftVideo({ video, is_live }) {
    //
    function afterChangeZoomLv() {}

    //
    return (
        <div className="ZoomPostCommonLeftVideo wh-100 padding-bottom-10px">
            {is_live ? (
                <VideoLive
                    video={video}
                    use_fullscreen={true}
                    max_zoom_lv={1}
                    total_view={20}
                    afterChangeZoomLv={afterChangeZoomLv}
                />
            ) : (
                <Video
                    video={video}
                    use_fullscreen={true}
                    max_zoom_lv={1}
                    afterChangeZoomLv={afterChangeZoomLv}
                />
            )}
        </div>
    );
}

export default ZoomPostCommonLeftVideo;
