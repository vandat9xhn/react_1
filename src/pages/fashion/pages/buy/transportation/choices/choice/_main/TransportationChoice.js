import React from 'react';
import PropTypes from 'prop-types';
// 
import TransportationPrice from '../price/TransportationPrice';
// 

import './TransportationChoice.scss';
//
TransportationChoice.propTypes = {};

//
function TransportationChoice(props) {
    //
    const {
        transport,
        trans_ix,
        trans_ix_active,
        price_ix_active,
        // 
        handleChangeTransportIx,
        handleChangePriceIx,
    } = props;
    const { name, prices } = transport;
    //
    function onChooseTransportIx() {
        handleChangeTransportIx(trans_ix);
    }

    //
    return (
        <div>
            <div className="TransportationChoice_contain">
                <div
                    className="TransportationChoice_name TransportationChoice_block label-field cursor-pointer"
                    onClick={onChooseTransportIx}
                >
                    {name}
                </div>

                <div
                    className={`TransportationChoice_forms ${
                        trans_ix_active == trans_ix
                            ? 'TransportationChoice_forms-active'
                            : 'TransportationChoice_forms-inactive'
                    }`}
                >
                    {prices.map((price_item, price_ix) => (
                        <div
                            key={`TransportationChoice_forms_${price_ix}`}
                            className="TransportationChoice_form TransportationChoice_block"
                        >
                            <TransportationPrice
                                is_active={
                                    trans_ix_active == trans_ix &&
                                    price_ix_active == price_ix
                                }
                                price_ix={price_ix}
                                title={price_item.title}
                                price={price_item.price}
                                handleChangePriceIx={handleChangePriceIx}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TransportationChoice;
