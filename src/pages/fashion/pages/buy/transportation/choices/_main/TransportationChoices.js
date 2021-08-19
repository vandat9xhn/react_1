import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_FashionTransport_L } from '../../../../../../../api/api_django/fashion/APIFashionToken';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import ScreenBlurFootYesNo from '../../../../../../../component/_screen/components/part/foot_yes_no/ScreenBlurFootYesNo';
import CircleLoading from '../../../../../../../component/waiting/circle_loading/CircleLoading';
//
import './TransportationChoices.scss';
//
import TransportationChoice from '../choice/_main/TransportationChoice';

//
TransportationChoices.propTypes = {
    handleTransport: PropTypes.func,
    closeTransport: PropTypes.func,
};

//
function TransportationChoices({ handleTransport, closeTransport }) {
    //
    const [transport_state, setTransportState] = useState({
        transport_arr: [],
        transport_ix: 0,
        price_ix: 0,

        transport_open_ix: 0,
        transport_ix_temp: 0,
        price_ix_temp: 0,
        has_fetched: false,
    });

    const {
        transport_arr,
        transport_ix,
        price_ix,

        transport_open_ix,
        transport_ix_temp,
        price_ix_temp,
        has_fetched,
    } = transport_state;

    //
    const ref_transport = useRef(null);

    //
    useEffect(() => {
        observeToDo({
            elm: ref_transport.current,
            callback: getData_Transport,
        });
    }, []);

    /* ---------------- GET API -------------- */

    async function getData_Transport() {
        const res = await API_FashionTransport_L({
            page: 1,
            size: 6,
        });

        setTransportState({
            ...transport_state,
            transport_arr: res.data.data,
            has_fetched: true,
        });
    }

    /* ------------------------------ */

    //
    function handleChangeTransport(trans_ix) {
        if (trans_ix !== transport_open_ix) {
            setTransportState({
                ...transport_state,
                transport_open_ix: trans_ix,
            });
        }
    }

    //
    function handleChangePrice(trans_ix, price_ix) {
        setTransportState({
            ...transport_state,
            transport_ix_temp: trans_ix,
            price_ix_temp: price_ix,
        });
    }

    //
    function onTransport() {
        setTransportState({
            ...transport_state,
            transport_ix: transport_ix_temp,
            price_ix: price_ix_temp,
        });
        handleTransport(
            transport_arr[transport_ix_temp],
            transport_ix,
            price_ix_temp
        );
    }

    //
    function onCloseTransport() {
        setTransportState({
            ...transport_state,
            transport_open_ix: transport_ix,
            transport_ix_temp: transport_ix,
            price_ix_temp: price_ix,
        });
        closeTransport();
    }

    //
    return (
        <div ref={ref_transport} className="TransportationChoices">
            <h2 className="FashionChoices_title margin-0 text-secondary">
                Transportation
            </h2>

            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <div className="TransportationChoices_body scroll-thin">
                    {transport_arr.map((trans_item, trans_ix) => (
                        <div key={`TransportationChoices_${trans_ix}`}>
                            <TransportationChoice
                                trans_item={trans_item}
                                trans_ix={trans_ix}
                                is_open={transport_open_ix == trans_ix}
                                is_choose={transport_ix_temp == trans_ix}
                                price_active_ix={price_ix_temp}
                                //
                                handleChangeTransport={handleChangeTransport}
                                handleChangePrice={handleChangePrice}
                            />
                        </div>
                    ))}
                </div>

                <div>
                    <ScreenBlurFootYesNo
                        handleConfirm={onTransport}
                        closeScreenBlur={onCloseTransport}
                    />
                </div>
            </div>

            <div className="width-fit-content margin-auto">
                <CircleLoading is_fetching={!has_fetched} />
            </div>
        </div>
    );
}

export default TransportationChoices;
