import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
FsBuyUserHead.propTypes = {
    open_fixed: PropTypes.bool,
    openAddAddress: PropTypes.func,
};

//
function FsBuyUserHead({ open_fixed, openAddAddress }) {
    //
    return (
        <div className="FsBuyUserHead">
            <div className="flex-between-center">
                <div className="color-fashion font-18px">
                    <IconsProfile size_icon="1.5rem" />

                    <span>Địa Chỉ Nhận Hàng</span>
                </div>

                <div className={`${open_fixed ? '' : 'display-none'}`}>
                    <button
                        type="button"
                        className="border-blur text-third text-cap"
                        onClick={openAddAddress}
                    >
                        <span className="margin-right-5px">+</span>

                        <span>Thêm địa chỉ mới</span>
                    </button>

                    <Link
                        to={`/fashion/personal/user/info`}
                        className="text-third text-cap"
                    >
                        <div className="border-blur">Thiết lập địa chỉ</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FsBuyUserHead;
