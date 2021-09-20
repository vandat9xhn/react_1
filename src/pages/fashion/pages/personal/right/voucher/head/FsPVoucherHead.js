import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
FsPVoucherHead.propTypes = {};

//
function FsPVoucherHead(props) {
    //
    return (
        <div className="FsPVoucherHead">
            <div className="FsPVoucherHead_row flex-between-center">
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

export default FsPVoucherHead;
