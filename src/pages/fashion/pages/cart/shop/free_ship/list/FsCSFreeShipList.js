import React from 'react';
import PropTypes from 'prop-types';
//
import './FsCSFreeShipList.scss';
import { formatNum } from '../../../../../../../_some_function/FormatNum';

//
FsCSFreeShipList.propTypes = {};

//
function FsCSFreeShipList({ ship_arr, shop_name }) {
    //
    return (
        <div className="FsCSFreeShipList padding-16px bg-primary brs-2px box-shadow-fb font-16px">
            <div className="font-20px">Khuyến mãi vận chuyển</div>

            <div className="text-third">{shop_name}</div>

            <div className="FsCSFreeShipList_row display-flex margin-top-15px text-secondary">
                <div className="FsCSFreeShipList_left">Đơn hàng tối thiểu</div>

                <div className="FsCSFreeShipList_center">Ưu đãi</div>

                <div className="FsCSFreeShipList_right flex-grow-1">
                    Phương thức vận chuyển
                </div>
            </div>

            {ship_arr.map((item, ix) => (
                <div
                    key={ix}
                    className="FsCSFreeShipList_row display-flex margin-top-15px"
                >
                    <div className="FsCSFreeShipList_left">
                        ₫{formatNum(item.min_spend)}
                    </div>

                    <div className="FsCSFreeShipList_center">
                        ₫{formatNum(item.cost)}
                    </div>

                    <div className="FsCSFreeShipList_right flex-grow-1">
                        {item.transport_arr.map((transport, ix) => (
                            <div key={ix}>{transport}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FsCSFreeShipList;
