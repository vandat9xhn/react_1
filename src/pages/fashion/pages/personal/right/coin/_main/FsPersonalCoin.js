import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FsCoinHistory_L } from '../../../../../../../_handle_api/fashion/coin';
//
import { useMultiDataKey } from '../../../../../../../_hooks/useMultiDataKey';
//
import ScreenBlurShowMore from '../../../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import FsPCoinItem from '../item/FsPCoinItem';
import FsPCoinHead from '../head/FsPCoinHead';
import FsPCoinMenu from '../menu/_main/FsPCoinMenu';

const COIN_MENU_ARR = ['Tất cả lịch sử', 'Đã nhận', 'Đã dùng'];
const COIN_MENU_KEY_ARR = ['all', 'received', 'used'];

//
FsPersonalCoin.propTypes = {};

//
function FsPersonalCoin(props) {
    //
    const [c_coin_obj, setCCoinObj] = useState({
        coin: 100,
        end_time: new Date().getTime(),
    });

    //
    const { state_obj, getData_API, handleChangeKey } = useMultiDataKey({
        initial_key: COIN_MENU_KEY_ARR[0],
        handle_API_L: (c_count, new_key) =>
            handle_API_FsCoinHistory_L({
                c_count: c_count,
                params: {
                    type: new_key,
                },
            }),
    });

    const { obj, c_key, is_fetching } = state_obj;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // ------

    //
    function handleChangeMenu(new_menu_ix) {
        handleChangeKey(COIN_MENU_KEY_ARR[new_menu_ix]);
    }

    //
    function handleShowMore() {
        getData_API();
    }

    //
    return (
        <div className="FsPersonalCoin bg-primary">
            <div className="border-bottom-blur">
                <FsPCoinHead
                    coin={c_coin_obj.coin}
                    end_time={c_coin_obj.end_time}
                />
            </div>

            <div className="border-bottom-blur">
                <FsPCoinMenu
                    menu_arr={COIN_MENU_ARR}
                    menu_ix={COIN_MENU_KEY_ARR.indexOf(c_key)}
                    handleChangeMenu={handleChangeMenu}
                />
            </div>

            <div>
                {obj[c_key].data_arr.map((item, ix) => (
                    <div key={item.id} className="border-bottom-blur">
                        <FsPCoinItem
                            name={item.name}
                            reason={item.reason}
                            img={item.img}
                            coin_change={item.coin_change}
                            end_time={item.end_time}
                        />
                    </div>
                ))}
            </div>

            <div className="padding-y-5px">
                <ScreenBlurShowMore
                    title="Xem thêm"
                    is_show_more={obj[c_key].count > obj[c_key].data_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    );
}

export default FsPersonalCoin;
