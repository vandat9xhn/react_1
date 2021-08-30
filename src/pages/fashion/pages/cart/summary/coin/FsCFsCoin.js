import React from 'react';
import PropTypes from 'prop-types';
//
import CheckBoxCustom from '../../../../../../component/input/checkbox_custom/CheckBoxCustom';
//
import './FsCFsCoin.scss';

//
FsCFsCoin.propTypes = {};

//
function FsCFsCoin({ coin, checked_coin, handleCheckedCoin }) {
    //
    return (
        <div className="FsCFsCoin fs-cart-summary-part font-14px">
            <div className="FsCFsCoin_row display-flex justify-content-end align-items-center">
                <div>
                    <CheckBoxCustom
                        checked={checked_coin}
                        title=""
                        handleChangeChecked={handleCheckedCoin}
                    />
                </div>

                <div>
                    <span
                        className={`margin-right-10px text-secondary ${
                            coin == 0 ? 'opacity-05' : ''
                        }`}
                    >
                        Shopee Xu:
                    </span>

                    {coin ? null : (
                        <span className="text-del font-16px">
                            Bạn chưa có Shopee Xu
                        </span>
                    )}
                </div>

                <div className="FsCFsCoin_coin text-align-end font-16px text-del">
                    <span>-₫{coin}</span>
                </div>
            </div>
        </div>
    );
}

export default FsCFsCoin;
