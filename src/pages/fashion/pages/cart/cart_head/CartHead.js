import React from 'react';
import PropTypes from 'prop-types';
//
import IconFsTruck from '../../../../../_icons_svg/_icon_fs_truck/IconFsTruck';
//
import CheckBoxCustom from '../../../../../component/input/checkbox_custom/CheckBoxCustom';
//
import './CartHead.scss';
import { IS_MOBILE } from '../../../../../_constant/Constant';

//
CartHead.propTypes = {};

function CartHead({ checked, handleCheckedALl }) {
    //
    return (
        <div className="CartHead">
            <div
                className={`CartHead_truck margin-bottom-16px bg-primary ${
                    IS_MOBILE ? 'padding-8px' : 'padding-x-16px padding-y-8px'
                }`}
            >
                <div className="display-flex align-items-center">
                    <IconFsTruck />

                    <span className="margin-left-10px">
                        Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí
                        vận chuyển bạn nhé!
                    </span>
                </div>
            </div>

            <div
                className={`CartHead_title padding-16px bg-primary text-third ${
                    IS_MOBILE ? 'display-none' : ''
                }`}
            >
                <div className="display-flex align-items-center">
                    <div className="CartHead_checked padding-left-8px">
                        <CheckBoxCustom
                            checked={checked}
                            handleChangeChecked={handleCheckedALl}
                        />
                    </div>

                    <div className="CartHead_product">Sản phẩm</div>

                    <div className="CartHead_price text-align-center">
                        Đơn Giá
                    </div>

                    <div className="CartHead_count text-align-center">
                        Số Lượng
                    </div>

                    <div className="CartHead_total text-align-center">
                        Số tiền
                    </div>

                    <div className="CartHead_action text-align-center">
                        Thao Tác
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartHead;
