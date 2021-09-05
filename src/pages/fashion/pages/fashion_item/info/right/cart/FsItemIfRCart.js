import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
// 
import IconsMenu from '../../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import IconDiv from '../../../../../../../component/some_div/icon_div/IconDiv';
//
import './FsItemIfRCart.scss';

//
FsItemIfRCart.propTypes = {
    // max: PropTypes.number,
    // total_add_cart: PropTypes.number,
    // wait_add_cart: PropTypes.bool,
    // addToCart: PropTypes.func,
};

//
function FsItemIfRCart({}) {
    //
    const { wait_add_cart, max, addToCart, c_total_add_cart } =
        useContext(context_fashion_item);

    const disabled = max == 0 || wait_add_cart;

    //
    return (
        <div className="FsItemIfRCart">
            <div className="display-flex align-items-center">
                <button
                    type="button"
                    className={`FsItemIfRCart_add display-flex-center btn btn-active btn-hv bg-fashion-heart color-fashion ${
                        wait_add_cart ? 'cursor-wait' : 'cursor-pointer'
                    } ${disabled ? 'pointer-events-none opacity-05' : ''}`}
                    disabled={disabled}
                    onClick={addToCart}
                >
                    <IconDiv
                        Icon={IconsMenu}
                        x={400}
                        size_icon={IS_MOBILE ? '1rem' : '1.5rem'}
                    >
                        <span className="font-500">
                            Thêm Vào Giỏ {IS_MOBILE ? '' : 'Hàng'}
                        </span>
                    </IconDiv>
                </button>

                <button
                    className={`FsItemIfRCart_buy display-flex-center btn btn-hv btn-active bg-fashion-red ${
                        (max == 0 && c_total_add_cart == 0) || wait_add_cart
                            ? 'pointer-events-none opacity-05'
                            : ''
                    }`}
                >
                    <span className="text-white font-500">Mua ngay</span>
                </button>
            </div>
        </div>
    );
}

export default FsItemIfRCart;
