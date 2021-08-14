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
    can_undo,
    can_redo,

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
                    <div className="padding-x-8px" onClick={openEffectPic}>
                        <span className="label-field text-white">Effect</span>
                    </div>
                </div>

                <div
                    className={`${
                        can_undo ? '' : 'pointer-events-none opacity-05'
                    }`}
                >
                    <div className="padding-x-8px" onClick={undoEditPic}>
                        <IconReUndo />
                    </div>
                </div>

                <div
                    className={`${
                        can_redo ? '' : 'pointer-events-none opacity-05'
                    }`}
                >
                    <div
                        className="StoryCPEditPicActionsMb_redo_contain padding-x-8px"
                        onClick={redoEditPic}
                    >
                        <IconReUndo />
                    </div>
                </div>

                <div>
                    <div className="padding-x-8px" onClick={changeModePic}>
                        <span className="label-field text-white">{mode}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryCPEditPicActionsMb;
