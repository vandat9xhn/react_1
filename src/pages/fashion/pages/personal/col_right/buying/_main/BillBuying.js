import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';

import { API_FashionBuy_LC } from '../../../../../../../api/api_django/fashion/APIFashionToken';
// 
import { ParseLocationSearch } from '../../../../../../../_some_function/ParseLocationSearch';
// 
import { openScreenConfirm } from '../../../../../../../component/_screen/type/confirm/ScreenConfirm';
//
import CircleLoading from '../../../../../../../component/waiting/circle_loading/CircleLoading';
import ScreenBlurShowMore from '../../../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import { params_buy } from '../../../../../__params/home/FashionParams';
//
import './BillBuying.scss';
//
import BuyingStage from '../buying_stage/_main/BuyingStage';
import BuyingShop from '../buying_shop/BuyingShop';

//
const arr_stage = ['buying', 'ready', 'delivery', 'bought'];

//
BillBuying.propTypes = {};

//
function BillBuying(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const [buying_state, setBuyingState] = useState({
        buy_obj: {
            buying: {
                buy_arr: [],
                count_buy: 0,
                has_fetched: false,
            },

            ready: {
                buy_arr: [],
                count_buy: 0,
                has_fetched: false,
            },

            delivery: {
                buy_arr: [],
                count_buy: 0,
                has_fetched: false,
            },

            bought: {
                buy_arr: [],
                count_buy: 0,
                has_fetched: false,
            },
        },

        cur_stage: 0,
        is_fetching: false,
    });

    const { buy_obj, cur_stage, is_fetching } = buying_state;
    const { buy_arr, count_buy, has_fetched } = buy_obj[arr_stage[cur_stage]];

    //
    const cancel_obj = useRef({
        buy_shop_ix: 0,
        item_ix: 0,
        item_id: 0,
    });

    //
    useEffect(() => {
        handlePathnameChange();
    }, [location.pathname]);

    //
    function handlePathnameChange() {
        if (!location.pathname.endsWith('/buying')) {
            return;
        }

        const stage = getBuyingStage();

        history.replaceState('', '', '?stage=' + stage);
        !buy_arr.length &&
            getData_API_Buying({
                cur_stage: arr_stage.indexOf(stage),
            });
    }

    /* --------------------------------------- */

    //
    function getBuyingStage() {
        let stage = ParseLocationSearch()['stage'];
        if (arr_stage.indexOf(stage) == -1) {
            stage = 'buying';
        }

        return stage;
    }

    //
    function startFetchingData(start_obj_state = {}) {
        setBuyingState((buying_state) => ({
            ...buying_state,
            ...start_obj_state,
            is_fetching: true,
        }));
    }

    //
    async function getData_API_Buying(start_obj_state = {}) {
        startFetchingData(start_obj_state);

        const stage = getBuyingStage();
        const is_pagination = 'bought' == stage;
        const params = {
            status: stage,
        };

        if (is_pagination) {
            params.page = 1;
            params.size = 5;
        }

        const res = await API_FashionBuy_LC('GET', {
            ...params,
            ...params_buy,
        });

        setBuyingState((buying_state) => ({
            ...buying_state,
            buy_obj: {
                ...buying_state.buy_obj,
                [stage]: {
                    buy_arr: is_pagination ? res.data.data : res.data,
                    count_buy: is_pagination ? res.data.count : 0,
                    has_fetched: true,
                },
            },
            is_fetching: false,
        }));
    }

    //
    async function getMore_API_Buying() {
        startFetchingData();
        const stage = arr_stage[cur_stage];
        //
        const params = {
            ...params_buy,
            page: 1,
            size: 5,
            c_count: buy_arr.length,
            status: stage,
        };
        //
        const res = await API_FashionBuy_LC('GET', params);

        setBuyingState({
            ...buying_state,
            buy_obj: {
                ...buy_obj,
                [stage]: {
                    ...buy_obj[stage],
                    buy_arr: [...buy_arr, ...res.data.data],
                },
            },
            is_fetching: false,
        });
    }

    //
    function handleChooseStep(new_cur_stage) {
        if (new_cur_stage == cur_stage) {
            return;
        }

        history.replaceState('', '', '?stage=' + arr_stage[new_cur_stage]);

        if (buy_obj[arr_stage[new_cur_stage]].has_fetched) {
            setBuyingState({
                ...buying_state,
                cur_stage: new_cur_stage,
            });
        } else {
            getData_API_Buying({
                cur_stage: new_cur_stage,
            });
        }
    }

    /* ---------------- CANCEL ----------------- */

    //
    function openConFirmCancelBuying(buy_shop_ix, item_ix, item_id) {
        cancel_obj.current = { buy_shop_ix, item_ix, item_id };

        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Cancel Product',
            notification: 'Do you really want to cancel buying this product?',
            handleConfirm: conFirmCancelBuying,
        })
    }

    //
    function conFirmCancelBuying() {
        console.log(cancel_obj);
    }

    //
    return (
        <div>
            <div>
                <div>
                    <h2 className="margin-0 text-align-center text-secondary">
                        Bill
                    </h2>

                    <div>
                        <BuyingStage
                            count_stage={4}
                            completed_stage_ix={cur_stage + 1}
                            handleChooseStep={handleChooseStep}
                        />
                    </div>

                    <div className={!has_fetched ? 'display-none' : ''}>
                        {buy_arr.map((buy_shop, ix) => (
                            <div
                                key={`BillBuying_item_${ix}`}
                                className="BillBuying_item"
                            >
                                <BuyingShop
                                    buy_shop={buy_shop}
                                    buy_shop_ix={ix}
                                    openConFirmCancelBuying={
                                        openConFirmCancelBuying
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="width-fit-content margin-auto">
                <ScreenBlurShowMore
                    title="Show more"
                    is_show_more={count_buy > buy_arr.length}
                    is_fetching={is_fetching}
                    //
                    handleShowMore={getMore_API_Buying}
                    FetchingComponent={CircleLoading}
                />
            </div>

            <div
                className={
                    has_fetched && !is_fetching && buy_arr.length == 0
                        ? 'margin-0 text-align-center text-secondary'
                        : 'display-none'
                }
            >
                No BILL
            </div>
        </div>
    );
}

export default BillBuying;
