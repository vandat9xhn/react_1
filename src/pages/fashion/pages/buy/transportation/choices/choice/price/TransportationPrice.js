import React from 'react';
import PropTypes from 'prop-types';
//
import { formatNum } from '../../../../../../../../_some_function/FormatNum';
//
import RadioCustom from '../../../../../../../../component/input/radio_custom/RadioCustom';
import FlexDiv from '../../../../../../../../component/some_div/flex_div/FlexDiv';
//
import './TransportationPrice.scss';

//
TransportationPrice.propTypes = {};

//
function TransportationPrice({
    trans_ix,
    price_ix,
    title,
    price,
    is_active,
    handleChangePrice,
}) {
    //
    function onChangePrice() {
        handleChangePrice(trans_ix, price_ix);
    }

    //
    return (
        <div
            className="TransportationPrice cursor-pointer hv-bg-blur"
            onClick={onChangePrice}
        >
            <FlexDiv
                ComponentLeft={<RadioCustom is_active={is_active} />}
                ComponentRight={
                    <div>
                        <h4 className="margin-0">{title}</h4>

                        <div className="font-12px font-italic">
                            {formatNum(price)} vnd
                        </div>
                    </div>
                }
            />
        </div>
    );
}

export default TransportationPrice;
