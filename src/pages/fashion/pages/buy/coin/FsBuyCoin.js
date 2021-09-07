import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import CheckBoxCustom from '../../../../../component/input/checkbox_custom/CheckBoxCustom';
//
import './FsBuyCoin.scss';

//
FsBuyCoin.propTypes = {};

//
function FsBuyCoin({ coin, checked, handleChecked }) {
    //
    return (
        <div className="FsBuyCoin bg-primary">
            <div className="FsBuyCoin_row flex-between-center">
                <div className="display-flex align-items-center">
                    <div
                        className={`FsBuyCoin_title font-18px text-222 ${
                            IS_MOBILE && !coin ? 'display-none' : ''
                        }`}
                    >
                        Shopee Xu
                    </div>

                    <div
                        className={`margin-left-10px text-third ${
                            coin ? 'display-none' : ''
                        }`}
                    >
                        Không thể sử dụng Xu
                    </div>
                </div>

                <div className="display-flex align-items-center">
                    <div className="margin-right-5px">[-₫{coin}]</div>

                    <div className={`${coin ? '' : 'pointer-events-none'}`}>
                        <CheckBoxCustom
                            checked={checked}
                            handleChangeChecked={handleChecked}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FsBuyCoin;
