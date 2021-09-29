import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';
//
import { ParseLocationSearch } from '../../../../../../../_some_function/ParseLocationSearch';

import { API_FashionBuy_LC } from '../../../../../../../api/api_django/fashion/APIFashionToken';
//
import { useMultiDataKey } from '../../../../../../../_hooks/useMultiDataKey';
import { useObserverGetData } from '../../../../../../../_hooks/useObserverGetData';
import { useForceUpdate } from '../../../../../../../_hooks/UseForceUpdate';
//
import { openScreenConfirm } from '../../../../../../../component/_screen/type/confirm/ScreenConfirm';
//
import FetchingDiv from '../../../../../../../component/some_div/fetching/FetchingDiv';
//
import {
    FsPer_ARR_PURCHASE,
    FsPer_ARR_STAGE,
    FsPer_handleDataState,
} from '../_state/_FsPer_handleDataState';
//
import FsPPurchaseShop from '../shop/_main/FsPPurchaseShop';
import FsPPurchaseHead from '../head/_main/FsPPurchaseHead';
import FsPPurchaseRowSearch from '../row_search/FsPPurchaseRowSearch';
import FsPPurchaseOrder from '../../purchase_order/_main/FsPPurchaseOrder';
//
import './FsPersonalPurchase.scss';
import '../_mobile_css/FsPersonalPurchaseMb.scss';
import '../_mobile_css/FsPPurchaseShopMb.scss';
// 
import '../_mobile_css/FsPPurchaseOrderMb.scss';
import '../_mobile_css/FsPPOrderAddressProcessMb.scss';
import '../_mobile_css/FsPPOrderStepsMb.scss';

//
function getNewKey() {
    let new_keys = ParseLocationSearch()['stage'];
    let new_key = '';

    if (typeof new_keys == 'object') {
        new_key = new_keys[0];
    } else {
        new_key = new_keys;
    }

    if (!FsPer_ARR_STAGE.includes(new_key)) {
        new_key = 'all';
    }

    return new_key;
}

//
FsPersonalPurchase.propTypes = {};

//
function FsPersonalPurchase(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const [count_new_arr, setCountNewArr] = useState([0, 0, 0, 0, 0, 0]);
    const [user_info, setUserInfo] = useState({
        name: 'Nguyen A',
        phone: '0123456789',
        address: 'adsad, Mo Lao, Ha Dong, Ha Noi',
    });

    //
    const ref_value_search = useRef('');
    const ref_fake_elm_end = useRef(null);

    //
    const {
        state_obj,

        ref_c_key,
        ref_fetching,
        ref_is_max,

        getData_API,
        handleChangeKey,
    } = useMultiDataKey({
        initial_key: getNewKey(),
        handle_API_L: handle_API_Buying,
    });

    const { obj, c_key, is_fetching } = state_obj;
    const purchase_step = FsPer_ARR_STAGE.indexOf(c_key);

    //
    const { observerShowMore } = useObserverGetData({
        getData_API: getData_API,
        getIsMax: () => ref_is_max.current[ref_c_key.current],
        getIsFetching: () => ref_fetching.current,

        unobserve_when_max: false,
    });

    //
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        getData_API();
    }, []);

    useEffect(() => {
        if (location.pathname == '/fashion/user/purchase') {
            handleObserver();
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    //
    useEffect(() => {
        if (location.pathname == '/fashion/user/purchase') {
            let new_key = ParseLocationSearch()['stage'];

            if (!FsPer_ARR_STAGE.includes(new_key)) {
                new_key = 'all';
                history.replaceState('', '', '?stage=' + new_key);
            }

            handleChangeKey(new_key);
        }
    }, [location.search]);

    // --------

    async function handle_API_Buying(new_key, c_count) {
        const res = await API_FashionBuy_LC({
            method: 'GET',
            params: {
                c_count: c_count,
                type: new_key,
                page: 1,
                size: 5,
                search: new_key == 'all' ? ref_value_search.current : '',
            },
        });

        return FsPer_handleDataState({ data: res.data });

        // return res.data;
    }

    // ------- COMMON

    function handleObserver() {
        observerShowMore({
            fake_elm_end: ref_fake_elm_end.current,
            way_scroll: 'to_bottom',
            rootMargin: '0px 0px 500px 0px',
            margin: 500,
        });
    }

    // --------

    //
    function handleChooseStep(new_key_ix) {
        const new_key = FsPer_ARR_STAGE[new_key_ix];

        if (new_key == c_key) {
            return;
        }

        history.replaceState('', '', '?stage=' + new_key);
        forceUpdate();
    }

    //
    function handleSearch(value_search) {
        ref_value_search.current = value_search;
        getData_API(c_key, true);
    }

    //
    function handleBuyAgain(purchase_ix) {
        console.log(purchase_ix);
    }

    //
    function goToOrder(order_id) {
        history.pushState('', '', '/fashion/user/purchase/order/' + order_id);
        forceUpdate();
    }

    //
    function openConFirmCancelBuying(purchase_ix, group_ix, item_ix) {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Cancel Product',
            notification: 'Do you really want to cancel buying this product?',
            handleConfirm: () => {
                conFirmCancelBuying(purchase_ix, group_ix, item_ix);
            },
        });
    }

    //
    function conFirmCancelBuying(purchase_ix, group_ix, item_ix) {
        console.log(purchase_ix, group_ix, item_ix);
    }

    //
    return location.pathname == '/fashion/user/purchase' ? (
        <div className="FsPersonalPurchase">
            <div className="margin-bottom-15px">
                <FsPPurchaseHead
                    arr_purchase={FsPer_ARR_PURCHASE}
                    purchase_step={purchase_step}
                    count_new_arr={count_new_arr}
                    handleChoose={handleChooseStep}
                />
            </div>

            <div className={`${obj[c_key].has_fetched ? '' : 'display-none'}`}>
                {c_key == 'all' ? (
                    <div className="margin-bottom-15px">
                        <FsPPurchaseRowSearch handleSearch={handleSearch} />
                    </div>
                ) : null}

                <div className={obj[c_key].has_fetched ? '' : 'display-none'}>
                    {obj[c_key].data_arr.map((purchase_obj, ix) => (
                        <div
                            key={`${ix}`}
                            className="FsPersonalPurchase_item margin-bottom-10px"
                        >
                            <FsPPurchaseShop
                                purchase_ix={ix}
                                order_id={purchase_obj.id}
                                shop_info={purchase_obj.shop_info}
                                group_arr={purchase_obj.group_arr}
                                transport_status={
                                    purchase_obj.transport_obj.status
                                }
                                order_status={purchase_obj.order_status}
                                total_price={purchase_obj.total_price}
                                //
                                handleBuyAgain={handleBuyAgain}
                                goToOrder={goToOrder}
                            />
                        </div>
                    ))}
                </div>

                <div
                    ref={ref_fake_elm_end}
                    className="FsPersonalPurchase_fetching width-fit-content margin-auto padding-1px"
                >
                    <FetchingDiv is_fetching={is_fetching} />
                </div>
            </div>

            {obj[c_key].has_fetched ? null : (
                <div className="FsPersonalPurchase_not_fetched bg-primary"></div>
            )}

            <div
                className={
                    obj[c_key].has_fetched &&
                    !is_fetching &&
                    obj[c_key].data_arr.length == 0
                        ? 'display-flex-center h-100vh'
                        : 'display-none'
                }
            >
                No BILL
            </div>
        </div>
    ) : /fashion\/user\/purchase\/order\/\d+/.test(location.pathname) ? (
        obj[c_key].has_fetched ? (
            <FsPPurchaseOrder
                user_info={user_info}
                purchase_obj={obj[c_key].data_arr[0]}
                c_step={4}
            />
        ) : null
    ) : null;
}

export default FsPersonalPurchase;
