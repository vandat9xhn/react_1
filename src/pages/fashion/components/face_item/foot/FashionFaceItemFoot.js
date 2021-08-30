import React from 'react';
import PropTypes from 'prop-types';
//
import { makePriceToPrice } from '../../../../../_some_function/makePriceToPrice';
//
import StarsRate from '../../../../../component/stars_rate/_main/StarsRate';
//
import IconHeart from '../../../../../_icons_svg/icons_like/icon_heart/IconHeart';
//
import './FashionFaceItemFoot.scss';
import FsShopDealLabel from '../../shop_deal_label/FsShopDealLabel';
import FsShopDiscountLabel from '../../shop_discount_label/FsShopDiscountLabel';

//
FashionFaceItemFoot.propTypes = {
    name: PropTypes.string,
    sold: PropTypes.number,
    rate_avg: PropTypes.number,
    shop_deals: PropTypes.array,

    shop_discount: PropTypes.string,
    address: PropTypes.string,

    old_price: PropTypes.number,
    old_price_max: PropTypes.number,
    new_price: PropTypes.number,
    new_price_max: PropTypes.number,

    show_heart_rate: PropTypes.bool,
    show_sold: PropTypes.bool,
    show_address: PropTypes.bool,
};

FashionFaceItemFoot.defaultProps = {
    show_heart_rate: true,
    show_sold: true,
    show_address: true,
};

//
function FashionFaceItemFoot({
    name,
    sold,
    rate_avg,

    shop_deals,
    address,
    shop_discount,

    old_price,
    old_price_max,
    new_price,
    new_price_max,

    show_heart_rate,
    show_sold,
    show_address,
}) {
    //
    function onLike(e) {
        e.preventDefault();

        handleLike();
    }

    //
    return (
        <div className="FashionFaceItemFoot padding-8px font-12px text-secondary">
            <div className="FashionFaceItemFoot_name overflow-hidden">
                <span>{name}</span>
            </div>

            <div className="FashionFaceItemFoot_tag display-flex align-items-center font-10px overflow-hidden">
                {shop_discount ? (
                    <FsShopDiscountLabel
                        discount={shop_discount}
                        class_main="text-nowrap"
                    />
                ) : null}

                {shop_deals.map((deal_label, ix) => (
                    <FsShopDealLabel
                        key={ix}
                        label={deal_label}
                        class_main="margin-left-2px fashion-value-padding line-12px color-fashion font-10px text-nowrap"
                    />
                ))}
            </div>

            <div className="">
                <div className="text-nowrap">
                    {old_price == 0 || old_price ? (
                        <span>
                            <del>
                                {makePriceToPrice(old_price, old_price_max)}
                            </del>
                        </span>
                    ) : null}

                    <span className="text-red">
                        ₫ {makePriceToPrice(new_price, new_price_max)}
                    </span>
                </div>

                {show_heart_rate ? (
                    <div className="flex-between-center">
                        <div
                            className="FashionFaceItemFoot_heart"
                            onClick={onLike}
                        >
                            <IconHeart />
                        </div>

                        <div>
                            <StarsRate rate_avg={rate_avg} size_icon="11px" />
                        </div>
                    </div>
                ) : null}

                {show_sold ? (
                    <div className="text-align-end">
                        <span className="text-third">Đã bán {sold}</span>
                    </div>
                ) : null}
            </div>

            {show_address ? (
                <div className="text-align-end">
                    <span className="text-third">{address}</span>
                </div>
            ) : null}
        </div>
    );
}

export default FashionFaceItemFoot;
