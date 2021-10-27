import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import IconsMenu from '../../../../_icons_svg/icons_menu/IconsMenu';
//
import BtnProfileActions from '../_common/BtnProfileActions';

//
BtnProfileChat.propTypes = {};

//
function BtnProfileChat({ user_id }) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    function onChat() {
        openRoomChat(user_id);
    }

    //
    return (
        <BtnProfileActions
            className={'BtnProfileChat bg-ccc'}
            Icon={<IconsMenu x={200} y={200} />}
            title="Message"
            handleClick={onChat}
        />
    );
}

export default BtnProfileChat;
