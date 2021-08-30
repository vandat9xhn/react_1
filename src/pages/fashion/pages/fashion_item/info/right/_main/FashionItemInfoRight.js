import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { context_fashion_item } from '../../../../../../../_context/fashion/item/context_fashion_item';
//
import ComponentSkeleton from '../../../../../../../component/skeleton/component_skeleton/ComponentSkeleton';
import SkeletonDiv from '../../../../../../../component/skeleton/skeleton_div/SkeletonDiv';
//
import FsItemIfRName from '../name/FsItemIfRName';
import FsItemIfRCart from '../cart/FsItemIfRCart';
import FsItemIfRCount from '../count/FsItemIfRCount';
import FsItemIfRPrice from '../price/FsItemIfRPrice';
import FsItemIfRTransport from '../transport/_main/FsItemIfRTransport';
import FsItemIfRDeal from '../deal/FsItemIfRDeal';
import FsIIfRTierVariants from '../tier_variants/_main/FsIIfRTierVariants';
import FsItemIfRShopDiscount from '../shop_discount/_main/FsItemIfRShopDiscount';
import FsIIfRRateSold from '../rate_sold/FsIIfRRateSold';
import FsItemIfRPrivacy from '../privacy/FsItemIfRPrivacy';
import FsItemIfRBundleDeal from '../bundle_deal/FsIIfRBundleDeal';

//
FashionItemInfoRight.propTypes = {};

//
function FashionItemInfoRight({}) {
    //
    const { fetched_item } = useContext(context_fashion_item);

    //
    return (
        <div className="FashionItemInfoRight">
            <div className={fetched_item ? '' : 'display-none'}>
                <div className="margin-bottom-16px">
                    <FsItemIfRName />
                </div>

                <div className="margin-bottom-16px">
                    <FsIIfRRateSold />
                </div>

                <div className="margin-bottom-16px">
                    <FsItemIfRPrice />
                </div>

                <div className="margin-bottom-16px font-14px">
                    <FsItemIfRShopDiscount />
                </div>

                <div className="margin-bottom-16px font-14px">
                    <FsItemIfRDeal />
                </div>

                <div className="margin-bottom-16px font-14px">
                    <FsItemIfRBundleDeal />
                </div>

                <div className="margin-bottom-16px font-14px">
                    <FsItemIfRTransport />
                </div>

                <div className="margin-bottom-16px font-14px">
                    <FsIIfRTierVariants />
                </div>

                <div className="margin-bottom-16px font-14px">
                    <FsItemIfRCount />
                </div>

                <div className="margin-bottom-16px font-14px">
                    <FsItemIfRCart />
                </div>

                <div>
                    <FsItemIfRPrivacy />
                </div>
            </div>

            <ComponentSkeleton
                component={<SkeletonDiv num={4} />}
                has_fetched={fetched_item}
            />
        </div>
    );
}

export default FashionItemInfoRight;
