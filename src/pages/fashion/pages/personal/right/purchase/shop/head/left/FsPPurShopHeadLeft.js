import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconsMenu from '../../../../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import FashionMallLike from '../../../../../../../components/is_like/FashionMallLike';
// 
import './FsPPurShopHeadLeft.scss';

//
FsPPurShopHeadLeft.propTypes = {};

//
function FsPPurShopHeadLeft({
    shop_id,
    shop_name,

    is_like,
    is_mall,
    is_plus,

    openChat,
}) {
    return (
        <div className="FsPPurShopHeadLeft">
            <div className="FsPPurShopHeadLeft_row flex-between-center">
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
                    className="FsPPurShopHeadLeft_chat btn-hv btn-active inline-flex align-items-center margin-left-8px margin-right-8px border-blur padding-x-8px padding-y-3px brs-3px bg-fashion-red text-white font-12px cursor-pointer"
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
        </div>
    );
}

export default FsPPurShopHeadLeft;
