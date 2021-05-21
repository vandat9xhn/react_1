import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
//
import {
    API_FashionProduct_L,
    API_FashionProduct_R,
} from '../../../../../api/api_django_no_token/fashion/APIFashionNoToken';
import {
    API_FashionCart_LC,
    API_FashionCart_UD,
    API_FashionRate_C,
} from '../../../../../api/api_django/fashion/APIFashionToken';

import makeFormData from '../../../../../_some_function/makeFormData';
// 
import { context_api } from '../../../../../_context/ContextAPI';
import { useNewCount } from '../../../../../_custom_hooks/useCount';
import { useMounted } from '../../../../../_custom_hooks/useMounted';
// 
import { requestAddCart } from '../../../../../redux/action/action_fashion';
import { actionFashionChangeCountCart } from '../../../../../redux/action/action_count_cart';
import FashionCartSuccess from '../add_cart_success/FashionCartSuccess';
import FashionOwner from '../owner/_main/FashionOwner';
import ConfirmDiv from '../../../../../component/some_div/confirm_div/ConfirmDiv';
import StarsRate from '../../../../../component/stars_rate/_main/StarsRate';
//
import { owner_info } from '../../../_default/FashionDefault';
import FashionH from '../../../components/head/_main/FashionH';
import FashionRate from '../rate/FashionRate';
import FashionRlt from '../relative/FashionRlt';
import FashionInfo from '../info/FashionInfo';
import ConfirmRate from '../confirm_rate/ConfirmRate';
import CommentItem from '../comment/_main/CommentItem';
// 
import './FashionItem.scss';

// 
FashionItem.propTypes = {
    match: PropTypes.object,
};

//
function FashionItem(props) {
    // context
    const user_id = useContext(context_api).user.id;

    // 
    const { id } = props.match.params;

    // redux
    // const cart_list = useSelector(state => state.cart.list)
    const { count_cart } = useSelector((state) => state.count_cart_obj);
    const dispatch = useDispatch();

    // state
    const [item, setItem] = useState({});
    const [show_notice_cart_success, setShowNoticeCartSuccess] = useState(
        false
    );
    const [wait_add_cart, setWaitAddCart] = useState(false);
    const [owner, setOwner] = useState({ owner_profile: {}, owner_info: [] });
    const [fashion_rates, setFashionRates] = useState({});
    const [open_rate, setOpenRate] = useState(false);
    const [relative_products, setRelativeProducts] = useState([]);

    // use hook
    const [
        count,
        countUp,
        countDown,
        // 
        beforeCountNum,
        countNum,
        countNumDone,
        // 
        changeMax,
        changeMin,
    ] = useNewCount(0, 0, 0);
    const mounted = useMounted();

    //
    useEffect(() => {
        document.title = 'Shopping';
        window.scrollTo(0, 0);
        getItem(id);
        getRelativeProducts(id);
    }, []);

    /* ------------------------ COMMON ------------------------ */

    //
    function handleChangeMaxMinCount(max) {
        changeMax(max);
        changeMin(max == 0 ? 0 : 1);
    }

    //
    function handleGetAPI_Common(data_item) {
        document.title = data_item.name;
        const {
            rates,
            count_rate,
            user_rate,
            arr_count_rate,
            total_rate,
            // 
            shop,
            total,
            total_add_cart,
        } = data_item;
        //
        setItem(data_item);
        setFashionRates({
            rates: rates,
            user_rate: user_rate,
            rate_temp: user_rate,
            rate_arr: arr_count_rate,
            rate_avg: total_rate ? total_rate / count_rate : 0,
            rate_count: count_rate,
        });
        setOwner({
            owner_profile: {
                id: shop.id,
                picture: shop.picture,
                name: shop.name,
                address: shop.address,
                info: shop.info,
                time_online:
                    new Date().getTime() -
                    new Date('2021-02-17T16:20:00').getTime(),
            },
            owner_info: owner_info,
        });
        //
        handleChangeMaxMinCount(total - total_add_cart);
    }

    /* ------------------------ GET API ------------------------ */

    //
    async function getItem(id) {
        const res = await API_FashionProduct_R(id);
        mounted && handleGetAPI_Common(res.data);
    }

    //
    async function getRelativeProducts(id) {
        const res = await API_FashionProduct_L({
            page: 1,
            size: 20,
            relative_id: id,
        });
        setRelativeProducts(res.data.data);
    }

    /* ------------------------ HANDLE RATE ------------------------ */

    //
    function handleRateNow() {
        setOpenRate(true);
        const rate_user = fashion_rates.rates[0];
        if (rate_user && rate_user.profile_user == user_id) {
            setTimeout(() => {
                document.querySelector('.FashionItem_rate-textarea').value =
                    rate_user.text || '';
            }, 1);
        } else {
            fashion_rates.rate_temp = 5
        }
    }
    function closeConfirmRate() {
        fashion_rates.rate_temp = fashion_rates.user_rate;
        setOpenRate(false);
    }
    //
    function handleChangeRate(star_ix) {
        setFashionRates({
            ...fashion_rates,
            rate_temp: star_ix,
        });
    }
    //
    async function handleRate() {
        const {
            rates,
            rate_avg,
            rate_arr,
            user_rate,
            rate_temp,
            rate_count,
        } = fashion_rates;
        //
        if (user_rate > 0) {
            rate_arr[user_rate - 1] -= 1;
            rates[0].text = document.querySelector(
                '.FashionItem_rate-textarea'
            ).value;
            rates[0].rate = rate_temp;
            rates[0].updated_time = new Date();
        } else {
            rates.push({
                product_model: id,
                profile_user: user_id,
                text: document.querySelector('.FashionItem_rate-textarea')
                    .value,
                rate: rate_temp,
                updated_time: new Date(),
                created_time: new Date(),
            });
            fashion_rates.rate_count += 1;
        }
        //
        rate_arr[rate_temp - 1] += 1;
        fashion_rates.user_rate = rate_temp;
        fashion_rates.rate_avg =
            Math.round(
                (100 * (rate_avg * rate_count + rate_temp - user_rate)) /
                    fashion_rates.rate_count
            ) / 100;
        setOpenRate(false);
        //
        const formData = makeFormData({
            profile_user: user_id,
            product_model: id,
            rate: rate_temp,
            text: document.querySelector('.FashionItem_rate-textarea').value,
        });
        await API_FashionRate_C(formData);
    }

    /* ------------------------ COUNT ------------------------ */

    //
    function onBeforeCountNum(e) {
        beforeCountNum(e.target.value);
    }
    //
    function onCountNum(e) {
        countNum(e.target.value);
    }
    //
    function onCountNumDone(e) {
        countNumDone(e.target.value);
    }
    //
    function onCountUp() {
        countUp();
    }
    //
    function onCountDown() {
        countDown();
    }

    /* ------------------------ ADD CART ------------------------ */

    //
    async function addToCart() {
        if (localStorage.is_login != 1) {
            window.location.href = '/login-form';
            return;
        }
        //
        setWaitAddCart(true);
        const { total_add_cart } = item;
        const new_total_add_cart = total_add_cart + count;
        const formData = makeFormData({
            // shop_model: item.shop_model,
            product_model: id,
            quantity: new_total_add_cart,
        });
        await API_FashionCart_LC('POST', {}, formData);
        //
        setShowNoticeCartSuccess(true);
        !total_add_cart &&
            dispatch(actionFashionChangeCountCart(count_cart + 1));
        item.total_add_cart = new_total_add_cart;
        countNum(1);
        handleChangeMaxMinCount(item.total - new_total_add_cart);
        //
        if (mounted) {
            setWaitAddCart(false);
            setTimeout(() => {
                mounted && setShowNoticeCartSuccess(false);
            }, 800);
        }
    }

    //
    return (
        <div className="FashionItem bg-primary">
            <div className="FashionItem_head">
                <FashionH />
            </div>

            <div>
                <FashionInfo
                    item={item}
                    count={count}
                    wait_add_cart={wait_add_cart}
                    addToCart={addToCart}
                    //
                    onCountUp={onCountUp}
                    onCountDown={onCountDown}
                    onBeforeCountNum={onBeforeCountNum}
                    onCountNum={onCountNum}
                    onCountNumDone={onCountNumDone}
                />
            </div>
            <hr className="App_hr-bg" />

            <div className="FashionItem_mid">
                <div>
                    <FashionOwner owner={owner} />
                </div>

                <div>
                    <FashionRate
                        fashion_rates={fashion_rates}
                        handleRateNow={handleRateNow}
                    />
                </div>

                <div>
                    <CommentItem product_id={id} />
                </div>
                <hr className="App_hr-bg" />

                <div>
                    <FashionRlt products={relative_products} />
                </div>
            </div>

            {show_notice_cart_success && <FashionCartSuccess />}

            <ConfirmDiv
                open_confirm={open_rate}
                confirmYes={handleRate}
                closeConfirm={closeConfirmRate}
            >
                <ConfirmRate
                    rate_avg={fashion_rates.rate_temp || 5}
                    handleChangeRate={handleChangeRate}
                />
            </ConfirmDiv>
        </div>
    );
}

export default FashionItem;
