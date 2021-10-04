import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import IconCaret from '../../../../../../../../_icons_svg/_icon_caret/IconCaret';
import IconsMenu from '../../../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import FavWithLetter from '../../../../../../../../component/fav_with_letter/FavWithLetter';
import PLHeadSearch from '../../../../_components/search/PLHeadSearch';
//
import './PLHeadTopLeftPc.scss';

//
PLHeadTopLeftPc.propTypes = {};

//
function PLHeadTopLeftPc({ province, handleChangeAddress }) {
    //
    return (
        <div className="PLHeadTopLeftPc h-100per">
            <div className="PLHeadTopLeftPc_row h-100per display-flex align-items-center">
                <Link
                    className="PLHeadTopLeftPc_home display-flex align-items-center margin-right-15px font-15px text-gold"
                    to="/phone-laptop"
                >
                    <FavWithLetter size_icon="32px" letter="P" />

                    <span className="margin-left-10px font-italic">
                        ReactDjangoPhone
                    </span>
                </Link>

                <div className="PLHeadTopLeftPc_separate"></div>

                <div
                    className="margin-x-15px font-11px cursor-pointer"
                    onClick={handleChangeAddress}
                >
                    <div>Xem giá, khuyến mãi tại</div>

                    <div className="display-flex align-items-center text-gold">
                        <span className="margin-right-5px">{province}</span>

                        <IconCaret size_icon="11px" fill="currentColor" />
                    </div>
                </div>

                <div className="text-555">
                    <PLHeadSearch />
                </div>

                <Link
                    className="margin-left-12px color-inherit"
                    to="/phone-laptop"
                >
                    <div className="PLHeadTopLeftPc_cart_row display-flex align-items-center padding-x-5px padding-y-4px brs-4px hv-bg-s-through">
                        <IconsMenu x={400} size_icon="18px" />

                        <span className="margin-left-10px">Giỏ hàng</span>
                    </div>
                </Link>

                <Link
                    className="margin-left-18px margin-right-12px color-inherit hv-cl-gold"
                    to="/phone-laptop"
                >
                    <div>Lịch sử</div>

                    <div>đơn hàng</div>
                </Link>

                <div className="PLHeadTopLeftPc_separate"></div>
            </div>
        </div>
    );
}

export default PLHeadTopLeftPc;
