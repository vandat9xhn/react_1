import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
// 
import IconsProfile from '../../../../../../_icons_svg/icons_profile/IconsProfile';
//
import './FsBuyUserHead.scss';

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
            <div className="FsBuyUserHead_row flex-between-center">
                <div className="FsBuyUserHead_left display-flex align-items-center color-fashion font-18px font-500">
                    <IconsProfile size_icon="1.25rem" />

                    <span className="margin-left-5px">Địa Chỉ Nhận Hàng</span>
                </div>

                {IS_MOBILE ? null : (
                    <div
                        className={`${
                            open_fixed ? 'display-flex' : 'display-none'
                        }`}
                    >
                        <button
                            type="button"
                            className="margin-right-15px padding-4px border-blur text-third text-cap cursor-pointer"
                            onClick={openAddAddress}
                        >
                            <span className="margin-right-4px">+</span>

                            <span>Thêm địa chỉ mới</span>
                        </button>

                        <Link
                            to={`/fashion/personal/user/info`}
                            className="text-third text-cap"
                        >
                            <div className="padding-4px border-blur">
                                Thiết lập địa chỉ
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FsBuyUserHead;
