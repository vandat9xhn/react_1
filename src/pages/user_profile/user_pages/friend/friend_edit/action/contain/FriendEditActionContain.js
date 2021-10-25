import React from 'react';
import PropTypes from 'prop-types';
//
import IconsAction from '../../../../../../../_icons_svg/icons_action/IconsAction';
//
import IconDiv from '../../../../../../../component/some_div/icon_div/IconDiv';
//
import './FriendEditActionContain.scss';

//
FriendEditActionContain.propTypes = {};

//
function FriendEditActionContain({ openMessage, confirmDelete, handleClose }) {
    //
    return (
        <div className="FriendEditActionContain" onClick={handleClose}>
            <div
                className="FriendEditActionContain_item"
                onClick={openMessage}
            >
                <IconDiv x={200} Icon={IconsAction}>
                    Message
                </IconDiv>
            </div>

            <div
                className="FriendEditActionContain_item"
                onClick={confirmDelete}
            >
                <IconDiv Icon={IconsAction}>
                    <span>Unfriend</span>
                </IconDiv>
            </div>
        </div>
    );
}

export default FriendEditActionContain;
