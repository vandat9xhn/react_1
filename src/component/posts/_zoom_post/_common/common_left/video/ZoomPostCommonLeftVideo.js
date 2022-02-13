import React from 'react';
import PropTypes from 'prop-types';
//
import MyVideoLive from '../../../../../vid_pic/video_live/_main/MyVideoLive';
import MyVideo from '../../../../../vid_pic/video/_main/MyVideo';
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
                <MyVideoLive
                    video={video}
                    use_fullscreen={true}
                    max_zoom_lv={1}
                    total_view={20}
                    afterChangeZoomLv={afterChangeZoomLv}
                />
            ) : (
                <MyVideo
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
