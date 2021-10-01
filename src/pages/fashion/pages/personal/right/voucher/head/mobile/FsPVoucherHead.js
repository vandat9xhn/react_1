import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
FsPVoucherHeadMb.propTypes = {};

//
function FsPVoucherHeadMb(props) {
    //
    return (
        <div className="FsPVoucherHeadMb">
            <div className="flex-between-center">
                <Link className="color-inherit font-16px" to="/fashion">
                    Ví Voucher
                </Link>

                <div className="display-flex align-items-center font-13px">
                    <Link to="/fashion/voucher" className="color-fashion">
                        Thêm voucher
                    </Link>

                    <div className="padding-x-5px text-third opacity-05">|</div>

                    <Link
                        to="/fashion/user/voucher?type=history"
                        className="color-fashion"
                    >
                        Lịch sử
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FsPVoucherHeadMb;
