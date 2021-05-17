import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TransportationChoice from '../choice/_main/TransportationChoice';
import './TransportationChoices.scss';
import ConfirmChoices from '../../../confirm_choices/ConfirmChoices';
//
TransportationChoices.propTypes = {};

//
function TransportationChoices(props) {
    //
    const {
        arr_transport,
        cur_transport,
        handleChangeTransport,
        closeExtraBuy,
    } = props;
    //
    const [new_transport, setNewTransport] = useState(cur_transport);
    //
    function onChangeTransportIx(trans_ix) {
        if (trans_ix !== new_transport.trans_ix) {
            setNewTransport({
                trans_ix: trans_ix,
                price_ix: 0,
            });
        }
    }
    //
    function onChangePriceIx(price_ix) {
        setNewTransport({
            ...new_transport,
            price_ix: price_ix,
        });
    }

    //
    function onChangeTransport() {
        handleChangeTransport(new_transport);
    }

    //
    return (
        <div>
            <div className="TransportationChoices_contain">
                <div className="FashionChoices_title">Transportation</div>

                <div className="TransportationChoices_body scroll-thin">
                    {arr_transport.map((trans_item, trans_ix) => (
                        <div key={`TransportationChoices_${trans_ix}`}>
                            <TransportationChoice
                                transport={trans_item}
                                trans_ix={trans_ix}
                                trans_ix_active={new_transport.trans_ix}
                                price_ix_active={new_transport.price_ix}
                                handleChangeTransportIx={onChangeTransportIx}
                                handleChangePriceIx={onChangePriceIx}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <ConfirmChoices
                    closeConfirmChoices={closeExtraBuy}
                    handleConfirmChoices={onChangeTransport}
                />
            </div>
        </div>
    );
}

export default TransportationChoices;
