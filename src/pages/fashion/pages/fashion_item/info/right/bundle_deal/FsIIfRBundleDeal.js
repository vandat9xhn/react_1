import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
//
import FsShopDealLabel from '../../../../../components/shop_deal_label/FsShopDealLabel';

//
FsItemIfRBundleDeal.propTypes = {
    deal_label: PropTypes.string,
};

//
function FsItemIfRBundleDeal({}) {
    //
    const { item_info } = useContext(context_fashion_item);

    const { label } = item_info.bundle_deal_info;

    //
    return (
        <div className="FsItemIfRBundleDeal">
            <div className="display-flex align-items-center">
                <div className="fashion-item-label">
                    <span className="text-third">Combo khuyến mãi</span>
                </div>

                <FsShopDealLabel label={label} />
            </div>
        </div>
    );
}

export default FsItemIfRBundleDeal;
