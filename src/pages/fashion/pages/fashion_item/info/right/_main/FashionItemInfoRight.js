import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
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
import FsItemIfRError from '../error/FsItemIfRError';

//
FashionItemInfoRight.propTypes = {};

//
function FashionItemInfoRight({}) {
    //
    const { item_info, count, model_ix, error_add_cart, fetched_item } =
        useContext(context_fashion_item);

    //
    return (
        <div className="FashionItemInfoRight">
            <div className={fetched_item ? '' : 'display-none'}>
                <div className="margin-bottom-16px">
                    <FsItemIfRName />
                </div>

                {IS_MOBILE &&
                item_info.total_add_cart == 0 &&
                ((item_info.tier_variations.length &&
                    model_ix >= 0 &&
                    count <= 0) ||
                    (item_info.tier_variations.length == 0 && count <= 0)) ? (
                    <div className="margin-bottom-16px">
                        <div className="text-red font-14px">Đã hết hàng</div>
                    </div>
                ) : null}

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

                {IS_MOBILE ? null : (
                    <React.Fragment>
                        <div className="margin-bottom-16px font-14px">
                            <FsItemIfRCount />
                        </div>

                        <div
                            className={`margin-bottom-16px font-14px ${
                                error_add_cart ? '' : 'display-none'
                            }`}
                        >
                            <FsItemIfRError error_add_cart={error_add_cart} />
                        </div>

                        <div className="margin-bottom-16px font-14px">
                            <FsItemIfRCart />
                        </div>
                    </React.Fragment>
                )}

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
