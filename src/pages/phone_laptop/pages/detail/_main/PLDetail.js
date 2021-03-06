import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
import makeFormData from '../../../../../_some_function/makeFormData';
//
import {
    API_PhoneOrder_C,
    API_PhoneLaptop_R,
} from '../../../../../api/api_django_no_token/phone_laptop/PhoneLaptopAPI';
//
import { useScreenFetching } from '../../../../../_hooks/UseScreenFetching';
//
import { openScreenNotice } from '../../../../../component/_screen_once/notice/ScreenNotice';
//
import BreadCrumb from '../../../../../component/bread_crumb/BreadCrumb';
//
import {
    PLDetail_handleState,
    PL_detail_initial_state_obj,
} from '../_state/_PLDetail_handleState';
import { PLDetail_handleChooseType } from '../_state/PLDetail_handleChooseType';
import { PLDetail_handleAPICmt } from '../_state/PLDetail_handleAPICmt';
//
import PLDetailProduct from '../product/_main/PLDetailProduct';
import PLDetailRelative from '../relative/_main/PLDetailRelative';
import PLDetailSeen from '../seen/_main/PLDetailSeen';
import PLComments from '../../../components/comments/_main/PLComments';
//
import './PLDetail.scss';
//
import '../_mobile_css/PhoneDetailHeadMb.scss';
import '../_mobile_css/PLCommentsMb.scss';
import '../_mobile_css/PLDetailAreaMb.scss';
import '../_mobile_css/PLDetailCarouselMb.scss';
import '../_mobile_css/PLDetailGroupsMb.scss';
import '../_mobile_css/PLDetailMarket Mb.scss';

import '../_mobile_css/PLDetailPolicyMb.scss';
import '../_mobile_css/PLDetailPostMb.scss';
import '../_mobile_css/PLDetailProductMb.scss';
import '../_mobile_css/PLDetailPromotionMb.scss';
import '../_mobile_css/PLDetailRatingMb.scss';

import '../_mobile_css/PLDetailRelativeMb.scss';
import '../_mobile_css/PLDetailShortConfigMb.scss';
import '../_mobile_css/PLDetailSeenMb.scss';
import '../_mobile_css/PLDOnePriceMb.scss';
import { openScreenWithElm } from '../../../../../component/_screen/type/with_elm/ScreenWithElm';
import PLChooseAddressScreen from '../../../components/choose_address/_screen/PLChooseAddressScreen';

//
PLDetail.propTypes = {};

//
function PLDetail() {
    //
    const { openScreenFloor, closeScreenFloor } = useContext(context_api);

    //
    const product_id = GetIdSlug();

    //
    const [state_obj, setStateObj] = useState(PL_detail_initial_state_obj());

    const { product_obj, price_ix, has_fetched } = state_obj;

    //
    useEffect(() => {
        window.scrollTo(0, 0);

        getData_API_Product();
    }, [product_id]);

    // --------

    //
    async function getData_API_Product() {
        try {
            setStateObj(PL_detail_initial_state_obj());

            const res = await API_PhoneLaptop_R(product_id);

            document.title = res.data.name;

            PLDetail_handleState({
                data: res.data,
                setStateObj: setStateObj,
            });
        } catch (e) {
            console.log(e);
        }
    }

    //
    function handle_API_Comment(params = {}) {
        return PLDetail_handleAPICmt({ product_id: product_id, ...params });
    }

    // --------

    //
    function handleChooseType(params) {
        PLDetail_handleChooseType({
            ...params,
            setStateObj: setStateObj,
        });
    }

    //
    function choosePrice(new_price_ix) {
        setStateObj({
            ...state_obj,
            price_ix: new_price_ix,
        });
    }

    //
    function callToOrder() {
        console.log('Call to order');
    }

    //
    function handleBuyNow() {}

    //
    function handleLike() {
        console.log('Like on fb');
    }

    //
    function handleShare() {
        console.log('Share on fb');
    }

    // ----

    //
    function handleSendDiscuss(content) {
        console.log(content);
    }

    // ----- OPEN

    //
    function openDetailGift() {}

    //
    function openDetailRateImg() {}

    //
    function openDetailRate() {}

    //
    function openDetailCarousel() {}

    //
    function openDetailPost() {}

    //
    function openDetailAddress() {
        openScreenWithElm({
            openScreenFloor: openScreenFloor,
            elm: <PLChooseAddressScreen closeScreen={closeScreenFloor} />,
        });
    }

    //
    function openDetailMarket() {}

    //
    function openDetailConfig() {}

    //
    return (
        <div
            className={`PLDetail font-for-phone bg-primary font-14px ${
                IS_MOBILE ? 'PLDetail-mobile' : ''
            }`}
        >
            <div className="PLDetail_contain fashion-width">
                {has_fetched ? (
                    <React.Fragment>
                        <div className="PLDetail_breadcrumb padding-y-10px text-blue font-14px">
                            <BreadCrumb link_arr={product_obj.link_arr} />
                        </div>

                        <div className="margin-bottom-20px">
                            <PLDetailProduct
                                product_obj={product_obj}
                                price_ix={price_ix}
                                //
                                handleChooseType={handleChooseType}
                                choosePrice={choosePrice}
                                openDetailGift={openDetailGift}
                                handleBuyNow={handleBuyNow}
                                callToOrder={callToOrder}
                                //
                                handleLike={handleLike}
                                handleShare={handleShare}
                                //
                                openDetailRateImg={openDetailRateImg}
                                openDetailRate={openDetailRate}
                                handleSendDiscuss={handleSendDiscuss}
                                //
                                openDetailCarousel={openDetailCarousel}
                                openDetailPost={openDetailPost}
                                openDetailAddress={openDetailAddress}
                                openDetailMarket={openDetailMarket}
                                openDetailConfig={openDetailConfig}
                            />
                        </div>

                        <div className="PLDetail_relative">
                            <PLDetailRelative product_id={product_id} />
                        </div>

                        <div className="PLDetail_seen">
                            <PLDetailSeen product_id={product_id} />
                        </div>

                        <div className="PLDetail_comment">
                            <PLComments handle_API_L={handle_API_Comment} />
                        </div>
                    </React.Fragment>
                ) : (
                    <div className="h-100vh"></div>
                )}
            </div>
        </div>
    );
}

export default PLDetail;
