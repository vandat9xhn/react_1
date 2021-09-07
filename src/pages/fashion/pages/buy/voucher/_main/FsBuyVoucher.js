import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { formatNum } from '../../../../../../_some_function/FormatNum';
//
import { openScreenFsFreeShip } from '../../../../../../component/_screen/type/fs_free_ship/_main/ScreenFsFreeShip';
//
import './FsBuyVoucher.scss';
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
import { IS_MOBILE } from '../../../../../../_constant/Constant';

//
FsBuyVoucher.propTypes = {};

//
function FsBuyVoucher({ free_ship_id, free_ship_price, handleChooseFreeShip }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    function openFashionVoucher() {
        openScreenFsFreeShip({
            openScreenFloor: openScreenFloor,
            free_ship_id: free_ship_id,
            handleChooseFreeShip: handleChooseFreeShip,
        });
    }

    //
    return (
        <div className="FsBuyVoucher bg-primary">
            <div className="FsBuyVoucher_row flex-between-center">
                <div className="FsBuyVoucher_title font-18px text-cap font-400 text-222">
                    Fashion voucher
                </div>

                <div
                    className={`FsBuyVoucher_change font-14 font-500 cursor-pointer ${
                        free_ship_price ? 'color-fashion' : 'text-blue'
                    }`}
                    onClick={openFashionVoucher}
                >
                    {free_ship_price
                        ? `${
                              IS_MOBILE ? '' : 'Miễn phí vận chuyển '
                          }₫${formatNum(free_ship_price)}`
                        : 'Chọn voucher'}

                    {IS_MOBILE ? (
                        <span className="margin-left-5px">
                            <IconsArrow x={200} size_icon="1rem" />
                        </span>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default FsBuyVoucher;
