import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../_context/fashion/item/context_fashion_item';
//
import { getShopInfoArr } from '../../../../../../_some_function/fashion/getShopInfoArr';
//
import './FashionOR.scss';

//
FashionOR.propTypes = {};

//
function FashionOR({}) {
    //
    const { shop_info } = useContext(context_fashion_item);

    const { rating, reply_chat, time_joined, products, reply_time, followed } =
        shop_info;

    const shop_info_arr = getShopInfoArr({
        rating,
        reply_chat,
        time_joined,
        products,
        reply_time,
        followed,
    });

    //
    return (
        <div className="FashionOR font-14px">
            <div className="FashionOR_row display-flex flex-wrap">
                {shop_info_arr.map((item, ix) => (
                    <div key={ix} className="FashionOR_col padding-8px">
                        <div className="FashionOR_col_row display-flex">
                            <div className="FashionOR_col-title text-third">
                                {item.title}
                            </div>

                            <div className="FashionOR_col-value color-fashion">
                                {item.value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FashionOR;
