import React from 'react';
import PropTypes from 'prop-types';
//
import IconSetting from '../../../../../../_icons_svg/icon_setting/IconSetting';

//
StoryBtnPrivacyMb.propTypes = {};

//
function StoryBtnPrivacyMb({ openPrivacy }) {
    //
    return (
        <div
            className="StoryBtnPrivacyMb brs-5px cursor-pointer"
            onClick={openPrivacy}
        >
            <div className="display-flex flex-col align-items-center">
                <div>
                    <IconSetting stroke="white" />
                </div>

                <div>
                    <span className="font-500 text-white">Privacy</span>
                </div>
            </div>
        </div>
    );
}

export default StoryBtnPrivacyMb;
