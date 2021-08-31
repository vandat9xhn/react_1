import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../../_constant/Constant';
//
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
import './FsCSFreeShipList.scss';

//
FsCSFreeShipList.propTypes = {};

//
function FsCSFreeShipList({ ship_arr, shop_name }) {
    //
    return (
        <div
            className={`FsCSFreeShipList bg-primary ${
                IS_MOBILE
                    ? 'FsCSFreeShipList-mb w-100per padding-8px font-14px'
                    : 'FsCSFreeShipList-pc padding-16px brs-2px box-shadow-fb font-16px '
            }`}
        >
            <div className="font-20px">Khuyến mãi vận chuyển</div>

            <div className="text-third">{shop_name}</div>

            <div className="FsCSFreeShipList_row display-flex margin-top-15px text-secondary text-align-center">
                <div className="FsCSFreeShipList_left">
                    {IS_MOBILE ? 'Tối thiểu' : 'Đơn hàng tối thiểu'}
                </div>

                <div className="FsCSFreeShipList_center">Ưu đãi</div>

                <div className="FsCSFreeShipList_right">
                    {IS_MOBILE ? 'Vận chuyển' : 'Phương thức vận chuyển'}
                </div>
            </div>

            {ship_arr.map((item, ix) => (
                <div
                    key={ix}
                    className="FsCSFreeShipList_row display-flex margin-top-15px text-align-center"
                >
                    <div className="FsCSFreeShipList_left">
                        ₫{formatNum(item.min_spend)}
                    </div>

                    <div className="FsCSFreeShipList_center">
                        ₫{formatNum(item.cost)}
                    </div>

                    <div className="FsCSFreeShipList_right">
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
