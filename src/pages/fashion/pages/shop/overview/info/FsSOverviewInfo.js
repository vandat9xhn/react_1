import React from 'react';
import PropTypes from 'prop-types';
//
import { getShopInfoArrInShop } from '../../../../../../_some_function/fashion/getShopInfoArr';
//
import './FsSOverviewInfo.scss';

//
FsSOverviewInfo.propTypes = {};

//
function FsSOverviewInfo({ shop_info }) {
    const {
        rating,
        rate_count,
        reply_chat,
        time_joined,
        products,
        reply_time,
        followed,
        following,
    } = shop_info;

    const shop_info_arr = getShopInfoArrInShop({
        rating,
        rate_count,
        reply_chat,
        time_joined,
        products,
        reply_time,
        followed,
        following,
    });

    //
    return (
        <div className="FsSOverviewInfo h-100per font-14px text-cap">
            <div className="FsSOverviewInfo_row h-100per display-flex flex-col flex-wrap">
                {shop_info_arr.map((shop_overview_obj, ix) => (
                    <div key={ix} className="padding-y-10px">
                        <div></div>

                        <div className="inline-block">
                            <div className="inline-block">
                                {shop_overview_obj.title}:
                            </div>

                            <div className="inline-block margin-left-5px color-fashion">
                                {shop_overview_obj.value}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FsSOverviewInfo;
