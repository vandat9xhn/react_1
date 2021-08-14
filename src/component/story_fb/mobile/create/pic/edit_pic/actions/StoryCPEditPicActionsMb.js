import React from 'react';
import PropTypes from 'prop-types';
//
import IconReUndo from '../../../../../../../_icons_svg/icon_re_undo/IconReUndo';
// 
import './StoryCPEditPicActionsMb.scss';

//
StoryCPEditPicActionsMb.propTypes = {};

//
function StoryCPEditPicActionsMb({
    mode,
    openEffectPic,
    undoEditPic,
    redoEditPic,
    changeModePic,
}) {
    //
    return (
        <div className="StoryCPEditPicActionsMb">
            <div className="display-flex">
                <div>
                    <div className="padding-4px" onClick={openEffectPic}>
                        <span className="label-field text-white">Effect</span>
                    </div>
                </div>

                <div>
                    <div className="padding-4px" onClick={undoEditPic}>
                        <IconReUndo />
                    </div>
                </div>

                <div>
                    <div
                        className="StoryCPEditPicActionsMb_redo_contain padding-4px"
                        onClick={redoEditPic}
                    >
                        <IconReUndo />
                    </div>
                </div>

                <div>
                    <div className="padding-4px" onClick={changeModePic}>
                        <span className="label-field text-white">{mode}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryCPEditPicActionsMb;
