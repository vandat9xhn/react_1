import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../_some_function/FormatNum';
//
import { handle_API_FsVoucher_L } from '../../../../_handle_api/fashion/fashion_voucher';
//
import { useDataShowMore } from '../../../../_hooks/useDataShowMore';
//
import ScreenBlurHead from '../../components/part/head/ScreenBlurHead';
import ScreenBlur from '../../components/frame/blur/ScreenBlur';
import ScreenBlurShowMore from '../../components/part/foot/ScreenBlurShowMore';
//
import FsFreeShipCard from '../../../../pages/fashion/components/free_ship_card/FsFreeShipCard';
//
import './ScreenFsFreeShip.scss';
import FsInputVoucher from '../../../../pages/fashion/components/input_voucher/FsInputVoucher';

//
export function openScreenFsFreeShip({
    openScreenFloor = () => {},
    free_ship_id = 0,
    handleChooseFreeShip = () => {},
}) {
    openScreenFloor({
        FloorComponent: ScreenFsFreeShip,
        free_ship_id: free_ship_id,
        handleChooseFreeShip: handleChooseFreeShip,
    });
}

//
ScreenFsFreeShip.propTypes = {
    free_ship_id: PropTypes.number,
    closeScreen: PropTypes.func,
    handleChooseFreeShip: PropTypes.func,
};

ScreenFsFreeShip.defaultProps = {
    free_ship_id: 0,
};

//
function ScreenFsFreeShip({ free_ship_id, closeScreen, handleChooseFreeShip }) {
    //
    const { data_state, setDataState, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) => handle_API_FsVoucher_L({ c_count: c_count }),
        other_state: {
            active_id: free_ship_id,
        },
    });

    const { data_arr, count, has_fetched, is_fetching, active_id } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    function handleShowMore() {
        getData_API();
    }

    //
    function handleApplyVoucherCode(voucher_code) {
        console.log(voucher_code);
    }

    //
    function onChooseFreeShip(new_active_id) {
        setDataState({
            ...data_state,
            active_id: new_active_id,
        });
    }

    //
    function handleConfirm() {
        closeScreen();
        free_ship_id != active_id &&
            handleChooseFreeShip(data_arr.find((item) => item.id == active_id));
    }

    //
    return (
        <ScreenBlur closeScreen={closeScreen} screen_center={true}>
            <div className="ScreenFsFreeShip padding-16px font-for-fashion">
                <div className="margin-bottom-16px">
                    <ScreenBlurHead
                        title="Chọn Voucher"
                        closeScreenBlur={closeScreen}
                    />
                </div>

                <div className="ScreenBlur_body_contain padding-x-8px">
                    <div className="margin-bottom-16px padding-x-8px padding-y-16px bg-screen">
                        <FsInputVoucher
                            placeholder="Mã React-Django Voucher"
                            handleApplyVoucherCode={handleApplyVoucherCode}
                        />
                    </div>

                    {data_arr.map((free_ship_obj, ix) => (
                        <div
                            key={`${free_ship_obj.id}`}
                            className="ScreenFsFreeShip_item margin-bottom-16px"
                        >
                            <FsFreeShipCard
                                left_elm={
                                    <div className="wh-100 fs-bg-voucher display-flex-center">
                                        <div className="padding-4px text-align-center text-upper text-white font-16px">
                                            Miễn phí vận chuyển
                                        </div>
                                    </div>
                                }
                                title_center_1={`Đơn hàng từ ${formatNum(
                                    free_ship_obj.min_spend
                                )}Đ`}
                                title_center_2={`${free_ship_obj.payments}`}
                                title_center_3={`${free_ship_obj.transporter_count} Đơn vị vận chuyển`}
                                //
                                end_time={free_ship_obj.end_time}
                                used_count={free_ship_obj.used_count}
                                can_use={true}
                                is_active={free_ship_obj.id == active_id}
                                handleChoose={onChooseFreeShip}
                            />
                        </div>
                    ))}

                    <div>
                        <ScreenBlurShowMore
                            title="Xem thêm"
                            is_show_more={data_arr.length < count}
                            is_fetching={is_fetching}
                            handleShowMore={handleShowMore}
                        />
                    </div>
                </div>

                <div
                    className={`${
                        has_fetched ? 'padding-8px' : 'display-none'
                    }`}
                >
                    <div className="display-flex justify-content-end">
                        <button
                            type="button"
                            className="ScreenFsFreeShip_btn margin-right-10px padding-6px brs-3px btn cursor-pointer hv-bg-blur text-upper text-secondary"
                            onClick={closeScreen}
                        >
                            Trở lại
                        </button>

                        <button
                            type="button"
                            className="ScreenFsFreeShip_btn padding-6px brs-3px btn btn-hv cursor-pointer bg-fashion-red text-upper text-white"
                            onClick={handleConfirm}
                        >
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </ScreenBlur>
    );
}

export default ScreenFsFreeShip;
