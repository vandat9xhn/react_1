import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import StoryCPEditPicActionsMb from '../actions/StoryCPEditPicActionsMb';
//
import './StoryCPEditPicMb.scss';

//
StoryCPEditPicMb.propTypes = {};

//
function StoryCPEditPicMb({
    open_edit_pic,
    mode,
    can_undo,
    can_redo,

    toggleEditPic,
    openEffectPic,
    undoEditPic,
    redoEditPic,
    changeModePic,
}) {
    //
    return (
        <div className="StoryCPEditPicMb pos-rel">
            <div className="display-flex align-items-center">
                <div
                    className={`StoryCPEditPicMb_toggle display-flex-center brs-50 bg-blue ${
                        open_edit_pic
                            ? 'StoryCPEditPicMb_toggle-close'
                            : 'StoryCPEditPicMb_toggle-open opacity-05'
                    }`}
                    onClick={toggleEditPic}
                >
                    <IconsArrow y={400} size_icon="1rem" />
                </div>

                <div
                    className={`StoryCPEditPicMb_right overflow-hidden ${
                        open_edit_pic
                            ? 'StoryCPEditPicMb_right-show flex-grow-1'
                            : 'StoryCPEditPicMb_right-hide'
                    }`}
                >
                    <div className="StoryCPEditPicMb_right_contain">
                        <StoryCPEditPicActionsMb
                            mode={mode}
                            can_undo={can_undo}
                            can_redo={can_redo}
                            openEffectPic={openEffectPic}
                            undoEditPic={undoEditPic}
                            redoEditPic={redoEditPic}
                            changeModePic={changeModePic}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoryCPEditPicMb;
