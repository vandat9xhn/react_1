import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import IconsMenu from '../../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import ProfileLayoutAboutPreviewItem from '../../../../../../../component/profile_layout/about_preview_item/ProfileLayoutAboutPreviewItem';

//
FPHomeAboutChat.propTypes = {};

//
function FPHomeAboutChat({ page_id }) {
    //
    const { openRoomChat } = useContext(context_api);

    // -----

    //
    function openChat() {
        openRoomChat(page_id);
    }

    //
    return (
        <div className="FPHomeAboutChat">
            <ProfileLayoutAboutPreviewItem Icon={<IconsMenu x={200} y={200} />}>
                <div
                    className="text-blue cursor-pointer hv-underline"
                    onClick={openChat}
                >
                    Send message
                </div>
            </ProfileLayoutAboutPreviewItem>
        </div>
    );
}

export default FPHomeAboutChat;
