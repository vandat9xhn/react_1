import React from 'react';
import PropTypes from 'prop-types';
//
import IconsMenu from '../../../../../../../../_icons_svg/icons_menu/IconsMenu';
//
import IconDiv from '../../../../../../../../component/some_div/icon_div/IconDiv';
//
import './FsItemIfRFoot.scss';

//
FsItemIfRFoot.propTypes = {
    max: PropTypes.number,
    total_add_cart: PropTypes.number,
    wait_add_cart: PropTypes.bool,
    addToCart: PropTypes.func,
};

//
function FsItemIfRFoot({ max, total_add_cart, wait_add_cart, addToCart }) {
    return (
        <div className="FsItemIfRFoot">
            <div className="FsItemIfRFoot_head">
                <div>
                    <span>{max} products available</span>

                    <span className="margin-left-5px text-red">
                        ({total_add_cart} in cart)
                    </span>
                </div>
            </div>

            <div className="FsItemIfRFoot_foot">
                <div
                    className={`FsItemIfRFoot_foot_add ${
                        wait_add_cart ? 'cursor-wait' : 'cursor-pointer'
                    } ${
                        max == 0 || wait_add_cart
                            ? 'pointer-events-none opacity-05'
                            : ''
                    }`}
                    onClick={addToCart}
                >
                    <IconDiv Icon={IconsMenu} x={400}>
                        Add to cart
                    </IconDiv>
                </div>
            </div>
        </div>
    );
}

export default FsItemIfRFoot;
