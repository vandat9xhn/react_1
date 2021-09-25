import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../_some_function/FormatNum';
//
import './PLDTwoPrice.scss';

//
PLDTwoPrice.propTypes = {};

//
function PLDTwoPrice({
    new_price,
    old_price,
    price_ix,
    new_price_2,
    title_price_2,

    choosePrice,
}) {
    //
    function choosePriceOne() {
        price_ix == 1 && choosePrice(0);
    }

    //
    function choosePriceTwo() {
        price_ix == 0 && choosePrice(1);
    }

    //
    return (
        <div
            className={`PLDTwoPrice bg-f1 ${
                price_ix == 0 ? 'PLDTwoPrice-1' : 'PLDTwoPrice-2'
            }`}
        >
            <div className="PLDTwoPrice_row display-flex">
                <div
                    className="PLDTwoPrice_one display-flex-center flex-col w-50per padding-y-5px cursor-pointer"
                    onClick={choosePriceOne}
                >
                    <div className="PLDTwoPrice_one_new font-16px font-700 line-20px">
                        {formatNum(new_price)}₫
                    </div>

                    {old_price ? (
                        <div className="text-del font-12px">
                            <del>{formatNum(old_price)}₫</del>
                        </div>
                    ) : null}
                </div>

                <div
                    className="PLDTwoPrice_two display-flex-center flex-col w-50per padding-y-5px cursor-pointer"
                    onClick={choosePriceTwo}
                >
                    <div className="font-12px">{title_price_2}</div>

                    <div className="PLDTwoPrice_two_new font-16px font-700 line-20px">
                        {formatNum(new_price_2)}₫
                    </div>

                    <div className="text-del font-12px">
                        <del>{formatNum(old_price)}₫</del>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PLDTwoPrice;
