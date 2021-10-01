import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
FsPVoucherHeadPc.propTypes = {};

//
function FsPVoucherHeadPc(props) {
    //
    return (
        <div className="FsPVoucherHeadPc">
            <div className="flex-between-center">
                <div className="font-20px">Ví Voucher</div>

                <div className="display-flex align-items-center font-14px">
                    <Link to="/fashion/voucher" className="color-fashion">
                        Tìm thêm voucher
                    </Link>

                    <div className="padding-x-8px text-third opacity-05">|</div>

                    <Link
                        to="/fashion/user/voucher?type=history"
                        className="color-fashion"
                    >
                        Xem lịch sử voucher
                    </Link>

                    <div className="padding-x-8px text-third opacity-05">|</div>

                    <div>Tìm hiểu thêm</div>
                </div>
            </div>
        </div>
    );
}

export default FsPVoucherHeadPc;
