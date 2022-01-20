import React from 'react';
import PropTypes from 'prop-types';
//
import IconSetting from '../../../../../_icons_svg/icon_setting/IconSetting';

//
VideoSettings.propTypes = {};

//
function VideoSettings({ size_icon }) {
    //
    return (
        <div className="VideoSettings">
            <div className="cursor-pointer">
                <IconSetting stroke={'currentColor'} size_icon={size_icon} />
            </div>
        </div>
    );
}

export default VideoSettings;
