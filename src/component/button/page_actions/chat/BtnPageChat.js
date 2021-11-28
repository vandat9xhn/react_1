import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import IconsMenu from '../../../../_icons_svg/icons_menu/IconsMenu';
//
import BtnActions from '../../actions/BtnActions';

//
BtnPageChat.propTypes = {
    ...BtnActions.propTypes,
};

BtnPageChat.defaultProps = {
    Icon: <IconsMenu x={200} y={200} />,
    title: 'Message',
    className: 'bg-ccc',
};

//
function BtnPageChat({ page_id, className, Icon, title, use_title, use_icon }) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    function onChat() {
        openRoomChat(page_id);
    }

    //
    return (
        <BtnActions
            className={`BtnPageChat ${className}`}
            Icon={Icon}
            title={title}
            use_title={use_title}
            use_icon={use_icon}
            handleClick={onChat}
        />
    );
}

export default BtnPageChat;
