import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_FashionBuy_LC } from '../../../../../../../api/api_django/fashion/APIFashionToken';
//
import ConfirmDiv from '../../../../../../../component/some_div/confirm_div/ConfirmDiv';
//
import { params_buy } from '../../../../../_params/FashionParams';
import BuyingStage from '../buying_stage/_main/BuyingStage';
import BuyingShop from '../buying_shop/BuyingShop';
import CircleLoading from '../../../../../../../component/waiting/circle_loading/CircleLoading';
import ScreenBlurShowMore from '../../../../../../../component/_screen_blur/_component/foot/ScreenBlurShowMore';

//
const arr_stage = ['buying', 'ready', 'delivery', 'bought'];
const search_stage = () => location.search.replace('?stage=', '')
//
BillBuying.propTypes = {};

//
function BillBuying(props) {
    //
    const [buy_arr, setBuyArr] = useState([]);
    const [count_buy, setCountBuy] = useState(0);
    const [cur_stage, setCurStage] = useState(0);
    const [open_confirm, setOpenConfirm] = useState(false);
    const [first_fetching, setFirstFetching] = useState(false);
    const [is_fetching, setIsFetching] = useState(false);
    //
    const cancel_obj = useRef({
        // buy_package_ix: 0,
        buy_shop_ix: 0,
        item_ix: 0,
        item_id: 0,
    });

    //
    useEffect(() => {
        if (location.pathname.endsWith('/buying')) {
            if (cur_stage == 0) {
                const stage = search_stage();
                const new_cur_stage = arr_stage.indexOf(stage) + 1 || 1;
                history.replaceState('', '', '?stage=' + arr_stage[new_cur_stage - 1]);
                getData_API_Buying();
                setCurStage(new_cur_stage);
            } else {
                console.log(cur_stage);
                history.replaceState('', '', '?stage=' + arr_stage[cur_stage - 1]);
            }
        }
        
    }, [location.pathname]);

    //
    async function getData_API_Buying() {
        setFirstFetching(true)
        // 
        const search = search_stage().toUpperCase()
        const is_pagination = ['BOUGHT'].includes(search)
        const params = {};
        // 
        params.status = search
        if (is_pagination) {
            params.page = 1
            params.size = 5
        }
        // 
        const res = await API_FashionBuy_LC('GET', {...params, ...params_buy});
        if(is_pagination){
            setCountBuy(res.data.count || 3)
            setBuyArr(res.data.data)
        } else {
            setCountBuy(0)
            setBuyArr(res.data)
        }
        // 
        setFirstFetching(false)
    }

    //
    async function getMore_API_Buying(){
        setIsFetching(true)
        // 
        const params = {
            ...params_buy,
            page: 1,
            size: 5,
            c_count: buy_arr.length,
            status: search_stage().toUpperCase(),
        };
        // 
        const res = await API_FashionBuy_LC('GET', params);
        buy_arr.push(...res.data.data)
        // 
        setIsFetching(false)
    }

    // 
    function handleChooseStep(new_cur_stage) {
        if (new_cur_stage + 1 != cur_stage) {
            history.replaceState('', '', '?stage=' + arr_stage[new_cur_stage])
            setCurStage(new_cur_stage + 1)
            getData_API_Buying()
        }
    }

/* ---------------- CANCEL ----------------- */

    //
    function openConFirmCancelBuying(buy_shop_ix, item_ix, item_id) {
        cancel_obj.current = { buy_shop_ix, item_ix, item_id };
        setOpenConfirm(true);
    }
    //
    function closeConfirmCancel() {
        setOpenConfirm(false);
    }
    //
    function conFirmCancelBuying() {
        console.log(cancel_obj);
        closeConfirmCancel();
    }

    //
    return (
        <div>
            <div>
                <div>
                    <div className="fashion_title fashion_center fashion_border-bottom">
                        BILL BUYING
                    </div>

                    <div>
                        <BuyingStage
                            count_stage={4}
                            completed_stage_ix={cur_stage}
                            handleChooseStep={handleChooseStep}
                        />
                    </div>

                    <div className={first_fetching ? 'display-none' : ''}>
                        {buy_arr.map((buy_shop, ix) => (
                            <BuyingShop
                                key={`BillBuying_item_${ix}`}
                                buy_shop={buy_shop}
                                buy_shop_ix={ix}
                                openConFirmCancelBuying={
                                    openConFirmCancelBuying
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>

            <ConfirmDiv
                open_confirm={open_confirm}
                confirmYes={conFirmCancelBuying}
                closeConfirm={closeConfirmCancel}
            >
                Do you want to cancel this product?
            </ConfirmDiv>

            <div className="width-fit-content margin-auto">
                <ScreenBlurShowMore
                    title="Show more"
                    is_show_more={count_buy > buy_arr.length}
                    is_fetching={is_fetching || first_fetching}
                    // 
                    handleShowMore={getMore_API_Buying}
                    FetchingComponent={CircleLoading}
                />
            </div>

            <div className={!first_fetching && buy_arr.length == 0 ? 'fashion_title fashion_center fashion_border-bottom' : 'display-none'}>
                No BILL
            </div>
        </div>
    );
}

export default BillBuying;
