import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import FsBtnsConfirm from '../../../../../component/button/fs_btns_confirm/FsBtnsConfirm';
//
import TransportModalItem from '../item/TransportModalItem';
import TMDeliveryTime from '../delivery_time/_main/TMDeliveryTime';
//
import './FsTransportsModal.scss';
import { IS_MOBILE } from '../../../../../_constant/Constant';
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';

//
FsTransportsModal.propTypes = {};

//
function FsTransportsModal({
    transport_arr,
    trans_ix,
    delivery_time_ix,

    closeScreen,
    handleChangeTransport,
}) {
    //
    const [state_obj, setStateObj] = useState({
        trans_active_ix: trans_ix,
        delivery_time_active_ix: delivery_time_ix,
    });

    const { trans_active_ix, delivery_time_active_ix } = state_obj;

    // -------

    //
    function handleChooseTransport(new_trans_ix) {
        if (new_trans_ix == trans_active_ix) {
            return;
        }

        setStateObj({
            ...state_obj,
            trans_active_ix: new_trans_ix,
            delivery_time_active_ix: 0,
        });
    }

    //
    function handleChooseDeliveryTime(new_time_ix) {
        setStateObj({
            ...state_obj,
            delivery_time_active_ix: new_time_ix,
        });
    }

    //
    function handleConfirm() {
        handleChangeTransport({
            new_trans_ix: trans_active_ix,
            new_time_ix: delivery_time_active_ix,
        });
    }

    //
    return (
        <div className="FsTransportsModal margin-auto bg-primary box-shadow-fb brs-8px">
            <div className="FsTransportsModal_title margin-bottom-15px font-20px">
                Chọn đơn vị vận chuyển
            </div>

            {IS_MOBILE ? (
                <div className="pos-abs right-0 top-0 padding-10px">
                    <div
                        className="FsTransportsModal_close_icon display-flex-center brs-50"
                        onClick={closeScreen}
                    >
                        <IconsArrow y={400} size_icon="0.75rem" />
                    </div>
                </div>
            ) : null}

            <div className="FsTransportsModal_chanel padding-y-12px">
                <div className="font-14px">KÊNH VẬN CHUYỂN LIÊN KẾT</div>

                <div className="text-third font-12px">
                    Bạn có thể theo dõi đơn hàng trên ứng dụng khi chọn một
                    trong các đơn vị vận chuyển:
                </div>
            </div>

            <div>
                {transport_arr.map((trans_obj, ix) => (
                    <div key={ix} className="margin-bottom-15px bg-fa">
                        <TransportModalItem
                            name={trans_obj.name}
                            price={trans_obj.price}
                            delay_message={trans_obj.delay_obj.delay_message}
                            str_date_to={trans_obj.delay_obj.str_date_to}
                            by_time={trans_obj.delay_obj.by_time}
                            ix={ix}
                            is_active={ix == trans_active_ix}
                            handleChoose={handleChooseTransport}
                        />

                        {ix == trans_active_ix && trans_obj.options.length ? (
                            <TMDeliveryTime
                                delivery_time_arr={trans_obj.options}
                                delivery_time_ix={delivery_time_active_ix}
                                handleChoose={handleChooseDeliveryTime}
                            />
                        ) : null}
                    </div>
                ))}
            </div>

            <div className="FsTransportsModal_foot margin-top-20px">
                <div className="flex-end">
                    <FsBtnsConfirm
                        back_title="Trở lại"
                        confirm_title="Hoàn thành"
                        back_class="FsTransportsModal_btn FsTransportsModal_btn-back"
                        confirm_class="FsTransportsModal_btn FsTransportsModal_btn-confirm"
                        handleBack={closeScreen}
                        handleConfirm={handleConfirm}
                    />
                </div>
            </div>
        </div>
    );
}

export default FsTransportsModal;
