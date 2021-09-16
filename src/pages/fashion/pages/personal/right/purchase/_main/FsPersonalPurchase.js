import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../../_context/ContextAPI';

import { API_FashionBuy_LC } from '../../../../../../../api/api_django/fashion/APIFashionToken';
//
import { useMultiDataKey } from '../../../../../../../_hooks/useMultiDataKey';
//
import { openScreenConfirm } from '../../../../../../../component/_screen/type/confirm/ScreenConfirm';
//
import FetchingDiv from '../../../../../../../component/some_div/fetching/FetchingDiv';
//
import BuyingShop from '../shop/_main/BuyingShop';
import FsPPurchaseHead from '../head/_main/FsPPurchaseHead';
import FsPPurchaseRowSearch from '../row_search/FsPPurchaseRowSearch';
//
import './FsPersonalPurchase.scss';

//
const arr_stage = ['all', 'buying', 'ready', 'delivery', 'bought', 'cancel'];
const ARR_PURCHASE = [
    'Tất cả',
    'Chờ xác nhận',
    'Chờ lấy hàng',
    'Đang giao',
    'Đã giao',
    'Đã hủy',
];

//
FsPersonalPurchase.propTypes = {};

//
function FsPersonalPurchase(props) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const [count_new_arr, setCountNewArr] = useState([0, 0, 0, 0, 0, 0]);

    //
    const { state_obj, getData_API, handleChangeKey } = useMultiDataKey({
        initial_key: 'buying',
        handle_API_L: handle_API_Buying,
    });

    const { obj, c_key, is_fetching } = state_obj;
    const purchase_ix = arr_stage.indexOf(c_key);

    //
    useEffect(() => {
        getData_API();
    }, []);

    // --------

    async function handle_API_Buying(new_key, c_count) {
        const res = await API_FashionBuy_LC({
            method: 'GET',
            params: {
                c_count: c_count,
                type: new_key,
                page: 1,
                size: 5,
            },
        });

        return res.data;
    }

    // --------

    //
    function getMore_API_Buying() {
        getData_API(c_key);
    }

    //
    function handleChooseStep(new_key_ix) {
        const new_key = arr_stage[new_key_ix];

        if (new_key == c_key) {
            return;
        }

        history.replaceState('', '', '?stage=' + new_key);
        handleChangeKey(new_key);
    }

    //
    function handleSearch(value_search) {}

    //
    function openConFirmCancelBuying(buy_shop_ix, item_ix, item_id) {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Cancel Product',
            notification: 'Do you really want to cancel buying this product?',
            handleConfirm: () => {
                conFirmCancelBuying(buy_shop_ix, item_ix, item_id);
            },
        });
    }

    //
    function conFirmCancelBuying(buy_shop_ix, item_ix, item_id) {
        console.log(buy_shop_ix, item_ix, item_id);
    }

    //
    return (
        <div className="FsPersonalPurchase">
            <div className="margin-bottom-15px">
                <FsPPurchaseHead
                    arr_purchase={ARR_PURCHASE}
                    purchase_ix={purchase_ix}
                    count_new_arr={count_new_arr}
                    handleChoose={handleChooseStep}
                />
            </div>

            <div className="margin-bottom-15px">
                <FsPPurchaseRowSearch handleSearch={handleSearch} />
            </div>

            <div className={obj[c_key].has_fetched ? '' : 'display-none'}>
                {obj[c_key].data_arr.map((buy_shop, ix) => (
                    <div
                        key={`${ix}`}
                        className="FsPersonalPurchase_item margin-bottom-10px"
                    >
                        <BuyingShop
                            buy_shop={buy_shop}
                            buy_shop_ix={ix}
                            openConFirmCancelBuying={openConFirmCancelBuying}
                        />
                    </div>
                ))}
            </div>

            <div className="width-fit-content margin-auto">
                <FetchingDiv is_fetching={is_fetching} />
            </div>

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
    );
}

export default FsPersonalPurchase;
