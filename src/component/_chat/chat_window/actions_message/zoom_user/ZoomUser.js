import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import PictureName from '../../../../picture_name/pic_name/PictureName';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
import YesNoDiv from '../../../../some_div/yes_no_div/YesNoDiv';
//
import './ZoomUser.scss';

//
ZoomUser.propTypes = {};

//
function ZoomUser({ c_user_id, zoom_owner, zoom_user, sendForceUserQuit }) {
    //
    const [open_yes_no, setOpenYesNo] = useState(false);

    //
    function onSendForceUserQuit() {
        sendForceUserQuit(zoom_user.user.id);
    }

    //
    function openYesNo() {
        !open_yes_no && setOpenYesNo(true);
    }

    //
    function closeYesNo() {
        setOpenYesNo(false);
    }

    //
    return (
        <div className="ZoomUser padding-8px">
            <div className="ZoomUser_row flex-between-center">
                <div>
                    <PictureName user={zoom_user.user} />
                </div>

                {zoom_owner == c_user_id && c_user_id != zoom_user.user.id && (
                    <div
                        className="cursor-pointer hv-opacity"
                        onClick={openYesNo}
                    >
                        <IconsArrow y={400} size_icon="1rem" />
                    </div>
                )}
                {/* {true && (
                    <div
                        className="cursor-pointer hv-opacity"
                        onClick={openYesNo}
                    >
                        <IconsArrow y={400} size_icon="1rem" />
                    </div>
                )} */}
            </div>

            <div className={open_yes_no ? '' : 'display-none'}>
                <YesNoDiv
                    handleYes={onSendForceUserQuit}
                    handleNo={closeYesNo}
                />
            </div>
        </div>
    );
}

export default ZoomUser;
