import React from 'react';
import PropTypes from 'prop-types';
//
import PLDetailCarousel from '../../_components/carousel/_main/PLDetailCarousel';
import PLDetailPolicy from '../../_components/policy/_main/PLDetailPolicy';
import PLDetailPost from '../../_components/short_post/_main/PLDetailPost';
import PLDetailRating from '../../_components/rating/_main/PLDetailRating';
import PLDetailGroups from '../../_components/groups/_main/PLDetailGroups';
import PLDetailArea from '../../_components/area/PLDetailArea';
import PLDOnePrice from '../../_components/price/one_price/PLDOnePrice';
import PLDTwoPrice from '../../_components/price/two_price/PLDTwoPrice';
import PLDetailPromotion from '../../_components/promotion/_main/PLDetailPromotion';
import PLDetailMarket from '../../_components/market/_main/PLDetailMarket';
import PLDetailOffer from '../../_components/offer/_main/PLDetailOffer';
import PLDetailShortConfig from '../../_components/short_config/_main/PLDetailShortConfig';
//
import './PLDetailProduct.scss';
import PLDetailBtnBuy from '../../_components/btn_buy/_main/PLDetailBtnBuy';
import PLDetailInstallment from '../../_components/installment/_main/PLDetailInstallment';
import PLDetailCallOrder from '../../_components/call_order/PLDetailCallOrder';
import PhoneDetailHead from '../../head/PhoneDetailHead';

//
PLDetailProduct.propTypes = {};

//
function PLDetailProduct({
    product_obj,
    price_ix,

    handleChooseType,
    choosePrice,
    openDetailGift,
    callToOrder,
    handleBuyNow,

    addToCompare,
    goToRating,
    handleLike,
    handleShare,

    openDetailCarousel,
    openDetailPost,
    openDetailAddress,
    openDetailMarket,
    openDetailConfig,
}) {
    //
    const {
        name,
        img_main,
        new_price,
        old_price,
        discount,
        installment,

        is_coming,
        in_stock,

        rating_avg,
        count_like,
        rating_count,

        has_two_price,
        new_price_2,
        title_price_2,

        carousel_choice_arr,
        specific_vid_pics,
        has_link_more,
        link_more_name,
        link_more_to,

        policy_arr,
        post,
        group_arr,
        short_config_arr,
        installment_arr,
        province,

        promotion_obj,
        promotion_2_obj,
        offer_obj,
        offer_2_obj,
    } = product_obj;

    const type = group_arr[0].find((item) => item.is_active).title;
    const is_price_2 = has_two_price && price_ix == 1;

    const c_offer_obj = is_price_2 ? offer_2_obj : offer_obj;

    //
    return (
        <div className="PLDetailProduct font-14px">
            <div className="margin-bottom-15px">
                <PhoneDetailHead
                    name={name}
                    type={type}
                    rating_avg={rating_avg}
                    rating_count={rating_count}
                    count_like={count_like}
                    //
                    addToCompare={addToCompare}
                    goToRating={goToRating}
                    handleLike={handleLike}
                    handleShare={handleShare}
                />
            </div>

            <div className="PLDetailProduct_row display-flex">
                <div className="PLDetailProduct_left flex-shrink-0">
                    <div>
                        <PLDetailCarousel
                            choice_arr={carousel_choice_arr}
                            specific_vid_pics={specific_vid_pics}
                            has_link_more={has_link_more}
                            link_more_to={link_more_to}
                            link_more_name={link_more_name}
                            openDetailCarousel={openDetailCarousel}
                        />
                    </div>

                    <div className="margin-bottom-20px">
                        <PLDetailPolicy policy_arr={policy_arr} />
                    </div>

                    <div className="margin-bottom-20px">
                        <img
                            className="w-100per object-fit-cover"
                            src={img_main}
                            alt=""
                            height="500"
                        />
                    </div>

                    <div className="margin-bottom-20px">
                        <PLDetailPost
                            post={post}
                            openDetailPost={openDetailPost}
                        />
                    </div>

                    <div className="margin-bottom-20px">
                        <PLDetailRating />
                    </div>
                </div>

                <div className="PLDetailProduct_right flex-grow-1">
                    <div className="margin-bottom-20px">
                        <PLDetailGroups
                            group_arr={group_arr}
                            handleChooseType={handleChooseType}
                        />
                    </div>

                    <div>
                        <PLDetailArea
                            province={province}
                            openDetailAddress={openDetailAddress}
                        />
                    </div>

                    {has_two_price ? (
                        <PLDTwoPrice
                            new_price={new_price}
                            old_price={old_price}
                            new_price_2={new_price_2}
                            title_price_2={title_price_2}
                            price_ix={price_ix}
                            choosePrice={choosePrice}
                        />
                    ) : (
                        <div className="margin-bottom-20px">
                            <PLDOnePrice
                                new_price={new_price}
                                old_price={old_price}
                                discount={discount}
                                installment={installment}
                            />
                        </div>
                    )}

                    <div
                        className={`margin-bottom-20px ${
                            has_two_price
                                ? `PLDetailProduct_box_price padding-10px ${
                                      is_price_2
                                          ? 'PLDetailProduct_box_price-2'
                                          : 'PLDetailProduct_box_price-1'
                                  }`
                                : ''
                        }`}
                    >
                        <div className="margin-bottom-20px">
                            <PLDetailPromotion
                                promotion_obj={
                                    is_price_2 ? promotion_2_obj : promotion_obj
                                }
                                openDetailGift={openDetailGift}
                            />
                        </div>

                        <div
                            className={`margin-bottom-20px ${
                                is_price_2
                                    ? ''
                                    : 'padding-bottom-10px border-bottom-blur'
                            }`}
                        >
                            <PLDetailMarket
                                is_coming={is_coming}
                                in_stock={in_stock}
                                use_see_market={!is_price_2}
                                openDetailMarket={openDetailMarket}
                            />
                        </div>

                        <div className="margin-bottom-10px">
                            <PLDetailBtnBuy
                                is_price_2={is_price_2}
                                new_price_2={new_price_2}
                                handleBuyNow={handleBuyNow}
                            />
                        </div>

                        <div className="margin-bottom-10px">
                            <PLDetailInstallment
                                installment_arr={installment_arr}
                            />
                        </div>

                        <div>
                            <PLDetailCallOrder callToOrder={callToOrder} />
                        </div>

                        {c_offer_obj ? (
                            <div className="margin-top-20px">
                                <PLDetailOffer offer_obj={c_offer_obj} />
                            </div>
                        ) : null}
                    </div>

                    <div>
                        <PLDetailShortConfig
                            name={name}
                            type={type}
                            short_config_arr={short_config_arr}
                            openDetailConfig={openDetailConfig}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PLDetailProduct;
