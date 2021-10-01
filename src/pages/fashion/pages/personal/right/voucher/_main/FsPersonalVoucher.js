import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { ParseLocationSearch } from '../../../../../../../_some_function/ParseLocationSearch';
import observeToDo from '../../../../../../../_some_function/observerToDo';
// 
import { handle_API_FsCoinHistory_L } from '../../../../../../../_handle_api/fashion/coin';
//
import { useMultiDataKey } from '../../../../../../../_hooks/useMultiDataKey';
//
import { FsPVc_handleDataSuggested } from '../_state/FsPVc_handleDataSuggested';
import { FsPVc_handleDataState } from '../_state/_FsPVc_handleDataState';
//
import FsPVoucherHead from '../head/_main/FsPVoucherHead';
import FsPVoucherInput from '../input/FsPVoucherInput';
import FsPVoucherMenu from '../menu/_main/FsPVoucherMenu';
import FsPVoucherFilter from '../filter/_main/FsPVoucherFilter';
import FsPVoucherList from '../list/_main/FsPVoucherList';
import FsPVcSuggested from '../suggested/_main/FsPVcSuggested';
import FsPVoucherHistory from '../history/_main/FsPVoucherHistory';
//
import './FsPersonalVoucher.scss';
// 
import '../_mobile_css/FsPersonalVoucherMb.scss';
import '../_mobile_css/FsPVcSuggestedMb.scss';

//
const MENU_ARR = [
    'Tất cả',
    'Shopee',
    'Shop',
    'Nạp thẻ & dịch vụ',
    'Scan & pay',
    'Từ đối tác',
];
const MENU_KEY_ARR = [
    'all',
    'shopee',
    'shop',
    'card_and_service',
    'scan_and_pay',
    'company',
];

//
const FILTER_ARR = ['Mới nhất', 'Phổ biến', 'Sắp hết hạn'];
const FILTER_KEY_ARR = ['newest', 'popular', 'end_time'];

//
FsPersonalVoucher.propTypes = {};

//
function FsPersonalVoucher(props) {
    //
    const [suggested_state, setSuggestedState] = useState({
        suggested_arr: [] || [
            {
                id: 0,
                img: '',
                name: '',
                new_price: 0,
                discount_str: '',
                min_spend: 0,
                is_like: false,
                is_mall: false,
                is_plus: false,
            },
        ],
        has_fetch_suggested: false,
    });

    //
    const ref_main_elm = useRef(null);

    const ref_filter_ix_obj = useRef({
        [MENU_KEY_ARR[0]]: 0,
    });

    //
    const { state_obj, getData_API, handleChangeKey } = useMultiDataKey({
        initial_key: MENU_KEY_ARR[0],
        handle_API_L: (new_key, c_count) =>
            handle_FsVoucher({
                c_count: c_count,
                key: new_key,
                filter: FILTER_KEY_ARR[ref_filter_ix_obj.current[new_key]],
            }),
    });

    const { obj, c_key, is_fetching } = state_obj;

    const menu_ix = MENU_KEY_ARR.indexOf(c_key);
    const filter_ix = ref_filter_ix_obj.current[c_key];

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () => {
                getData_API(c_key);
                getData_Suggested();
            },
        });
    }, []);

    // -------

    async function handle_FsVoucher(params) {
        // console.log(params, ref_filter_ix_obj.current);
        const res = await handle_API_FsCoinHistory_L({});

        return FsPVc_handleDataState({ data: res.data });
    }

    async function getData_Suggested() {
        const res = await handle_API_FsCoinHistory_L({});

        FsPVc_handleDataSuggested({
            data: res.data,
            setSuggestedState: setSuggestedState,
        });
    }

    // --------

    //
    function handleChangeMenu(new_menu_ix) {
        const new_key = MENU_KEY_ARR[new_menu_ix];
        ref_filter_ix_obj.current[new_key] =
            ref_filter_ix_obj.current[new_key] || 0;

        handleChangeKey(new_key);
    }

    //
    function handleChangeFilter(new_filter_ix) {
        ref_filter_ix_obj.current[c_key] = new_filter_ix;

        getData_API(c_key, true);
    }

    //
    function handleSaveVoucher(voucher_ix) {
        console.log(voucher_ix);
    }

    //
    function saveVoucherCode(voucher_code) {
        console.log(voucher_code);
    }

    //
    return (
        <React.Fragment>
            <div
                ref={ref_main_elm}
                className={`FsPersonalVoucher ${
                    ParseLocationSearch()['type'] == 'history'
                        ? 'display-none'
                        : ''
                }`}
            >
                <div className="FsPersonalVoucher_main margin-bottom-20px bg-primary">
                    <div className="FsPersonalVoucher_head margin-bottom-15px">
                        <FsPVoucherHead />
                    </div>

                    <div className="margin-bottom-15px">
                        <FsPVoucherInput saveVoucherCode={saveVoucherCode} />
                    </div>

                    <div className="margin-bottom-15px">
                        <FsPVoucherMenu
                            menu_arr={MENU_ARR}
                            menu_ix={menu_ix}
                            handleChangeMenu={handleChangeMenu}
                        />
                    </div>

                    <div className="margin-bottom-15px">
                        <FsPVoucherFilter
                            filter_arr={FILTER_ARR}
                            filter_ix={filter_ix}
                            handleChangeFilter={handleChangeFilter}
                        />
                    </div>

                    <div>
                        <FsPVoucherList voucher_arr={obj[c_key].data_arr} />
                    </div>
                </div>

                <div className="bg-primary">
                    <FsPVcSuggested
                        suggested_arr={suggested_state.suggested_arr}
                        handleSave={handleSaveVoucher}
                    />
                </div>
            </div>

            <div
                className={`${
                    ParseLocationSearch()['type'] == 'history'
                        ? ''
                        : 'display-none'
                }`}
            >
                <FsPVoucherHistory />
            </div>
        </React.Fragment>
    );
}

export default FsPersonalVoucher;
