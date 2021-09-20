import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import observeToDo from '../../../../../../../../_some_function/observerToDo';
//
import { useMultiDataKey } from '../../../../../../../../_hooks/useMultiDataKey';
//
import ScreenBlurShowMore from '../../../../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import { FsPVc_handleDataState } from '../../_state/_FsPVc_handleDataState';
//
import FsPVoucherList from '../../list/_main/FsPVoucherList';
//
import './FsPVoucherHistory.scss';
import { handle_API_FsCoinHistory_L } from '../../../../../../../../_handle_api/fashion/coin';

//
FsPVoucherHistory.propTypes = {};

//
function FsPVoucherHistory({}) {
    //
    const ref_main_elm = useRef(null);

    //
    const { state_obj, getData_API, handleChangeKey } = useMultiDataKey({
        initial_key: 'ended',
        handle_API_L: (new_key, c_count) =>
            handle_FsVoucher({
                c_count: c_count,
                key: new_key,
            }),
    });

    const { obj, c_key, is_fetching } = state_obj;

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main_elm.current,
            callback: () => {
                getData_API(c_key);
            },
        });
    }, []);

    // -------

    async function handle_FsVoucher(params) {
        const res = await handle_API_FsCoinHistory_L({});

        return FsPVc_handleDataState({ data: res.data, can_use: false });
    }

    // --------

    //
    function handleChangeEnded() {
        handleChangeKey('ended');
    }

    //
    function handleChangeUsed() {
        handleChangeKey('used');
    }

    //
    function handleShowMore() {
        getData_API(c_key);
    }

    //
    return (
        <div ref={ref_main_elm} className="FsPVoucherHistory bg-primary">
            <div className="FsPVoucherHistory_title margin-bottom-15px font-18px border-bottom-blur">
                Lịch sử voucher
            </div>

            <div className="margin-bottom-15px">
                <div className="display-flex">
                    <div
                        className={`FsPVoucherHistory_menu_item font-16px font-400 cursor-pointer ${
                            c_key == 'ended'
                                ? 'FsPVoucherHistory_menu_item-active color-fashion'
                                : ''
                        }`}
                        onClick={handleChangeEnded}
                    >
                        Hết hiệu lực
                    </div>

                    <div
                        className={`FsPVoucherHistory_menu_item font-16px font-400 cursor-pointer ${
                            c_key == 'used'
                                ? 'FsPVoucherHistory_menu_item-active color-fashion'
                                : ''
                        }`}
                        onClick={handleChangeUsed}
                    >
                        Đã sử dụng
                    </div>
                </div>
            </div>

            <div>
                <FsPVoucherList voucher_arr={obj[c_key].data_arr} />
            </div>

            <div>
                <ScreenBlurShowMore
                    title="Xem thêm"
                    is_show_more={obj[c_key].data_arr.length < obj[c_key].count}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    );
}

export default FsPVoucherHistory;
