import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import IconSetting from '../../../../../../_icons_svg/icon_setting/IconSetting';
//
import FavTitle from '../../../../../fav_title/FavTitle';
import PicNameContent from '../../../../../picture_name/pic_name_content/PicNameContent';
//
import './StoryCreateLeftPcCommon.scss';

//
StoryCreateLeftPcCommon.propTypes = {};

//
function StoryCreateLeftPcCommon({ show_fav, children, handleClose }) {
    //
    const { user } = useContext(context_api);

    //
    return (
        <div className="StoryCreateLeftPcCommon h-100per">
            {show_fav ? (
                <div className="StoryCreateLeftPcCommon_fav">
                    <FavTitle handleClose={handleClose} />
                </div>
            ) : null}

            <div className="StoryCreateLeftPcCommon_main">
                <div className="StoryCreateLeftPcCommon_title">
                    <div className="flex-between-center">
                        <h1 className="margin-0 font-22px label-field">
                            Your story
                        </h1>

                        <div>
                            <div className="StoryCreateLeftPcCommon_setting_contain display-flex-center bg-ccc brs-50 cursor-pointer">
                                <IconSetting size_icon="1.25rem" fill="var(--md-color)" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="StoryCreateLeftPcCommon_foot">
                    <div className="StoryCreateLeftPcCommon_foot_contain">
                        <div className="StoryCreateLeftPcCommon_user font-18px">
                            <PicNameContent user={user} />
                        </div>

                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryCreateLeftPcCommon;
