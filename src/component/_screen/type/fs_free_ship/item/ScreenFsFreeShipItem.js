import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { formatNum } from '../../../../../_some_function/FormatNum';
//
import FsFreeShipCard from '../../../../../pages/fashion/components/free_ship_card/FsFreeShipCard';
//
import './ScreenFsFreeShipItem.scss';

//
ScreenFsFreeShipItem.propTypes = {
    active_id: PropTypes.number,

    id: PropTypes.number,
    payments: PropTypes.string,
    transporter_count: PropTypes.number,
    min_spend: PropTypes.number,
    end_time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    used_count: PropTypes.number,

    handleChooseFreeShip: PropTypes.func,
};

//
function ScreenFsFreeShipItem({
    active_id,

    id,
    payments,
    transporter_count,
    min_spend,
    end_time,
    used_count,

    handleChooseFreeShip,
}) {
    //
    function onChooseFreeShip() {
        handleChooseFreeShip(id);
    }

    //
    return (
        <div
            className={`ScreenFsFreeShipItem ${
                active_id == id && IS_MOBILE
                    ? 'ScreenFsFreeShipItem-active'
                    : ''
            }`}
            onClick={IS_MOBILE ? onChooseFreeShip : undefined}
        >
            <FsFreeShipCard
                left_elm={
                    <div className="wh-100 fs-bg-voucher display-flex-center">
                        <div className="padding-4px text-align-center text-upper text-white font-16px">
                            Miễn phí vận chuyển
                        </div>
                    </div>
                }
                title_center_1={`${
                    IS_MOBILE ? 'Từ' : 'Đơn hàng từ'
                } ${formatNum(min_spend)}Đ`}
                title_center_2={`${payments}`}
                title_center_3={`${transporter_count} Đơn vị vận chuyển`}
                //
                end_time={end_time}
                used_count={used_count}
                can_use={true}
                is_active={id == active_id}
                handleChoose={onChooseFreeShip}
            />
        </div>
    );
}

export default ScreenFsFreeShipItem;
