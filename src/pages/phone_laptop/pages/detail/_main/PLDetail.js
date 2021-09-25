import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
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
import PLDetailProduct from '../product/_main/PLDetailProduct';
import RelativeProducts from '../relative/RelativeProducts';
//
import './PLDetail.scss';
import {
    PLDetail_handleState,
    PL_detail_initial_state_obj,
} from '../_state/_PLDetail_handleState';
import { PLDetail_handleChooseType } from '../_state/PLDetail_handleChooseType';

//
PLDetail.propTypes = {};

//
function PLDetail() {
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
        })
    }

    //
    function openDetailGift() {}

    //
    function callToOrder() {}

    //
    function handleBuyNow() {}

    //
    function goToRating() {}

    //
    function handleLike() {}

    //
    function handleShare() {}

    //
    function addToCompare() {}

    // -----

    //
    function openDetailCarousel() {}

    //
    function openDetailPost() {}

    //
    function openDetailAddress() {}

    //
    function openDetailMarket() {}

    //
    function openDetailConfig() {}

    //
    return (
        <div className="font-for-phone bg-primary">
            <div className="fashion-width">
                {has_fetched ? (
                    <React.Fragment>
                        <div className="padding-y-10px text-blue font-14px">
                            <BreadCrumb link_arr={product_obj.link_arr} />
                        </div>

                        <div>
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
                                addToCompare={addToCompare}
                                goToRating={goToRating}
                                handleLike={handleLike}
                                handleShare={handleShare}
                                //
                                openDetailCarousel={openDetailCarousel}
                                openDetailPost={openDetailPost}
                                openDetailAddress={openDetailAddress}
                                openDetailMarket={openDetailMarket}
                                openDetailConfig={openDetailConfig}
                            />
                        </div>
                    </React.Fragment>
                ) : (
                    <div className="h-100vh"></div>
                )}

                {/* <div>
                    <RelativeProducts product_id={product_id} />
                </div> */}
            </div>
        </div>
    );
}

export default PLDetail;
