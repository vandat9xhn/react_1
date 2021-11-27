import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import IconsMenu from '../../../../_icons_svg/icons_menu/IconsMenu';
// 
import BtnActions from '../../actions/BtnActions';

//
BtnPageChat.propTypes = {};

//
function BtnPageChat({ page_id, use_title }) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    function onChat() {
        openRoomChat(page_id);
    }

    //
    return (
        <BtnActions
            className={'BtnPageChat bg-ccc'}
            Icon={<IconsMenu x={200} y={200} />}
            use_title={use_title}
            title="Message"
            handleClick={onChat}
        />
    );
}

export default BtnPageChat;
