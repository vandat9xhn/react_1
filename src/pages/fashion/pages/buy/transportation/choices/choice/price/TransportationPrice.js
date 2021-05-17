import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../../_some_function/FormatNum';
import RadioCustom from '../../../../../../../../component/input/radio_custom/RadioCustom';
//
import './TransportationPrice.scss';
//
TransportationPrice.propTypes = {};

//
function TransportationPrice(props) {
    //
    const { price_ix, is_active, title, price, handleChangePriceIx } = props;
    //
    function onChangePriceIx() {
        handleChangePriceIx(price_ix);
    }

    //
    return (
        <div>
            <div className="TransportationPrice_row" onClick={onChangePriceIx}>
                <div className="TransportationPrice_radio">
                    <RadioCustom is_active={is_active} />
                </div>

                <div>
                    <div>{title}</div>
                    <div>{formatNum(price)} vnd</div>
                </div>
            </div>
        </div>
    );
}

export default TransportationPrice;
