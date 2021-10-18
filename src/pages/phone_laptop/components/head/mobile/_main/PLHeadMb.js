import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { toggleAppHiddenTemp } from '../../../../../../_some_function/AppHiddenTemp';
//
import { useFocusBlur } from '../../../../../../_hooks/useFocusBlur';
import { useBool } from '../../../../../../_hooks/useBool';
//
import IconsProfile from '../../../../../../_icons_svg/icons_profile/IconsProfile';
import IconsMenu from '../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import FavWithLetter from '../../../../../../component/fav_with_letter/FavWithLetter';
import PortalAtBody from '../../../../../../component/portal/at_body/PortalAtBody';
//
import PLHeadSearch from '../../_components/search/PLHeadSearch';
import PLHeadMenuMb from '../menu/_main/PLHeadMenuMb';
//
import img from '../../../../../../../image/pl_random_pic_head_mb_2.png';
//
import './PLHeadMb.scss';

//
PLHeadMb.propTypes = {};

//
function PLHeadMb({ address, handleChangeAddress }) {
    //
    const { is_focus, setIsFocus } = useFocusBlur();
    const { is_true, setIsTrue, toggleBool } = useBool();

    //
    useEffect(() => {
        toggleAppHiddenTemp({ is_hidden: is_true });
    }, [is_true]);

    //
    useEffect(() => {
        setIsTrue(false);
    }, [location.pathname]);

    // ----

    //
    function handleFocusedSearch() {
        setIsFocus(true);
    }

    //
    function handleBlurSearch() {
        setIsFocus(false);
    }

    //
    function handleOpenMenu() {
        setIsTrue(true);
    }

    //
    return (
        <div className="PLHeadMb bg-black line-16px font-11px text-white">
            <div>
                <img className="w-100per" src={img} alt="" />
            </div>

            <div className="PLHeadMb_row display-flex align-items-center">
                <Link
                    className="display-block padding-x-5px text-gold"
                    to="/phone-laptop"
                >
                    <FavWithLetter letter="P" size_icon="30px" />
                </Link>

                <div className="flex-grow-1 padding-right-5px text-333">
                    <PLHeadSearch
                        input_props={{
                            onFocus: handleFocusedSearch,
                            onBlur: handleBlurSearch,
                        }}
                    />
                </div>

                <div
                    className={`${
                        is_focus
                            ? 'display-none'
                            : 'display-flex align-items-center h-100per'
                    }`}
                >
                    <div
                        className="display-flex-center padding-right-10px font-11px"
                        onClick={handleChangeAddress}
                    >
                        <IconsProfile size_icon="12px" />

                        <div>
                            <div className="PLHeadMb_address_name margin-left-3px wk-box-vertical line-clamp-2 overflow-hidden">
                                {address}
                            </div>
                        </div>
                    </div>

                    <div className="PLHeadMb_separate"></div>

                    <div className="padding-x-5px">
                        <div>Lịch sử</div>

                        <div>mua hàng</div>
                    </div>

                    <div className="PLHeadMb_separate"></div>

                    <div className="padding-x-3px">
                        <IconsMenu x={400} size_icon="30px" />
                    </div>
                </div>

                <div className="PLHeadMb_separate"></div>

                <div
                    className="padding-x-5px font-12px"
                    onClick={handleOpenMenu}
                >
                    <div>
                        <IconsMenu size_icon="25px" />
                    </div>
                </div>
            </div>

            <PortalAtBody>
                <div
                    className={`PLHeadMb_menu pos-fixed bottom-100per left-0 wh-100 z-index-lv5 bg-primary ${
                        is_true ? 'trans-y-100per' : ''
                    }`}
                >
                    <PLHeadMenuMb handleCloseMenu={toggleBool} />
                </div>
            </PortalAtBody>
        </div>
    );
}

export default PLHeadMb;
