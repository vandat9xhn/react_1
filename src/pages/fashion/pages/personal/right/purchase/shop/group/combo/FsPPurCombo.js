import React from 'react';
import PropTypes from 'prop-types';
//
import FsPPurProductBase from '../../product/base/FsPPurProductBase';
import FsShopDealLabel from '../../../../../../../components/shop_deal_label/FsShopDealLabel';
import { formatNum } from '../../../../../../../../../_some_function/FormatNum';

//
FsPPurCombo.propTypes = {};

//
function FsPPurCombo({ item_info_arr, min_count, saved_price, total_price }) {
    //
    return (
        <div className="FsPPurCombo padding-y-12px">
            <div>
                {item_info_arr.map((item_info, ix) => (
                    <div key={item_info.id} className="padding-bottom-12px">
                        <FsPPurProductBase
                            name={item_info.name}
                            img={item_info.img}
                            quantity={item_info.quantity}
                            model_name={item_info.model_name}
                        />
                    </div>
                ))}
            </div>

            <div className="flex-end align-items-center">
                <div>
                    <FsShopDealLabel label="Combo khuyến mãi" />
                </div>

                <div className="margin-left-10px font-12px color-fashion">
                    Mua {min_count}, Tiết kiệm ₫{saved_price}
                </div>

                <div className="margin-left-10px font-14px">
                    ₫{formatNum(total_price)}
                </div>
            </div>
        </div>
    );
}

export default FsPPurCombo;
