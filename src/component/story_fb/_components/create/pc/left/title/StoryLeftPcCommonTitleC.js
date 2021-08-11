import React from 'react';
import PropTypes from 'prop-types';
//
import IconSetting from '../../../../../../../_icons_svg/icon_setting/IconSetting';
//
import './StoryLeftPcCommonTitleC.scss';

//
StoryLeftPcCommonTitleC.propTypes = {};

//
function StoryLeftPcCommonTitleC({ openChangeSetting }) {
    //
    return (
        <div className="StoryLeftPcCommonTitleC">
            <div className="flex-between-center">
                <h1 className="font-24px">Your story</h1>

                <div>
                    <div
                        className="StoryLeftPcCommonTitleC_setting_contain display-flex-center bg-ccc brs-50 cursor-pointer hv-bg-hv"
                        onClick={openChangeSetting}
                    >
                        <IconSetting
                            size_icon="1.25rem"
                            fill="var(--md-color)"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryLeftPcCommonTitleC;
