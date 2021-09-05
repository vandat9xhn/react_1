import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import IconsMenu from '../../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import './FsBShopHead.scss';

//
FsBShopHead.propTypes = {};

//
function FsBShopHead({ shop_id, shop_name }) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    function onOpenChat() {
        openRoomChat(shop_id);
    }

    //
    return (
        <div className="FsBShopHead font-14px line-16px">
            <div className="display-flex align-items-center">
                <div className="FsBShopHead_name padding-right-10px text-secondary">
                    {shop_name}
                </div>

                <div
                    className="FsBShopHead_chat inline-flex align-items-center padding-left-10px cursor-pointer"
                    onClick={onOpenChat}
                >
                    <IconsMenu x={200} y={200} />

                    <span className="margin-left-5px">Chat ngay</span>
                </div>
            </div>
        </div>
    );
}

export default FsBShopHead;
