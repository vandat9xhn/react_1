import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FsVoucher_L } from '../../../../../_handle_api/fashion/fashion_voucher';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import ScreenBlurHead from '../../../components/part/head/ScreenBlurHead';
import ScreenBlur from '../../../components/frame/blur/ScreenBlur';
import ScreenBlurShowMore from '../../../components/part/foot/ScreenBlurShowMore';
//
import FsInputVoucher from '../../../../../pages/fashion/components/input_voucher/FsInputVoucher';
import ScreenFsFreeShipItem from '../item/ScreenFsFreeShipItem';
//
import './ScreenFsFreeShip.scss';
import FsBtnsConfirm from '../../../../button/fs_btns_confirm/FsBtnsConfirm';

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
        <ScreenBlur closeScreen={closeScreen}>
            <div className="ScreenFsFreeShip padding-16px font-for-fashion">
                <div className="margin-bottom-16px">
                    <ScreenBlurHead
                        title="Chọn Voucher"
                        closeScreenBlur={closeScreen}
                    />
                </div>

                <div className="ScreenBlur_body_contain padding-x-8px">
                    <div className="ScreenFsFreeShip_input screen-input-voucher margin-bottom-16px padding-x-8px padding-y-16px bg-screen">
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
                            <ScreenFsFreeShipItem
                                active_id={active_id}
                                //
                                id={free_ship_obj.id}
                                payments={free_ship_obj.payments}
                                transporter_count={
                                    free_ship_obj.transporter_count
                                }
                                min_spend={free_ship_obj.min_spend}
                                end_time={free_ship_obj.end_time}
                                used_count={free_ship_obj.used_count}
                                //
                                handleChooseFreeShip={onChooseFreeShip}
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
                        <FsBtnsConfirm
                            back_title="Trở lại"
                            confirm_title="Ok"
                            back_class="ScreenFsFreeShip_btn"
                            confirm_class="ScreenFsFreeShip_btn"
                            handleBack={closeScreen}
                            handleConfirm={handleConfirm}
                        />
                    </div>
                </div>
            </div>
        </ScreenBlur>
    );
}

export default ScreenFsFreeShip;
