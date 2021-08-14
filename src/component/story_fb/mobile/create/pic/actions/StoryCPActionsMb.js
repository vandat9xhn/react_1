import React from 'react';
import PropTypes from 'prop-types';
//
import IconsPost from '../../../../../../_icons_svg/icons_post/IconsPost';
//
import './StoryCPActionsMb.scss';

//
StoryCPActionsMb.propTypes = {};

//
function StoryCPActionsMb({ mode, openAddText, changeModePic, openTagFriend }) {
    //
    return (
        <div className="StoryCPActionsMb text-white label-field font-13px">
            <div></div>

            <div className="StoryCPActionsMb_part" onClick={openAddText}>
                <div className="display-flex flex-end align-items-center">
                    <div>
                        <span>Text</span>
                    </div>

                    <div className="StoryCPActionsMb_part_right">
                        <span>Aa</span>
                    </div>
                </div>
            </div>

            <div className="StoryCPActionsMb_part" onClick={changeModePic}>
                <div className="display-flex flex-end align-items-center">
                    <div>
                        <span>Pic</span>
                    </div>

                    <div className="StoryCPActionsMb_part_right">
                        <span>{mode}</span>
                    </div>
                </div>
            </div>

            <div className="StoryCPActionsMb_part" onClick={openTagFriend}>
                <div className="display-flex flex-end align-items-center">
                    <div>
                        <span>Tag</span>
                    </div>

                    <div className="StoryCPActionsMb_part_right">
                        <IconsPost size_icon="1rem" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryCPActionsMb;
