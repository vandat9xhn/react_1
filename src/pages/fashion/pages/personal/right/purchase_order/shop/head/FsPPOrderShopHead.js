import React from 'react';
import PropTypes from 'prop-types';
//
import FsPPurShopHeadLeft from '../../../purchase/shop/head/left/FsPPurShopHeadLeft';

//
FsPPOrderShopHead.propTypes = {};

//
function FsPPOrderShopHead({
    shop_id,
    shop_name,

    is_like,
    is_mall,
    is_plus,

    openChat,
}) {
    return (
        <div className="FsPPOrderShopHead">
            <div className="FsPPOrderShopHead_row flex-between-center">
                <div>
                    <FsPPurShopHeadLeft
                        shop_id={shop_id}
                        shop_name={shop_name}
                        is_like={is_like}
                        is_mall={is_mall}
                        is_plus={is_plus}
                        openChat={openChat}
                    />
                </div>

                <div></div>
            </div>
        </div>
    );
}

export default FsPPOrderShopHead;
