import React from 'react';
import PropTypes from 'prop-types';
//
import IconsPlayPause from '../../../../_icons_svg/icon_play_pause/IconsPlayPause';

//
VideoPause.propTypes = {};

//
function VideoPause({ is_play, size_icon, color, togglePlayPause }) {
    //
    return (
        <div
            className="VideoPause display-flex align-items-center cursor-pointer"
            onClick={togglePlayPause}
        >
            <IconsPlayPause
                x={is_play ? 200 : 0}
                size_icon={size_icon}
                color={color}
            />
        </div>
    );
}

export default VideoPause;
