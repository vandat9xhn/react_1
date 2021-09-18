import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import FsPPurShopHeadLeft from '../left/FsPPurShopHeadLeft';
import FsPPurShopHeadRight from '../right/FsPPurShopHeadRight';
//
import './FsPPurShopHead.scss';

//
FsPPurShopHead.propTypes = {
    ...FsPPurShopHeadLeft.propTypes,
    ...FsPPurShopHeadRight.propTypes,
};

//
function FsPPurShopHead({
    shop_id,
    shop_name,

    is_like,
    is_mall,
    is_plus,

    transport_status,
    order_status,

    openChat,
}) {
    //
    return (
        <div className="FsPPurShopHead padding-bottom-10px border-bottom-blur">
            <div className="FsPPurShopHead_row flex-between-center">
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

                <div>
                    <FsPPurShopHeadRight
                        transport_status={transport_status}
                        order_status={order_status}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsPPurShopHead;
