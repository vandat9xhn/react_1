import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../_some_function/FormatNum';
//
import IconsMenu from '../../../../../_icons_svg/icons_menu/IconsMenu';
// 
import './FsHotDealCal.scss';

//
FsHotDealCal.propTypes = {};

//
function FsHotDealCal({ total_price, save_price, handleAddCart }) {
    //
    return (
        <div className="FsHotDealCal h-100per display-flex-center flex-col padding-8px font-14px">
            <div>
                <span>Tổng cộng:</span>

                <span className="margin-left-5px">
                    ₫{formatNum(total_price)}
                </span>
            </div>

            <div className="color-fashion">
                <span>Tiết kiệm:</span>

                <span className="margin-left-5px">
                    ₫{formatNum(save_price)}
                </span>
            </div>

            <div className="FsHotDealCal_foot">
                <button
                    className="FsHotDealCal_foot_btn w-100per padding-x-8px btn bg-fashion-heart brs-2px color-fashion cursor-pointer"
                    type="button"
                    onClick={handleAddCart}
                >
                    <div className="display-flex-center">
                        <div>
                            <IconsMenu x={400} size_icon="1rem" />
                        </div>

                        <div>
                            <span className="margin-left-5px">
                                Bấm để mua deal sốc
                            </span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default FsHotDealCal;
