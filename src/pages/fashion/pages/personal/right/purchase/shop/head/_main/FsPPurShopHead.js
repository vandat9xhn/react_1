import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { context_api } from '../../../../../../../../../_context/ContextAPI';
//
import IconFsTruck from '../../../../../../../../../_icons_svg/_icon_fs_truck/IconFsTruck';
//
import FashionMallLike from '../../../../../../../components/is_like/FashionMallLike';
//
import './FsPPurShopHead.scss';
import IconsMenu from '../../../../../../../../../_icons_svg/icons_menu/IconsMenu';

//
FsPPurShopHead.propTypes = {};

//
function FsPPurShopHead({
    shop_id,
    shop_name,

    is_like,
    is_mall,
    is_plus,

    transport_info,
    transport_status,
}) {
    //
    const { openRoomChat } = useContext(context_api);

    //
    function openChat() {
        openRoomChat(shop_id);
    }

    //
    return (
        <div className="FsPPurShopHead padding-bottom-10px border-bottom-blur">
            <div className="FsPPurShopHead_row flex-between-center">
                <div className="FsPPurShopHead_shop flex-between-center">
                    <div
                        className={`font-12px ${
                            is_like || is_mall ? 'margin-right-5px' : ''
                        }`}
                    >
                        <FashionMallLike
                            is_like={is_like}
                            is_mall={is_mall}
                            is_plus={is_plus}
                            // class_text={class_text}
                            use_side={false}
                        />
                    </div>

                    <div className="font-14px font-600">{shop_name}</div>

                    <button
                        className="FsPPurShopHead_chat btn-hv btn-active inline-flex align-items-center margin-left-8px margin-right-8px border-blur padding-x-8px padding-y-3px brs-3px bg-fashion-red text-white font-12px cursor-pointer"
                        type="button"
                        onClick={openChat}
                    >
                        <IconsMenu x={200} y={200} size_icon="12px" />

                        <span className="margin-left-3px">Chat</span>
                    </button>

                    <Link
                        className="border-blur padding-x-5px padding-y-3px text-555 font-12px text-cap hv-bg-hv"
                        to={`/fashion/shop/${shop_id}`}
                    >
                        Xem shop
                    </Link>
                </div>

                <div className="FsPPurShopHead_transport flex-between-center font-14px">
                    <div className="inline-flex align-items-center">
                        <IconFsTruck size_icon_ratio={4} />

                        <span className="margin-left-5px">
                            {transport_info}
                        </span>
                    </div>

                    <div className="FsPPurShopHead_transport_separate margin-left-8px margin-right-8px"></div>

                    <div className="color-fashion text-upper">
                        {transport_status}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsPPurShopHead;
