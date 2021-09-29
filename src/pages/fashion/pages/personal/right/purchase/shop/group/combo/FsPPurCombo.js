import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../../../_some_function/FormatNum';
//
import HasLinkOrNot from '../../../../../../../../../component/link/has_link_or_not/HasLinkOrNot';
//
import FsPPurProductBase from '../../product/base/FsPPurProductBase';
import FsShopDealLabel from '../../../../../../../components/shop_deal_label/FsShopDealLabel';

//
FsPPurCombo.propTypes = {
    item_info_arr: PropTypes.array,
    min_count: PropTypes.number,
    saved_price: PropTypes.number,
    total_price: PropTypes.number,
    has_link: PropTypes.bool,
};

FsPPurCombo.defaultProps = {
    has_link: false,
};

//
function FsPPurCombo({
    item_info_arr,
    min_count,
    saved_price,
    total_price,
    has_link,
}) {
    //
    return (
        <div className="FsPPurCombo padding-y-12px">
            <div>
                {item_info_arr.map((item_info, ix) => (
                    <div key={item_info.id} className="padding-bottom-12px">
                        <HasLinkOrNot
                            has_link={has_link}
                            link_to={`/fashion:${item_info.id}`}
                        >
                            <FsPPurProductBase
                                name={item_info.name}
                                img={item_info.img}
                                quantity={item_info.quantity}
                                model_name={item_info.model_name}
                            />
                        </HasLinkOrNot>
                    </div>
                ))}
            </div>

            <div className="flex-end align-items-center">
                <div className="FsPPurCombo_deal_label">
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
