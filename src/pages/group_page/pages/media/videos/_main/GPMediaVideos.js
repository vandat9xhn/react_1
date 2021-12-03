import React from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FbGroupMediaVideo_L } from '../../../../../../_handle_api/fb_group/page_media_videos';
// 
import GPMediaPics from '../../../../_components/media_pics/_main/GPMediaPics';

//
GPMediaVideos.propTypes = {};

//
function GPMediaVideos({ group_id }) {
    //
    function handle_API_L(c_count) {
        return handle_API_FbGroupMediaVideo_L({
            c_count: c_count,
            group_id: group_id,
        });
    }

    //
    return (
        <div className="GPMediaVideos">
            <GPMediaPics handle_API_L={handle_API_L} />
        </div>
    );
}

export default GPMediaVideos;
