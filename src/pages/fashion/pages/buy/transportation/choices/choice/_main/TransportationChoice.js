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
        trans_item,
        trans_ix,
        is_open,
        is_choose,
        price_active_ix,
        //
        handleChangeTransport,
        handleChangePrice,
    } = props;

    const { name, price_arr } = trans_item;

    //
    function onChangeTransport() {
        handleChangeTransport(trans_ix);
    }

    //
    return (
        <div className="TransportationChoice">
            <h4
                className="TransportationChoice_name margin-0 padding-8px cursor-pointer hv-cl-blue"
                onClick={onChangeTransport}
            >
                {name}
            </h4>

            <div
                className={`TransportationChoice_forms ${
                    is_open
                        ? 'TransportationChoice_forms-active'
                        : 'TransportationChoice_forms-inactive'
                }`}
            >
                {price_arr.map((price_item, ix) => (
                    <div
                        key={`TransportationChoice_forms_${ix}`}
                        className="TransportationChoice_price"
                    >
                        <TransportationPrice
                            is_active={is_choose && price_active_ix == ix}
                            trans_ix={trans_ix}
                            price_ix={ix}
                            title={price_item.title}
                            price={price_item.price}
                            handleChangePrice={handleChangePrice}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TransportationChoice;
