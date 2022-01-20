import React from 'react';
import PropTypes from 'prop-types';
//
import IconSetting from '../../../../../_icons_svg/icon_setting/IconSetting';

//
VideoSettings.propTypes = {};

//
function VideoSettings({ stroke, size_icon }) {
    //
    return (
        <div className="VideoSettings">
            <div>
                <IconSetting stroke={stroke} size_icon={size_icon} />
            </div>
        </div>
    );
}

export default VideoSettings;
