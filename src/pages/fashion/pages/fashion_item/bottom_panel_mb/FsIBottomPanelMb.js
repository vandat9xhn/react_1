import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
import { context_fashion_item } from '../../../../../_context/fashion/item/context_fashion_item';
//
import { openScreenNotice } from '../../../../../component/_screen_once/notice/ScreenNotice';
//
import IconsMenu from '../../../../../_icons_svg/icons_menu/IconsMenu';
//
import './FsIBottomPanelMb.scss';

//
FsIBottomPanelMb.propTypes = {};

//
function FsIBottomPanelMb({}) {
    //
    const { openRoomChat, openScreenOnce, closeScreenOnce } =
        useContext(context_api);

    const {
        shop_info,
        item_info,

        count,
        model_ix,

        wait_add_cart,

        addToCart,
        handleBuyNow,
    } = useContext(context_fashion_item);

    //
    function openChat() {
        openRoomChat(shop_info.id);
    }

    //
    function detectCanAddCart() {
        if (count <= 0) {
            return false;
        }

        if (item_info.tier_variations.length && model_ix == -1) {
            openScreenNotice({
                openScreenOnce: openScreenOnce,
                ComponentNotice: (
                    <div className="FsIBottomPanelMb_notice padding-y-20px bg-shadow-8 brs-5px display-flex-center text-white">
                        Hãy chọn loại sản phẩm!
                    </div>
                ),
            });

            setTimeout(() => {
                closeScreenOnce();
            }, 1000);

            return false;
        }

        return true
    }

    //
    function onAddCart() {
        if (detectCanAddCart()) {
            addToCart();
        }
    }

    //
    function onBuyNow() {
        if (detectCanAddCart()) {
            handleBuyNow();
        }
    }

    //
    return (
        <div className="FsIBottomPanelMb fashion-width text-white">
            <div className="FsIBottomPanelMb_row h-100per display-flex align-items-center">
                <div
                    className="FsIBottomPanelMb_chat h-100per display-flex-center flex-col"
                    onClick={openChat}
                >
                    <div>
                        <IconsMenu x={200} y={200} size_icon="1rem" />
                    </div>

                    <div className="font-10px">Chat ngay</div>
                </div>

                <div className="FsIBottomPanelMb_separate h-100per padding-y-15px">
                    <div className="FsIBottomPanelMb_separate_contain h-100per"></div>
                </div>

                <div
                    className={`FsIBottomPanelMb_cart h-100per display-flex-center flex-col  ${
                        count <= 0 || wait_add_cart
                            ? 'pointer-events-none opacity-05'
                            : ''
                    }`}
                    onClick={onAddCart}
                >
                    <div>
                        <IconsMenu x={400} size_icon="1rem" />
                    </div>

                    <div className="font-10px">Thêm vào giỏ hàng</div>
                </div>

                <div
                    className="flex-grow-1 display-flex-center h-100per bg-fashion-red font-14px"
                    onClick={onBuyNow}
                >
                    <span>Mua ngay</span>
                </div>
            </div>
        </div>
    );
}

export default FsIBottomPanelMb;
