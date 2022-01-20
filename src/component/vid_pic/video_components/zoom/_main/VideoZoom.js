import React from 'react';
import PropTypes from 'prop-types';
//
import IconVideoZoomArrow from '../../../../../_icons_svg/_icons_video_zoom/arrow/IconVideoZoomArrow';

//
const VideoZoomIcon = ({ zoom_icon_name, is_zoom_out, size_icon }) => {
    //
    if (zoom_icon_name == 'arrow') {
        return (
            <IconVideoZoomArrow zoom_out={!is_zoom_out} size_icon={size_icon} />
        );
    }

    //
    return <div></div>;
};

//
VideoZoom.propTypes = {};

//
function VideoZoom({
    zoom_icon_name = 'arrow',
    size_icon,
    is_zoom_out,
    toggleZoom,
}) {
    //
    return (
        <div
            className="VideoZoom display-flex cursor-pointer"
            onClick={toggleZoom}
        >
            <VideoZoomIcon
                zoom_icon_name={zoom_icon_name}
                is_zoom_out={is_zoom_out}
                size_icon={size_icon}
            />
        </div>
    );
}

export default VideoZoom;
