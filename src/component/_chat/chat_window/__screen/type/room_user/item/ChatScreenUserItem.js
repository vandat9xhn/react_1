import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { WsSend } from '../../../../../../../_some_function/WsSend';
//
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import PictureName from '../../../../../../picture_name/pic_name/PictureName';
import YesNoDiv from '../../../../../../some_div/yes_no_div/YesNoDiv';
//
import './ChatScreenUserItem.scss';

//
ChatScreenUserItem.propTypes = {};

//
function ChatScreenUserItem({ is_owner, ise_user, room_user, ws }) {
    //
    const [open_yes_no, setOpenYesNo] = useState(false);

    //
    function onSendForceUserQuit() {
        WsSend(ws, {
            type: 'force_quit',
        });
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
        <div className="ChatScreenUserItem padding-8px">
            <div className="ChatScreenUserItem_row flex-between-center">
                <div>
                    <PictureName user={room_user.user} />
                </div>

                {is_owner && !ise_user && (
                    <div
                        className="cursor-pointer hv-opacity"
                        onClick={openYesNo}
                    >
                        <IconsArrow y={400} size_icon="1rem" />
                    </div>
                )}
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

export default ChatScreenUserItem;
